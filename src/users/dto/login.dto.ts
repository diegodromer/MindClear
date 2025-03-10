import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: 'admin@admin.com',
    description: 'Email do usuário',
  })
  @IsEmail({}, { message: 'Por favor, forneça um email válido.' })
  @IsNotEmpty({ message: 'O email é obrigatório.' })
  email: string;

  @ApiProperty({
    example: '123456',
    description: 'Senha do usuário',
  })
  @IsString({ message: 'A senha deve ser uma string.' })
  @IsNotEmpty({ message: 'A senha é obrigatória.' })
  password: string;
}
