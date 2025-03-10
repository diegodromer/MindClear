import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthService } from 'src/auth/services/auth';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './interfaces/user.interface';

type UserWithoutPassword = Omit<User, 'password'>;

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private authService: AuthService,
  ) { }

  private readonly defaultSelect = {
    id: true,
    email: true,
    name: true,
    role: true,
    emailVerified: true,
    active: true,
    createdAt: true,
    updatedAt: true,
    company: true,
    timer: true,
  };

  async create(createUserDto: CreateUserDto): Promise<UserWithoutPassword> {
    const { email, password, name, company } = createUserDto;

    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new Error('Email já está em uso');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        company,
        role: 'USER',
        emailVerified: false,
        active: true,
        timer: JSON.stringify({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          lastUpdated: Date.now(),
        }),
      },
      select: {
        ...this.defaultSelect,
        password: true,
      },
    }) as User;

    const { password: _, ...result } = user;
    return result;
  }

  async findAll(): Promise<UserWithoutPassword[]> {
    const users = await this.prisma.user.findMany({
      select: this.defaultSelect,
    }) as UserWithoutPassword[];
    return users;
  }

  async findOne(id: string): Promise<UserWithoutPassword> {
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      throw new NotFoundException(`ID inválido: ${id}`);
    }

    const user = await this.prisma.user.findUnique({
      where: { id: numericId },
      select: this.defaultSelect,
    }) as UserWithoutPassword | null;

    if (!user) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }

    return user;
  }

  async findByCompany(company: string): Promise<UserWithoutPassword[]> {
    const users = await this.prisma.user.findMany({
      where: { company },
      select: this.defaultSelect,
    }) as UserWithoutPassword[];

    return users;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<UserWithoutPassword> {
    const data: any = { ...updateUserDto };
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    try {
      const user = await this.prisma.user.update({
        where: { id: parseInt(id, 10) },
        data,
        select: this.defaultSelect,
      }) as UserWithoutPassword;

      return user;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
      }
      throw error;
    }
  }

  async remove(id: string): Promise<void> {
    try {
      await this.prisma.user.delete({
        where: { id: parseInt(id, 10) },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
      }
      throw error;
    }
  }

  async login(loginDto: LoginDto): Promise<{ user: UserWithoutPassword; access_token: string }> {
    const { email, password } = loginDto;

    const user = await this.prisma.user.findUnique({
      where: { email },
      select: {
        ...this.defaultSelect,
        password: true,
      },
    });

    if (!user || !user.password) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const { password: _, ...userWithoutPassword } = user;
    const { access_token } = await this.authService.generateToken(user);

    return {
      user: userWithoutPassword,
      access_token,
    };
  }

  async verifyCredentials(loginDto: LoginDto): Promise<boolean> {
    const { email, password } = loginDto;

    const user = await this.prisma.user.findUnique({
      where: { email },
      select: {
        password: true,
      },
    });

    if (!user) {
      return false;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    return isPasswordValid;
  }

  async getTimer(userId: number): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { timer: true },
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return user.timer ? JSON.parse(user.timer) : null;
  }

  async updateTimer(userId: number, timerData: any): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const updatedUser = await this.prisma.user.update({
      where: { id: userId },
      data: {
        timer: JSON.stringify(timerData),
      },
      select: { timer: true },
    });

    return updatedUser.timer ? JSON.parse(updatedUser.timer) : null;
  }
}
