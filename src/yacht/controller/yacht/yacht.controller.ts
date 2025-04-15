import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('yacht')
export class YachtController {
    constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}

    @Post('v1/sycn-all-yachts')
    async syncAllYachts(@Body() yachtData){
        return this.natsClient.send({ cmd: 'synchYachts'}, yachtData);
    }

    @Get('v1/get-all-yachts')
    async getAllYachts(){
        return this.natsClient.send({ cmd: 'getYachts'}, {});
    }

}
