import { Module } from '@nestjs/common';
import { AlertController } from './alert.controller';
import { AlertGateway } from './alert.gateway';

@Module({
  controllers: [AlertController],
  imports: [],
  providers: [AlertGateway],
})
export class AlertModule {}
