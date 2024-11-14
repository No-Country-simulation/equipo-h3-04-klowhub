import { Module } from '@nestjs/common';
import { DataBaseConfigModule } from './config/database/database.module';
import { UserModule } from './module/user/user.module';
import { AppController } from './app.controller';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './module/auth/auth.service';
import { LocalStrategy } from './module/auth/local.strategy';

@Module({
  imports: [DataBaseConfigModule, UserModule, PassportModule], // TODO: add modules
  providers: [AuthService, LocalStrategy],
  controllers: [AppController],
})
export class AppModule {}
