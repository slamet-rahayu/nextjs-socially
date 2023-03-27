import { io } from 'socket.io-client';

export const socket = io('http://localhost:1337', {
  autoConnect: false
});
