import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../auth/dto/register.dto';
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
    // validar que el email no este registrado

    // si el email esta registrado enviar un httpException con un mensaje y el error 400

    const { password: unhashPwd, ...rest } = createUserDto;
    const password = await hash(unhashPwd);
    const user = this.usersRepository.create({ password, ...rest });
    return await this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findById(id: string) {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  async findByparams(where: Partial<User>): Promise<User[]> {
    return await this.usersRepository.find({ where });
  }
  async findOneByparams(where: Partial<User>): Promise<User | null> {
    return await this.usersRepository.findOne({ where });
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
