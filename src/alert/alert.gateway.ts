import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ namespace: '/alert' })
export class AlertGateway {
  @WebSocketServer() wsServer: Server;

  sendToAll(message): void {
    this.wsServer.emit('alertToClient', { message });
  }
}
