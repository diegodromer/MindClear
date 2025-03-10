import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {

  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) { }

  async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      const { password: _, ...result } = user;
      return result;
    }
    return null;
  }

  async generateToken(user: any) {
    const payload = {
      username: user.email,
      sub: user.id,
      role: user.role
    };

    const token = this.jwtService.sign(payload);
    return {
      access_token: token,
    };
  }
}
