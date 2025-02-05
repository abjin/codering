import styled from 'styled-components';
import { ReactNode } from 'react';

const Card = styled.div`
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 10px;
  width: 100%;
`;

interface ChatRoomCardProps {
  children: ReactNode;
}

const ChatRoomCard = ({ children }: ChatRoomCardProps) => {
  return <Card>{children}</Card>;
};

export default ChatRoomCard;
