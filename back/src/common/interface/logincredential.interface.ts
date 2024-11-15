import { User } from 'src/entity/user.entity';

export interface AuthCredetials {
  access: string;
  refresh: string;
}

export interface LoginCredentials {
  profile: User;
  access: string;
}
