import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { TokenModule } from 'src/common/service/jwt/jwt.module';
import { JwtStrategy } from './stategy/jwt.strategy';
import { LocalStrategy } from './stategy/local.strategy';

@Module({
  imports: [UserModule, PassportModule, TokenModule],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
