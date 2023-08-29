/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: process.env.AUTH_MICROSERVICE_HOST as string | '0.0.0.0',
        port: process.env.AUTH_MICROSERVICE_PORT as unknown as number | 3001,
      },
    }
  );
  await app.listen();
  Logger.log(`🚀 auth-microservice running ...`);
}

bootstrap();
