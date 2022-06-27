import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from "dotenv";
import { UserModule } from './user/UserModule';
import { KnexModule } from 'nest-knexjs';
import { LoanApplicationModule } from './loan-application/loan-application.module';
config()
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    url:'postgres://xlofodarfdpdzr:02f5ba6888527dcbd07e204cdae64e5bd9e95b615881adcc0e21f3acc3eebfa6@ec2-52-72-99-110.compute-1.amazonaws.com:5432/df9pvhbg12hmg3',
    entities: [__dirname+'/**/*.entity{.ts,.js}'],
    synchronize:true,
    extra:{
        ssl:{
            rejectUnauthorized:false
        }
    },
    logging:true,
  }), 
  KnexModule.forRoot({
    config: {
      client: 'postgres',
      useNullAsDefault:true,
      connection: {
      ssl:{rejectUnauthorized:false},
      host:'ec2-52-72-99-110.compute-1.amazonaws.com',
      user:'xlofodarfdpdzr',
      password:'02f5ba6888527dcbd07e204cdae64e5bd9e95b615881adcc0e21f3acc3eebfa6',
      database:'df9pvhbg12hmg3'

      },
    },
  })
  ,UserModule, LoanApplicationModule],      
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
