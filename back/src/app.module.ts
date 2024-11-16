import { Module } from '@nestjs/common';
import { DataBaseConfigModule } from './config/database/database.module';
import { UserModule } from './module/user/user.module';
import { PassportModule } from '@nestjs/passport';

import { AuthModule } from './module/auth/auth.module';
import { CourseModule } from './module/course/course.module';

@Module({
  imports: [DataBaseConfigModule, UserModule, AuthModule, CourseModule], // TODO: add modules
  providers: [],
  controllers: [],
})
export class AppModule {}
