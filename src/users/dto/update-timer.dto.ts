import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsObject, Min, ValidateNested } from 'class-validator';

export class TimerObjectDto {
  @ApiProperty({
    example: 1,
    description: 'Número de dias no timer',
  })
  @IsNumber({}, { message: 'O valor de "days" deve ser um número válido.' })
  @Min(0, { message: 'O valor de "days" não pode ser menor que 0.' })
  days: number;

  @ApiProperty({
    example: 2,
    description: 'Número de horas no timer',
  })
  @IsNumber({}, { message: 'O valor de "hours" deve ser um número válido.' })
  @Min(0, { message: 'O valor de "hours" não pode ser menor que 0.' })
  hours: number;

  @ApiProperty({
    example: 30,
    description: 'Número de minutos no timer',
  })
  @IsNumber({}, { message: 'O valor de "minutes" deve ser um número válido.' })
  @Min(0, { message: 'O valor de "minutes" não pode ser menor que 0.' })
  minutes: number;

  @ApiProperty({
    example: 45,
    description: 'Número de segundos no timer',
  })
  @IsNumber({}, { message: 'O valor de "seconds" deve ser um número válido.' })
  @Min(0, { message: 'O valor de "seconds" não pode ser menor que 0.' })
  seconds: number;

  @ApiProperty({
    example: 1672531200000,
    description: 'Timestamp da última atualização do timer (em milissegundos)',
  })
  @IsNumber({}, { message: 'O valor de "lastUpdated" deve ser um número válido.' })
  @Min(0, { message: 'O valor de "lastUpdated" não pode ser menor que 0.' })
  lastUpdated: number;
}

export class UpdateTimerDto {
  @ApiProperty({
    example: {
      days: 1,
      hours: 2,
      minutes: 30,
      seconds: 45,
      lastUpdated: 1672531200000,
    },
    description: 'Objeto contendo os valores do timer',
  })
  @IsObject({ message: 'O campo "timer" deve ser um objeto válido.' })
  @IsNotEmpty({ message: 'O campo "timer" não pode estar vazio.' })
  @ValidateNested({ message: 'O objeto "timer" deve ser válido e bem formatado.' })
  @Type(() => TimerObjectDto)
  timer: TimerObjectDto;
}
