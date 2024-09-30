
import { readFile,writeFile } from "fs/promises";
import { json } from "stream/consumers";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessagesRepository{


    async findOne(id:string){
        // Find the particuler messages from the json file 
        const content = await readFile('./messages.json','utf-8')
        const messages = JSON.parse(content)

        return messages[id]
    }

    async findAll(){
       // Find all the messages form the json file 
       const content = await readFile('./messages.json','utf-8')
       const messages = JSON.parse(content)

       return messages
    }
    
    async create(content: string){
       // insert the messages in the json file 
       const contents = await readFile('./messages.json','utf-8')
       const messages= JSON.parse(contents)

       const id =Math.floor(Math.random()*999)
       messages[id]={id,content}
       await writeFile('../messages.json',JSON.stringify(messages))
    }

}