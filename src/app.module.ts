import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CorsMiddleware } from '@nest-middlewares/cors';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';
import { GraphiqueModule } from './graphique/graphique.module';
import { Graphique } from './graphique/graphique.entity';
import { DonneeGraphModule } from './donneeGraph/donneeGraph.module';
import { DonneeGraph } from './donneeGraph/donneeGraph.entity';
import { BattleModule } from './battle/battle.module';
import { SportModule } from './sport/sport.module';
import { ExerciceCourseModule } from './exercice-course/exercice-course.module';
import { ExerciceEscaladeModule } from './exercice-escalade/exercice-escalade.module';
import { ExerciceMusculationController } from './exercice-musculation/exercice-musculation.controller';
import { ExerciceMusculationModule } from './exercice-musculation/exercice-musculation.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type : 'mysql',
    host : 'localhost',
    port : 3306,
    username : 'root',
    password : 'root',
    database : 'training_partner',
    entities : [User,Graphique,DonneeGraph],
    synchronize : false,
  }),AppModule,UserModule, GraphiqueModule, DonneeGraphModule, BattleModule, SportModule, ExerciceCourseModule, ExerciceEscaladeModule, ExerciceMusculationModule],
  controllers: [AppController, ExerciceMusculationController],
  providers: [AppService],
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

