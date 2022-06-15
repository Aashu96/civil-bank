import { BadRequestException, Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
@Controller()
export class UserController {
    constructor(private readonly userService:UserService,private jwtService:JwtService   
    ){}
    
    @Post('/login')
    async login( 
      @Body('email')email:string,
      @Body('password')password:string,
      ){
      const user=await this.userService.getOne({email});
      if(!user)
        throw new BadRequestException('Invalid Credential');
      
      if(! await bcrypt.compare(password,user.password))
        throw new BadRequestException('Invalid Credential');
      return {
        jwt: await this.userService.generateToken({id:user.id,email:user.email})
      };         
}
@Post('/register')
async register(
  @Body('name')name:string,
  @Body('email')email:string,
  @Body('password')password:string,
  ){
  const passwordHash = await bcrypt.hash(password,10);
  return this.userService.createUser(
    name,
    email,
    passwordHash
  );
}

@UseGuards(AuthGuard('jwt'))  
@Get('/user')
async user(@Req() req){
    return req.user;
}

}
