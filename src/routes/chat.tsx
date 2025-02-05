import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Header = styled.div`
  padding: 15px 20px;
  background-color: #1e1e1e;
  border-bottom: 1px solid #2c2c2c;
  flex-shrink: 0;
`;

const ChatTitle = styled.h2`
  margin: 0;
  font-size: 16px;
  color: #ffffff;
`;

const ParticipantsCount = styled.span`
  font-size: 14px;
  color: #b0b0b0;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: calc(100vh - var(--header-height) - 70px);
  overflow-y: auto;
  padding: 20px;
`;

const MessageItem = styled.div<{ isMine: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isMine ? 'flex-end' : 'flex-start')};
  max-width: 70%;
  align-self: ${(props) => (props.isMine ? 'flex-end' : 'flex-start')};
`;

const MessageContent = styled.div<{ isMine: boolean }>`
  background-color: ${(props) => (props.isMine ? '#4a9eff' : '#2c2c2c')};
  padding: 10px 15px;
  border-radius: 15px;
  color: #ffffff;
`;

const MessageInfo = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 4px;
  font-size: 12px;
  color: #888888;
`;

const UnreadCount = styled.span`
  color: #4a9eff;
`;

const InputWrapper = styled.div`
  padding: 20px;
  background-color: #1e1e1e;
  border-top: 1px solid #2c2c2c;
  flex-shrink: 0;
`;

const MessageInput = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 20px;
  border: none;
  background-color: #2c2c2c;
  color: #ffffff;
  &:focus {
    outline: none;
  }
`;

interface Message {
  id: number;
  content: string;
  senderId: number;
  timestamp: string;
  unreadCount: number;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const messageListRef = useRef<HTMLDivElement>(null);

  const currentUserId = 1; // 현재 사용자 ID (실제로는 인증 시스템에서 가져와야 함)

  // Mock 데이터 로드
  const loadMessages = async (pageNum: number) => {
    setLoading(true);
    // API 호출을 시뮬레이션
    const mockMessages = Array.from({ length: 20 }, (_, i) => ({
      id: pageNum * 20 + i,
      content: `메시지 ${pageNum * 20 + i}`,
      senderId: Math.random() > 0.5 ? currentUserId : 2,
      timestamp: new Date().toLocaleTimeString(),
      unreadCount: Math.floor(Math.random() * 3),
    }));

    setTimeout(() => {
      setMessages((prev) => [...prev, ...mockMessages]);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    loadMessages(page);
  }, [page]);

  useEffect(() => {
    const messageContainer = document.querySelector('.message-container');
    if (messageContainer) {
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }
  }, [messages]);

  const handleScroll = () => {
    if (messageListRef.current && !loading) {
      const { scrollTop } = messageListRef.current;
      if (scrollTop === 0) {
        setPage((prev) => prev + 1);
      }
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      content: inputMessage,
      senderId: currentUserId,
      timestamp: new Date().toLocaleTimeString(),
      unreadCount: 3,
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputMessage('');
  };

  return (
    <Wrapper>
      <Header>
        <ChatTitle>
          일반 채팅방 <ParticipantsCount>(25명)</ParticipantsCount>
        </ChatTitle>
      </Header>

      <MessageContainer className="message-container">
        {messages.map((message) => (
          <MessageItem
            key={message.id}
            isMine={message.senderId === currentUserId}
          >
            <MessageContent isMine={message.senderId === currentUserId}>
              {message.content}
            </MessageContent>
            <MessageInfo>
              <span>{message.timestamp}</span>
              {message.unreadCount > 0 && (
                <UnreadCount>{message.unreadCount}</UnreadCount>
              )}
            </MessageInfo>
          </MessageItem>
        ))}
      </MessageContainer>

      <InputWrapper>
        <form onSubmit={handleSendMessage}>
          <MessageInput
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="메시지를 입력하세요..."
          />
        </form>
      </InputWrapper>
    </Wrapper>
  );
};

export default Chat;
