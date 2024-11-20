import { HttpException, HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional, IsArray, IsString, IsNotEmpty } from 'class-validator';
import { ICourse } from 'src/common/interface/db/course.interface';
import { Course } from 'src/entity/course.entity';

const allowedSelectKeys: (keyof ICourse)[] = [
  'title',
  'price',
  'type',
  'level',
  'language',
  'id',
  'image',
  'isFree',
  'description',
];

const allowedRelations: (keyof ICourse)[] = [
  'contentPillars',
  'sectors',
  'functionalities',
  'platforms',
  'platformsAndTool',
  'owner',
  'modules',
];
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
  select?: (keyof ICourse)[];
}
