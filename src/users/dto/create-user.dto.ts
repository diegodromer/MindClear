import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'admin@admin.com',
    description: 'Email do usuário',
  })
  @IsEmail({}, { message: 'Por favor, forneça um email válido' })
  @IsNotEmpty({ message: 'O email é obrigatório' })
  email: string;

  @ApiProperty({
    example: '123456',
    description: 'Senha do usuário',
  })
  @IsString({ message: 'A senha deve ser uma string' })
  @IsNotEmpty({ message: 'A senha é obrigatória' })
  password: string;

  @ApiProperty({
    example: 'Administrador',
    description: 'Nome completo do usuário',
  })
  @IsString({ message: 'O nome deve ser uma string' })
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  name: string;

  @ApiProperty({
    example: 'Admin Corp',
    description: 'Empresa atuante do usuário',
  })
  @IsString({ message: 'A empresa deve ser uma string' })
  @IsOptional()
  company?: string;
}