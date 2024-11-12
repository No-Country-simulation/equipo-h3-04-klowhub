import { Module } from '@nestjs/common';
import { DataBaseConfigModule } from './config/database/database.module';

@Module({
  imports: [DataBaseConfigModule], // TODO: add modules
})
export class AppModule {}
