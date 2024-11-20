import { User } from 'src/entity/user.entity';

export interface AuthCredetials {
  access: string;
  refresh: string;
}

export interface LoginCredentials {
  profile: Partial<User>;
  access: string;
}
