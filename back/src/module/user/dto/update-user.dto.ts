import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from '../../auth/dto/register.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
