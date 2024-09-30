import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessageServices } from './messages.services';
import { MessagesRepository } from './messages.repository';

@Module({
  controllers: [MessagesController],
  providers:[MessageServices,MessagesRepository]
})

export class MessagesModule {}
