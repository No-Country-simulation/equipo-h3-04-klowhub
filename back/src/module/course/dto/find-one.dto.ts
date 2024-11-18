import { HttpException, HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional, IsArray, IsString, IsNotEmpty } from 'class-validator';
import { Course } from 'src/entity/course.entity';

export class FindOneCourseParamsDto {
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

    if (Object.keys(value).length === 0) {
      throw new HttpException(
        'Empty object for "where" parameter',
        HttpStatus.BAD_REQUEST,
      );
    }
    return value;
  })
  @ApiProperty({
    required: true,
    description: 'Course search parameters value',
  })
  @IsNotEmpty({ message: 'where params is mandatory' })
  where: Partial<Course>;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @ApiProperty({
    isArray: true,
    required: false,
    description: 'Relations to load',
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
  select?: (keyof Course)[];
}
