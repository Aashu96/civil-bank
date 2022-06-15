import { BadRequestException, Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user/user.service';

import { JwtService } from '@nestjs/jwt';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService:AppService){}
    @Get('/')
    async hello(){
     return this.appService.getHello();
    }
       
           
}

