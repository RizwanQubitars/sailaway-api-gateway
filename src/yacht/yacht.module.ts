import { Module } from '@nestjs/common';
import { YachtController } from './controller/yacht/yacht.controller';
import { NatsClientModule } from 'src/nats-client/nats-client.module';

@Module({
  imports: [NatsClientModule],
  controllers: [YachtController]
})
export class YachtModule {}
