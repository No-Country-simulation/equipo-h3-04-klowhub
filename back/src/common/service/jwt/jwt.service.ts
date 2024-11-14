import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/common/interface/jwt.interface';
import { AuthCredetials } from 'src/common/interface/logincredential.interface';

@Injectable()
export class TokenService {
  private readonly SECRET: string;
  private readonly EXPIRE: string;
  private readonly REFRESH_EXPIRE: string;

  constructor(private readonly jwtService: JwtService) {
    this.SECRET = process.env.JWT_SECRET;
    this.EXPIRE = process.env.JWT_EXPIRE;
    this.REFRESH_EXPIRE = process.env.REFRESH_EXPIRE;
  }

  async genareteCredential(payload: JwtPayload): Promise<AuthCredetials> {
    const access = await this.jwtService.sign(payload, {
      secret: this.SECRET,
      expiresIn: this.EXPIRE,
    });

    const refresh = await this.jwtService.sign(payload, {
      secret: this.SECRET,
      expiresIn: this.REFRESH_EXPIRE,
    });
    return { access, refresh };
  }

  async verifyToken(token: string) {
    return this.jwtService.verify(token);
  }
}
