import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ExempleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    console.log(req.headers.authorization);
    const { authorization } = req.headers;
    if (!authorization) {
      throw new Error('No token provided');
    }
    if (authorization === 'Bearer 123456789') next();
    else throw new HttpException('Invalid token', HttpStatus.FORBIDDEN);
  }
}
