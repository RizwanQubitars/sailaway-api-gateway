import { Body, Controller, Get, Inject, Post, UseGuards } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AuthenticationGuard } from 'src/common/guard/authentication/authentication.guard';


@Controller('users')
export class UsersController {
    constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}

    @Post('user/v1/signup')
    signUp(@Body() userData){
        return this.natsClient.send({ cmd: 'signUpUser'}, userData);
    }
    @Post('user/v1/varify-signup')
    varifySignUp(@Body() userEmailData){
        return this.natsClient.send({ cmd: 'varifySignUpUser' }, userEmailData);
    }

    @Post('user/v1/signin')
    signIn(@Body() signInUserData){
        return this.natsClient.send({ cmd: 'signInUser'}, signInUserData);
    }
    @Post('user/v1/send-otp')
    sendOtp(@Body() otpData){
        return this.natsClient.send({ cmd: 'sendOtp'}, otpData);
    }
    @Post('user/v1/varify-otp')
    varifyOtp(@Body() varifyOtpData){
        return this.natsClient.send({ cmd: 'varifyOtp'}, varifyOtpData);
    }
    @Post('user/v1/reset-password')
    resetPassword(@Body() resetPasswordData){
        return this.natsClient.send({ cmd: 'resetPassword'}, resetPasswordData);
    }

    @UseGuards(AuthenticationGuard)
    @Get('user/v1/get-user-profile')
    getUserProfile( ){
        return this.natsClient.send({ cmd: 'getUserProfile'}, {});
    }
}

