import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';
import { CreateUserType } from 'src/utils/types';
// import { CreateUserDto } from '../dto/CreateUser.dto';

@Controller('users')
// @UseGuards(AuthGuard)
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  @UseGuards(AuthGuard)
  getUsers() {
    return this.userService.fetchUsers();
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body(ValidateCreateUserPipe) userData: CreateUserType) {
    console.log(userData);
    return this.userService.createUser(userData);
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    try {
      if (!id) {
        throw new Error('Something went wrong');
      }
      return this.userService.fetchUserById(id);
    } catch (error) {
      console.log(error);
    }
  }

  // @Post('create')
  // createUser(@Req() req: Request, @Res() res: Response) {
  //   console.log(req.body);
  //   res.send('Created');
  // }
  // @Get('posts')
  // getUsersPosts() {
  //   return [
  //     {
  //       username: 'John Doe',
  //       email: 'John@gmail.com',
  //       posts: [
  //         {
  //           id: 1,
  //           title: 'Post 1',
  //         },
  //         {
  //           id: 2,
  //           title: 'Post 3',
  //         },
  //       ],
  //     },
  //   ];
  // }
  // @Get('posts/comments')
  // getUsersPostsComments() {
  //   return [
  //     {
  //       id: 1,
  //       title: 'Post 1',
  //     },
  //   ];
  // }
}
