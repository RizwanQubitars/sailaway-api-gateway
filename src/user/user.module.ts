import { Module } from '@nestjs/common';
import { UsersController } from './controller/users/users.controller';
import { NatsClientModule } from 'src/nats-client/nats-client.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [NatsClientModule,
    JwtModule.register({
          secret: 'iamsecure123jwt@',   // should be in .env
          signOptions: { expiresIn: '1h' }, // or whatever you need
        }),
  ],
  controllers: [UsersController]
})
export class UserModule {}
