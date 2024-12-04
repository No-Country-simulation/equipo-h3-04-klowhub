import { Injectable } from '@nestjs/common';
import { SpeechClient, protos } from '@google-cloud/speech';

export interface SpeechResponse {
  text: string;
  confidence: number;
}

@Injectable()
export class SpeechService {
  private speechClient: SpeechClient;
  constructor() {
    this.speechClient = new SpeechClient({
      projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
      keyFilename: './secrets/google-credentials.json',
    });
  }
  async transcribeAudioBuffer(
    audioBuffer: Buffer,
    languageCode: string = 'es-ES',
    encoding: protos.google.cloud.speech.v1.RecognitionConfig.AudioEncoding = protos
      .google.cloud.speech.v1.RecognitionConfig.AudioEncoding.MP3,
    sampleRateHertz: number = 16000,
  ): Promise<SpeechResponse> {
    try {
      const request = {
        audio: {
          content: audioBuffer.toString('base64'), // buffer a base64
        },
        config: {
          encoding,
          sampleRateHertz,
          languageCode,
        },
      };

      const [response, ...rest] = await this.speechClient.recognize(request);

      if (response.results?.length > 0) {
        const transcription = response.results
          .map((result) => result.alternatives[0].transcript)
          .join(' ');
        const confidence = response.results[0].alternatives[0].confidence || 0;

        return { text: transcription, confidence };
      }
      console.log({ response, rest });
      throw new Error('No se pudo obtener una transcripción válida.');
    } catch (error) {
      throw new Error(
        `Error durante la transcripción: ${error.message || error}`,
      );
    }
  }
}
