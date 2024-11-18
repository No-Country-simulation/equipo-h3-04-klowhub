import { Injectable } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';

export interface UploadResponse {
  id: string;
  name: string;
  url: string;
  urlSigned: string;
  bucket: string;
}

@Injectable()
export class UploadService {
  private storage: Storage;
  private bucket: string;
  private signExpiry = 1000 * 60 * 60;

  private permission: 'read' | 'write' | 'delete' | 'resumable' = 'read';

  constructor() {
    this.storage = new Storage({
      projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
      keyFilename: './secrets/google-credentials.json',
    });
    this.bucket = process.env.GOOGLE_CLOUD_BUCKET_NAME;
  }

  async uploadBuffer(
    buffer: Buffer,
    fileName: string,
    mimeType: string,
  ): Promise<UploadResponse> {
    const bucket = this.storage.bucket(this.bucket);

    const file = bucket.file(fileName);

    const stream = file.createWriteStream({
      metadata: {
        contentType: mimeType,
      },
      resumable: true,
    });

    return new Promise((resolve, reject) => {
      stream.on('error', (error) => {
        reject(error);
      });

      stream.on('finish', async () => {
        const [url] = await file.getSignedUrl({
          action: this.permission, // read
          expires: this.signExpiry, // 1 hour
        });

        resolve({
          id: file.id,
          name: file.name,
          url: file.publicUrl(),
          urlSigned: url,
          bucket: file.bucket.name,
        });
      });

      stream.end(buffer);
    });
  }
}
