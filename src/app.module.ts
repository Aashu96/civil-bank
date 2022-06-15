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
    host: process.env.DB_HOST,
    url:process.env.DB_URL,
    port: 5432,
    username:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME,
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
