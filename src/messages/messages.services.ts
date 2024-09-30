import { MessagesRepository } from "./messages.repository";
import { Injectable } from "@nestjs/common";
@Injectable()
export class MessageServices{
    constructor(public messageRepo:MessagesRepository){

    }

    findOne(id:string){
        return this.messageRepo.findOne(id)
    }

    findAll(){
        return this.messageRepo.findAll()
    }
    
    createMessage(content:string){
        return this.messageRepo.create(content)
    }
}