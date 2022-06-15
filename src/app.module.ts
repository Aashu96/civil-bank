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
    url:'postgres://hfrntvcjqktiam:11aedd91c4c1059b6b766954ed1ff94a03f65b96d528261757a082c254dea221@ec2-18-210-64-223.compute-1.amazonaws.com:5432/dfji8fhdr58j8p',
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
