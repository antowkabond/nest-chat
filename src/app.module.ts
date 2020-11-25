import { Module } from '@nestjs/common';
import { ChatModule } from './chat/chat.module';
import { AlertModule } from './alert/alert.module';

@Module({
  imports: [ChatModule, AlertModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
