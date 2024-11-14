import { Module } from '@nestjs/common';
import { DataBaseConfigModule } from './config/database/database.module';
import { UserModule } from './module/user/user.module';

@Module({
  imports: [DataBaseConfigModule, UserModule], // TODO: add modules
})
export class AppModule {}
