import { HttpException, HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional, IsArray, IsString, IsNotEmpty } from 'class-validator';
import { IApplication } from 'src/common/interface/db/application.interface';

const allowedSelectKeys: (keyof IApplication)[] = ['id', 'description'];

const allowedRelations: (keyof IApplication)[] = ['owner'];
export class FindOneApplicationParamsDto {
  @Transform((param) => {
    let value = param.value;
    if (typeof param.value !== 'object') {
      try {
        value = JSON.parse(param.value);
      } catch (error) {
        throw new HttpException(
          'Invalid JSON format for "where" parameter',
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    // Si el objeto está vacío, lanza un error
    if (Object.keys(value).length === 0) {
      throw new HttpException(
        'Empty object for "where" parameter',
        HttpStatus.BAD_REQUEST,
      );
    }
    return value;
  })
  @ApiProperty({
    description: 'Condiciones para buscar una aplicación (en formato JSON)',
    required: true,
    type: String,
    example: { id: 'a48c9347-8fcb-4c50-a405-ea58faff0c34' },
  })
  @IsNotEmpty()
  where: Record<string, any>;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @ApiProperty({
    isArray: true,
    required: false,
    description: 'Relations to load',
  })
  @Transform((param) => {
    if (typeof param.value === 'string') {
      return param.value.split(',');
    }
    console.log('param.value', param.value);

    if (!param.value.every((e) => allowedRelations.includes(e))) {
      throw new HttpException(
        `Invalid relation key. Allowed keys: ${allowedRelations.join(', ')}`,
        HttpStatus.BAD_REQUEST,
      );
    }
    return param.value;
  })
  relations: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @ApiProperty({
    isArray: true,
    required: false,
    description: 'Columns to select',
  })
  @Transform((param) => {
    if (typeof param.value === 'string') {
      return [param.value];
    }

    if (!param.value.every((e) => allowedSelectKeys.includes(e))) {
      console.log('param.value', param.value);
      throw new HttpException(
        `Invalid relation key. Allowed keys: ${allowedSelectKeys.join(', ')}`,
        HttpStatus.BAD_REQUEST,
      );
    }
    return param.value;
  })
  select?: (keyof IApplication)[];
}
