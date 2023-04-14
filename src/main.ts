import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cors from 'cors';
import * as session from 'express-session';
import * as mySqlSession from 'express-mysql-session';
import { localData } from "./user/middlewares/localsData";


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  app.useGlobalPipes(new ValidationPipe());
<<<<<<< HEAD
  app.setBaseViewsDir(join(__dirname, "..", "views"));
  app.useStaticAssets(join(__dirname, "..", "public"));
  app.setViewEngine("ejs");
=======

  const options = {
    host : "localhost",
    port : 3306,
    user : "root",
    password : "root",
    database : "training_partner",
  }
  const mySqlStore = mySqlSession(session)
  const store =new mySqlStore(options)

>>>>>>> db1d4c7aa23a7a145f014c4902bbd0eaaf7b968d
  await app.listen(3001);

}
bootstrap();
