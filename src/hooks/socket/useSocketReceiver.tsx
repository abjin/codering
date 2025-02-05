import { useContext, useEffect } from 'react';
import { SocketContext } from '../../socket';

function useSocketReceiver(
  channel: string,
  onReceive: (data: unknown) => void
) {
  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.on(channel, onReceive);
    return () => {
      socket.off(channel, onReceive);
    };
  }, [channel, onReceive, socket]);
}

export { useSocketReceiver };
