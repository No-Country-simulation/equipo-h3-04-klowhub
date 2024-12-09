import { PartialType } from '@nestjs/mapped-types';
import { CreateModuleDto } from './create-coursemodule.dto';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdateModuleDto extends PartialType(CreateModuleDto) {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  title?: string;

  @IsNotEmpty()
  @IsString()
  description?: string;
}
