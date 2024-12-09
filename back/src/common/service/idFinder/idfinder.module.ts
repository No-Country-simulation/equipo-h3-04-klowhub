import { Module } from '@nestjs/common';
import { GenericService } from './idfinder.service';

@Module({
  imports: [],
  providers: [GenericService],
  controllers: [],
  exports: [GenericService],
})
export class IdFinderModule {}
