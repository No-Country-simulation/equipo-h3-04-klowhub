import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/exceptions/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global configurations
  app.useGlobalPipes(new ValidationPipe());
  // app.useGlobalInterceptors(new TransformInterceptor());
  app.setGlobalPrefix('api');

  const options = new DocumentBuilder()
    .setTitle('Klowhub - hackathon 3 grups 04')
    .setDescription('API documentation for Klowhub project')
    .setVersion('1.0')
    .addTag('Auth')
    .addBearerAuth()
    .build();

  app.use(
    bodyParser.json({
      limit: '50mb',
    }),
  );
  app.use(
    bodyParser.urlencoded({
      limit: '50mb',
      extended: true,
    }),
  );

  //Compress response
  app.use(compression());

  //Activate CORS
  app.enableCors();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
