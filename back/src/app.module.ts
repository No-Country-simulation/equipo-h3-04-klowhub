import { Module } from '@nestjs/common';
import { DataBaseConfigModule } from './config/database/database.module';
import { UserModule } from './module/user/user.module';
import { PassportModule } from '@nestjs/passport';

import { AuthModule } from './module/auth/auth.module';

@Module({
  imports: [DataBaseConfigModule, UserModule, AuthModule], // TODO: add modules
  providers: [],
  controllers: [],
})
export class AppModule {}
