import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { compareSync } from 'bcrypt';
import { User } from 'src/entity/user.entity';
@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  async validateUser(email: string, pass: string): Promise<User | null> {
    try {
      const user = await this.usersService.findOneByparams({ email });

      const validatePass = compareSync(pass, user.password);
      if (user && validatePass) {
        return user;
      }
      return null;
    } catch (error) {
      return null;
    }
  }
}
