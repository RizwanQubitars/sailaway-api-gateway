import { Body, Controller, Get, Inject, Post, Query } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('yacht')
export class YachtController {
    constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}

    @Post('v1/sycn-all-yachts')
    async syncAllYachts(@Body() yachtData){
        return this.natsClient.send({ cmd: 'synchYachts'}, yachtData);
    }

    @Get('v1/get-all-yachts')
    async getAllYachts(@Query() query: any){
        return this.natsClient.send({ cmd: 'getYachts'}, query);
    }
    @Get('v1/get-yacht-detail')
    async getYachtDetail(@Query() query: any){
        return this.natsClient.send({ cmd: 'getYachtDetail'}, query);
    }
    @Get('v1/get-filtered-yacht')
    async getFilterYacht(@Query() query: any){
        return this.natsClient.send({ cmd: 'getFilteredYacht'}, query);
    }
    @Get('v1/get-all-locations')
    async getAllLocation(){
        return this.natsClient.send({ cmd: 'getAllLocation'}, {});
    }

}
