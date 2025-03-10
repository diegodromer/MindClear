import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { UpdateTimerDto } from './dto/update-timer.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './interfaces/user.interface';
import { UserService } from './user.service';

type UserWithoutPassword = Omit<User, 'password'>;

@ApiTags('users')
@Controller('api/users')
export class UserController {

  constructor(private readonly userService: UserService) { }

  @Post('register')
  @ApiOperation({ summary: 'Criar novo usuário' })
  async create(@Body() createUserDto: CreateUserDto): Promise<UserWithoutPassword> {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os usuários' })
  async findAll(): Promise<UserWithoutPassword[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar usuário por ID' })
  async findOne(@Param('id') id: string): Promise<UserWithoutPassword> {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar usuário' })
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserWithoutPassword> {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover usuário' })
  async remove(@Param('id') id: string): Promise<{ message: string }> {
    await this.userService.remove(id);
    return { message: 'Usuário removido com sucesso' };
  }

  @Post('login')
  @ApiOperation({ summary: 'Realizar login' })
  async login(@Body() loginDto: LoginDto): Promise<{
    user: UserWithoutPassword;
    access_token: string;
  }> {
    return this.userService.login(loginDto);
  }

  @Post('verify')
  @ApiOperation({ summary: 'Verificar email e senha' })
  async verifyCredentials(@Body() loginDto: LoginDto): Promise<{ valid: boolean }> {
    const isValid = await this.userService.verifyCredentials(loginDto);
    if (!isValid) {
      throw new UnauthorizedException('Credenciais inválidas. Verifique o email e a senha.');
    }
    return { valid: true };
  }

  @Get('company/:company')
  @ApiOperation({ summary: 'Listar usuários por empresa' })
  async findByCompany(@Param('company') company: string): Promise<UserWithoutPassword[]> {
    return this.userService.findByCompany(company);
  }

  @Get(':id/timer')
  @ApiOperation({ summary: 'Obter timer do usuário' })
  async getTimer(@Param('id') id: string): Promise<any> {
    const userId = parseInt(id, 10);
    if (isNaN(userId)) {
      throw new NotFoundException(`ID inválido: ${id}`);
    }
    return this.userService.getTimer(userId);
  }

  @Patch(':id/timer')
  @ApiOperation({ summary: 'Atualizar timer do usuário' })
  async updateTimer(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTimerDto: UpdateTimerDto,
  ): Promise<any> {
    const updatedTimer = await this.userService.updateTimer(id, updateTimerDto.timer);
    return updatedTimer;
  }

}
