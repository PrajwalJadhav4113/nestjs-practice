import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //apply global validation on nestjs apply
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,                    //remove that properties that not defined under dto
    forbidNonWhitelisted:true         //give error when they see unknwon field 
  }))
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
