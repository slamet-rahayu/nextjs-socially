import { io } from 'socket.io-client';

export const socket = io('http://localhost:1337', {
  autoConnect: false
});

export const connect = () => {
  socket.connect();
  return socket;
};

export const disconnect = () => {
  socket.disconnect();
  return socket;
};

export const reconnect = () => {
  return new Promise((resolve) => {
    socket.on('reconnect', () => {
      resolve(socket);
    });
  });
};
