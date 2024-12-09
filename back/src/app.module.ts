import { Module } from '@nestjs/common';
import { DataBaseConfigModule } from './config/database/database.module';
import { UserModule } from './module/user/user.module';
import { AuthModule } from './module/auth/auth.module';
import { CourseModule } from './module/course/course.module';
import { LessonModule } from './module/lesson/lesson.module';
import { ApplicationModule } from './module/application/application.module';
import { UploadModule } from './module/upload/upload.module';
import { ModuleCourse } from './module/module/coursemodule.module';

@Module({
  imports: [
    DataBaseConfigModule,
    UserModule,
    AuthModule,
    CourseModule,
    ModuleCourse,
    LessonModule,
    ApplicationModule,
    UploadModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
