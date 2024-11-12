import { Module } from '@nestjs/common';
import { DataBaseConfigService } from './config.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from './configuration';
/**
 * Import and providDB configuration related classes.
 *
 * @module
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DataBaseConfigService,
    }),
  ],
  providers: [DataBaseConfigService],
  exports: [TypeOrmModule],
})
export class DataBaseConfigModule {}
