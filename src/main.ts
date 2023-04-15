import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cors from 'cors';
import * as session from 'express-session';
import * as mySqlSession from 'express-mysql-session';
import { localsData } from './user/middlewares/localsData';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  app.useGlobalPipes(new ValidationPipe());

  const options = {
    host : "localhost",
    port : 3306,
    user : "root",
    password : "root",
    database : "training_partner",
  }
  const mySqlStore = mySqlSession(session)
  const store =new mySqlStore(options)

  app.use(
    session( {
      secret : "my-secret",
      resave : false,
      saveUninitialized :false,
      store : store,
  })
  )
  app.use(localsData);
  await app.listen(3001);

}
bootstrap();
