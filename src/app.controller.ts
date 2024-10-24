import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './data';

@Controller("v1")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("users/:gender")
  getHello(@Param('gender') gender:User): string {
    console.log(gender)
    return this.appService.getHello();
  }
}
