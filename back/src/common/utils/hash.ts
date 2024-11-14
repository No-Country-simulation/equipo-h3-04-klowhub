import { BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

export async function hash(value: string) {
  if (!value) throw new BadRequestException('Password is required to Hash');
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(value, salt);
}
