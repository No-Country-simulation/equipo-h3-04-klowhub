import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from 'src/entity/user.entity';
import { hash } from 'src/common/utils/hash';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    const { password: unhashPwd, ...rest } = createUserDto;
    const password = await hash(unhashPwd);
    const user = this.usersRepository.create({ password, ...rest });
    return await this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: string) {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new Error('User not found');
    }
    const { password: unhashPwd, ...rest } = updateUserDto;
    const password = await hash(unhashPwd);
    return await this.usersRepository.save({ ...user, password, ...rest });
  }

  async remove(id: string) {
    return await this.usersRepository.delete(id);
  }
}
