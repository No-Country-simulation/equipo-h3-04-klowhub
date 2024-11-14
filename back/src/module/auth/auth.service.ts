import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { compareSync } from 'bcrypt';
import { User } from 'src/entity/user.entity';
@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  async validateUser(username: string, pass: string): Promise<User | null> {
    const user = await this.usersService.findOne(username);
    console.log(user);
    const validatePass = compareSync(pass, user.password);
    if (user && validatePass) {
      return user;
    }
    return null;
  }
}
