import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import {MessagesModule} from './messages/messages.module'

async function bootstrap() {

  //Create the instace of the server 
  const app = await NestFactory.create(MessagesModule);

  //Golabal Validation 
  app.useGlobalPipes(
    new ValidationPipe()
  )
  //Server is running in the port number 3000
  await app.listen(3000);
}
bootstrap();
