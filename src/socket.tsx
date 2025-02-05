import { createContext, PropsWithChildren, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io(`localhost:3000`, {
  transports: ['websocket'],
  autoConnect: false,
});

const SocketContext = createContext(socket);

function SocketProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    socket.connect();
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}

export { SocketContext, SocketProvider };
