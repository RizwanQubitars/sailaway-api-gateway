import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';


@Controller('users')
export class UsersController {
    constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}

    @Post('user/v1/signup')
    signUp(@Body() userData){
        console.log(userData, "here is in gateway")
        return this.natsClient.send({ cmd: 'signUpUser'}, userData);
    }

    @Post('user/v1/signin')
    signIn(@Body() userData){
        return this.natsClient.send({ cmd: 'signInUser'}, userData);
    }
    @Post('user/v1/send-otp')
    sendOtp(@Body() userData){
        return this.natsClient.send({ cmd: 'sendOtp'}, userData);
    }
    @Post('user/v1/varify-otp')
    varifyOtp(@Body() userData){
        return this.natsClient.send({ cmd: 'signInUser'}, userData);
    }
    @Post('user/v1/reset-password')
    resetPassword(@Body() userData){
        return this.natsClient.send({ cmd: 'signInUser'}, userData);
    }
}

