import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  IsArray,
} from 'class-validator';
import {
  ContentType,
  CourseLevel,
  CreationType,
  DicountType,
  DiscountOption,
} from 'src/common/interface/db/course.interface';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @ApiProperty({
    description: 'Title of the course',
    example: 'Introduction to AppSheet Development',
    maxLength: 255,
  })
  title: string;

  @IsEnum(ContentType)
  @ApiProperty({
    description: 'Content type of the course',
    enum: ContentType,
    example: ContentType.GRATUITO,
  })
  contentType: ContentType;

  @IsEnum(CreationType)
  @ApiProperty({
    description: 'Creation type of the course',
    enum: CreationType,
    example: CreationType.COURSE,
  })
  creationType: CreationType;

  @IsString()
  @IsNotEmpty()
  @MaxLength(600)
  @ApiProperty({
    description: 'Short description of the course',
    example: 'Learn how to create apps using AppSheet efficiently.',
    maxLength: 600,
  })
  description: string;

  @IsEnum(CourseLevel)
  @ApiProperty({
    description: 'Skill level of the course',
    enum: CourseLevel,
    example: CourseLevel.BASIC,
  })
  skillLevel: CourseLevel;

  @IsString()
  @ApiProperty({
    description: 'Language of the course',
    example: 'English',
  })
  language: string;

  @IsArray()
  @IsString({ each: true })
  @ApiProperty({
    description: 'Labels for categorization',
    example: ['Low-code', 'App Development'],
  })
  labels: string[];

  @IsEnum(DiscountOption)
  @ApiProperty({
    description: 'Indicates if the course has a discount',
    enum: DiscountOption,
    example: DiscountOption.YES,
  })
  hasDiscount: DiscountOption;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Discount product ID',
    example: 'DISCOUNT12345',
    required: false,
  })
  discountProductId?: string;

  @IsString()
  @ApiProperty({
    description: 'Learning outcomes of the course',
    example: 'Create simple and effective AppSheet applications.',
  })
  learningOutcomes: string;

  @IsArray()
  @IsString({ each: true })
  @ApiProperty({
    description: 'Sectors to which the course belongs',
    example: ['Technology', 'Software Development'],
  })
  sector: string[];

  @IsArray()
  @IsString({ each: true })
  @ApiProperty({
    description: 'Content pillars for the course',
    example: ['Learning by Doing', 'Practical Applications'],
  })
  contentPillar: string[];

  @IsArray()
  @IsString({ each: true })
  @ApiProperty({
    description: 'Tools and platforms relevant to the course',
    example: ['Google Sheets', 'AppSheet'],
  })
  toolsAndPlatforms: string[];

  @IsArray()
  @IsString({ each: true })
  @ApiProperty({
    description: 'Functionalities covered in the course',
    example: ['Workflow automation', 'Data visualization'],
  })
  functionalities: string[];

  @IsArray()
  @IsString({ each: true })
  @ApiProperty({
    description: 'Prerequisites for taking the course',
    example: ['Basic knowledge of spreadsheets'],
  })
  prerequisites: string[];

  @IsString()
  @ApiProperty({
    description: 'Detailed description of the course',
    example:
      'This course covers all aspects of AppSheet, including creating workflows, connecting data sources, and deploying applications.',
  })
  detailedDescription: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @ApiProperty({
    description: 'Discount percentage (optional)',
    example: 10,
    required: false,
  })
  discountPercentage?: number;

  @IsOptional()
  @IsEnum(DicountType)
  @ApiProperty({
    description: 'Discount type product (optional)',
    enum: DicountType,
    example: DicountType.COURSE,
    required: false,
  })
  discountTypeProduct?: DicountType;

  @IsOptional()
  @ApiProperty({
    description: 'Price of the course (optional)',
    type: 'number',
    example: 999,
    required: false,
  })
  price?: number;

  @IsOptional()
  @ApiProperty({
    description: 'Cover image file (optional)',
    type: 'string',
    format: 'binary',
    required: false,
  })
  coverImage?: string;
}

const demoCreateCourseDto: CreateCourseDto = {
  title: 'Introduction to AppSheet Development',
  contentType: ContentType.PAGO,
  creationType: CreationType.COURSE,
  description: 'Learn how to create apps using AppSheet efficiently.',
  skillLevel: CourseLevel.BASIC,
  language: 'English',
  labels: ['Low-code', 'App Development', 'AppSheet'],
  learningOutcomes: 'Create simple and effective AppSheet applications.',
  sector: ['Technology', 'Software Development'],
  contentPillar: ['Learning by Doing', 'Practical Applications'],
  toolsAndPlatforms: ['Google Sheets', 'AppSheet'],
  functionalities: [
    'Workflow automation',
    'Data visualization',
    'App integration',
  ],
  prerequisites: ['Basic knowledge of spreadsheets'],
  detailedDescription:
    'This course covers all aspects of AppSheet, including creating workflows, connecting data sources, and deploying applications.',
  hasDiscount: DiscountOption.YES,
  discountPercentage: 10,
  discountTypeProduct: DicountType.COURSE,
  coverImage: undefined,
};
