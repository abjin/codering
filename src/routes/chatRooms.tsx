import styled from 'styled-components';
import ChatRoomCard from '../components/chat/chatRoomCard';

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ChatRoomItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #1e1e1e;
  &:hover {
    background-color: #2c2c2c;
  }
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const ChatRoomInfo = styled.div`
  flex: 1;
`;

const ChatRoomHeader = styled.h2`
  margin: 0;
  font-size: 16px;
  color: #ffffff;
`;

const ChatRoomMessage = styled.p`
  margin: 5px 0 0;
  font-size: 14px;
  color: #b0b0b0;
`;

const Timestamp = styled.span`
  font-size: 12px;
  color: #888888;
`;

const ChatRooms = () => {
  const chatRooms = [
    {
      id: 1,
      name: 'General',
      lastMessage: '안녕하세요, 환영합니다!',
      avatar: 'path/to/avatar1.png',
      timestamp: '오후 10:30',
    },
    {
      id: 2,
      name: 'Random',
      lastMessage: '자유롭게 대화해보세요.',
      avatar: 'path/to/avatar2.png',
      timestamp: '오후 9:15',
    },
    // 추가 채팅방 데이터를 여기에 삽입할 수 있습니다.
  ];

  return (
    <Wrapper>
      {chatRooms.map((room) => (
        <ChatRoomCard key={room.id}>
          <ChatRoomItem>
            <Avatar src={room.avatar} alt={`${room.name} avatar`} />
            <ChatRoomInfo>
              <ChatRoomHeader>{room.name}</ChatRoomHeader>
              <ChatRoomMessage>{room.lastMessage}</ChatRoomMessage>
            </ChatRoomInfo>
            <Timestamp>{room.timestamp}</Timestamp>
          </ChatRoomItem>
        </ChatRoomCard>
      ))}
    </Wrapper>
  );
};

export default ChatRooms;
