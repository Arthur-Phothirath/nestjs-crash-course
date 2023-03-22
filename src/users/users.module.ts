import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { AnotherMiddleware } from './middlewares/another/another.middleware';
import { ExempleMiddleware } from './middlewares/exemple/exemple.middleware';
import { UsersService } from './services/users/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ExempleMiddleware)
      .forRoutes(UsersController)
      .apply(AnotherMiddleware)
      .forRoutes({
        path: 'users',
        method: RequestMethod.GET,
      });
  }
}
