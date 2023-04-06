import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CorsMiddleware } from '@nest-middlewares/cors';

@Module({
  imports: [UserModule],
  controllers: [AppController],
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

