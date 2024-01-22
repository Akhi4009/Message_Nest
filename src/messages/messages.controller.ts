import { Controller, Get, Post, Body, Param } from '@nestjs/common';


@Controller('messages')
export class MessagesController {
   @Get()
   listMessages() {

   }
   
   @Post()
   craeteMessage(){

   }

   @Get('/:id')
   getMessage(){

   }
}
