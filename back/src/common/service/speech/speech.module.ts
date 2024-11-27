import { Module } from '@nestjs/common';
import { SpeechService } from './speech.service';

@Module({
  imports: [],
  providers: [SpeechService],
  controllers: [],
  exports: [SpeechService],
})
export class SpeechModule {}
