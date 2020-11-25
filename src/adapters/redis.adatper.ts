import { IoAdapter } from '@nestjs/platform-socket.io';
import { createAdapter } from 'socket.io-redis';
import { RedisClient } from 'redis';

export class RedisIoAdapter extends IoAdapter {
  createIOServer(port: number): any {
    const ioServer = super.createIOServer(port);
    const pubClient = new RedisClient({ host: 'localhost', port: 6379 });
    const subClient = pubClient.duplicate();

    ioServer.adapter(createAdapter({ pubClient, subClient }));
    return ioServer;
  }
}
