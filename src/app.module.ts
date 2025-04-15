import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { YachtModule } from './yacht/yacht.module';

@Module({
  imports: [UserModule, YachtModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
