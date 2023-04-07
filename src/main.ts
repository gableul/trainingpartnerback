//import { NestExpressApplication } from '@nestjs/platform-express';
//import { join } from 'path';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cors from 'cors';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  app.useGlobalPipes(new ValidationPipe());
  /*app.setBaseViewsDir(join(__dirname, "..", "views"));
  app.useStaticAssets(join(__dirname, "..", "public"));
  app.setViewEngine("ejs");*/
  await app.listen(3001);

}
bootstrap();
