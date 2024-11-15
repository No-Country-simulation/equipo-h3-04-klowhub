import { User } from 'src/entity/user.entity';

export interface JwtPayload {
  id: string;
  profile: User;
}
