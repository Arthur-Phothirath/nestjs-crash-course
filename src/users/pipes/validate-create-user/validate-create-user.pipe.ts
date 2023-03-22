import {
  ArgumentMetadata,
  HttpException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/controllers/dto/CreateUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log('pipe use');
    console.log('From pipe:' + value);
    const parseAgeToInt = parseInt(value.age.toString());
    if (isNaN(parseAgeToInt)) {
      console.log(value.age + ' is not a number');
      throw new HttpException('Age must be a number', 400);
    } else {
      return { ...value, age: parseAgeToInt };
    }
  }
}
