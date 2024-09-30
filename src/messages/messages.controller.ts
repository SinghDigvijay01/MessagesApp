import { Controller, Get, Post,Body,Param,NotFoundException } from '@nestjs/common';
import {CreateMessageDto} from './dtos/create-message.dto'
import { MessageServices } from './messages.services';
import { retry } from 'rxjs';

@Controller('messages')
export class MessagesController {
  constructor(public messageService:MessageServices){
    
  }
      
  @Get()
  listMessages(){
    return this.messageService.findAll()
  }
  @Post()
  createMessages(@Body() body: CreateMessageDto){
    return this.messageService.createMessage(body.content)
  }
  @Get('/:id')
  async getMessage(@Param('id') id : string){
    const messsage= await this.messageService.findOne(id)
    if (!messsage){
      throw new NotFoundException('message not found')
    }
    return messsage
  }
}
