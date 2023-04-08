import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cors from 'cors';
import * as session from 'express-session';
import * as mySqlSession from 'express-mysql-session';
import { localData } from "./middlewares/localsData";


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  app.useGlobalPipes(new ValidationPipe());

  const options = {
    host : "localhost",
    port : 3306,
    user : "root",
    password : "root",
    database : "trainingpartner",
  }
  const mySqlStore = mySqlSession(session)
  const store =new mySqlStore(options)

  await app.listen(3001);

}
bootstrap();
