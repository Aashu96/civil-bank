import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { User } from './user/user.entity';
import { UserService } from './user/user.service';
import { PassportModule, PassportStrategy } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { config } from "dotenv";
config()
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    url:'postgres://yocbkfuxctqlsu:675efe26850643c606cbf023cf526d03f94d57beec8d5345127376c8f69eb17c@ec2-52-72-56-59.compute-1.amazonaws.com:5432/d69vkn8td3j74',
    entities: [__dirname+'/**/*.entity{.ts,.js}'],
    synchronize:true,
    extra:{
        ssl:{
            rejectUnauthorized:false
        }
    },
    logging:true,
  }), TypeOrmModule.forFeature([User]),JwtModule.register({
    secret:'SECRET',
    signOptions:{expiresIn:'60s'}
  }),PassportModule],      
  controllers: [AppController],
  providers: [AppService,UserService,JwtStrategy],
})
export class AppModule {}
