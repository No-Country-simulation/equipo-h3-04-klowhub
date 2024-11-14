import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { compareSync } from 'bcrypt';
import { User } from 'src/entity/user.entity';
@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  async validateUser(email: string, pass: string): Promise<User | null> {
    const user = await this.usersService.findOneByparams({ email });
    console.log('[USER]', user);
    const validatePass = compareSync(pass, user.password);
    if (user && validatePass) {
      return user;
    }
    return null;
  }
  // generateCredential (payload) devuelva los token
  async generateCredential(payload: any) {
    return payload;
  }
}
