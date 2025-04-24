import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { YachtModule } from './yacht/yacht.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UserModule,
    YachtModule,
    JwtModule.register({
      secret: 'iamsecure123jwt@',   // should be in .env
      signOptions: { expiresIn: '1h' }, // or whatever you need
    }),
  ],
  controllers: [],
  providers: [],
  exports: [JwtModule]
})
export class AppModule {}
