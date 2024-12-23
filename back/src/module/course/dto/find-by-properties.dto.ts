import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { FindAllCourseParamsDto } from './find-all.dto';
import {
  CourseLevel,
  CreationType,
} from 'src/common/interface/db/course.interface';

export class PropertyDto {
  @IsOptional()
  @IsArray()
  @IsEnum(CourseLevel, { each: true })
  @ApiProperty({
    type: [String],
    enum: CourseLevel,
    required: false,
    description: 'Array of course levels',
  })
  levels?: CourseLevel[];

  @IsOptional()
  @IsArray()
  @ApiProperty({
    type: [String],
    required: false,
    description: 'Array of course languages',
  })
  languages?: string[];

  @IsOptional()
  @IsArray()
  @IsEnum(CreationType, { each: true })
  @ApiProperty({
    type: [String],
    enum: CreationType,
    required: false,
    description: 'Array of course types',
  })
  type?: CreationType[];

  @IsOptional()
  @IsBoolean()
  @ApiProperty({
    type: Boolean,
    required: false,
    description: 'Indicates if the course is free or not',
  })
  isFree?: boolean;

  @IsOptional()
  @IsArray()
  @IsUUID('all', { each: true })
  @ApiProperty({
    type: [String],
    format: 'uuid',
    required: false,
    description: 'Array of platform UUIDs',
  })
  platforms?: string[];

  @IsOptional()
  @IsArray()
  @IsUUID('all', { each: true })
  @ApiProperty({
    type: [String],
    format: 'uuid',
    required: false,
    description: 'Array of tool UUIDs',
  })
  tools?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @ApiProperty({
    type: [String],
    required: false,
    description: 'Array of sector names',
  })
  sector?: string[];
}

export class FindAllCourseByPropertiesDto extends FindAllCourseParamsDto {
  @ValidateNested()
  @Type(() => PropertyDto)
  @ApiProperty({
    type: PropertyDto,
    required: true,
    description: 'Course search parameters value',
  })
  property: PropertyDto;
}
