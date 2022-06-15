import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
async function bootstrap(){
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.enableCors({
    credentials:true,
    origin:'http//:localhost:3000'
  })
  const PORT=process.env.PORT || 3000;
  console.log(PORT);
  await app.listen(`PORT NO:${PORT}`);
  
}
bootstrap();