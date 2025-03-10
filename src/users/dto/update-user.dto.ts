import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({
    example: '{"days": 1, "hours": 2, "minutes": 30, "seconds": 45, "lastUpdated": 1672531200000}',
    description: 'Objeto de timer do usuário',
  })
  @IsString({ message: 'O timer deve ser uma string JSON válida.' })
  @IsOptional()
  timer?: string;
}
