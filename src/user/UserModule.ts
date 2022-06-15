import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { User } from './user.entity';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JwtStrategy } from 'src/jwt.strategy';
@Module({
    imports:[TypeOrmModule.forFeature([User]),JwtModule.register({
        secret:'SECRET',
        signOptions:{expiresIn:'60s'}
      }),PassportModule],
      providers:[UserService,JwtStrategy],
      controllers:[UserController]
})
export class UserModule {}
