import { ApiProperty } from '@nestjs/swagger';
import { FindOneCourseParamsDto } from './find-one.dto';
import { IsOptional, Max, Min } from 'class-validator';
import { Course } from 'src/entity/course.entity';

export class FindAllCourseParamsDto extends FindOneCourseParamsDto {
  @ApiProperty({
    required: false,
    description: 'Max number of results',
  })
  @Max(50, {
    message: 'Max limit is 50',
  })
  @Min(1, {
    message: 'Min limit is 1',
  })
  @IsOptional()
  take?: number;

  @ApiProperty({
    required: false,
    description: 'Offset number of results',
  })
  @IsOptional()
  @ApiProperty({
    required: false,
    description: 'Offset number of results',
  })
  offset?: number;

  @ApiProperty({
    required: false,
    description: 'Order by column and direction (ASC or DESC)',
    example: {
      title: 'ASC',
    },
  })
  @IsOptional()
  order?: Record<string, 'ASC' | 'DESC'>;

  @ApiProperty({
    required: false,
    description: 'Course search parameters value',
  })
  @IsOptional()
  where: Partial<Course>;
}
