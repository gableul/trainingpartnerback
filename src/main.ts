import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);;
  app.useGlobalPipes(new ValidationPipe())
  app.setBaseViewsDir(join(__dirname, "..", "views"));
  app.useStaticAssets(join(__dirname, "..", "public"));
  app.setViewEngine("ejs");
  await app.listen(3000);
}
bootstrap();
