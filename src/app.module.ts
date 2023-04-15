import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CorsMiddleware } from '@nest-middlewares/cors';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';
import { AlgoModule } from './algo/algo.module';
import { SeanceController } from './seance/seance.controller';
import { SeanceService } from './seance/seance.service';
import { SeanceModule } from './seance/seance.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type : 'mysql',
    host : 'localhost',
    port : 3306,
    username : 'root',
    password : 'root',
    database : 'training_partner',
    entities : [User],
    synchronize : true,
  }),AppModule,UserModule, AlgoModule, SeanceModule],
  controllers: [AppController, SeanceController],
  providers: [AppService, SeanceService],
})
export class AppModule implements NestModule {
  // Configuration du CORS
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorsMiddleware).forRoutes('*'); // ICI LE BACK PEUT RECEVOIR DES REQUETES DE PARTOUT
    // QUAND ON AURA UN SERVEUR /NDD, MODIFIER LA LIGNE CI DESSUS PAR :
    // consumer.apply(CorsMiddleware).withOrigins('http://monsite.com').forRoutes('*');
    //CHANGER monsite.com PAR NOTRE URL.

  }
}

