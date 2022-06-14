import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import  {config}  from './ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { User } from './user/user.entity';
import { UserService } from './user/user.service';
import { PassportModule, PassportStrategy } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [TypeOrmModule.forRoot(config), TypeOrmModule.forFeature([User]),JwtModule.register({
    secret:'SECRET',
    signOptions:{expiresIn:'60s'}
  }),PassportModule],      
  controllers: [AppController],
  providers: [AppService,UserService,JwtStrategy],
})
export class AppModule {}
