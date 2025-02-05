import styled from 'styled-components';

const MessageItemWrapper = styled.div<{ isMine: boolean }>`
  display: flex;
  flex-direction: ${({ isMine }) => (isMine ? 'row-reverse' : 'row')};
  gap: 8px;
  margin-bottom: 16px;
`;

const DEFAULT_PROFILE_IMAGE =
  'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y';

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background-color: #f0f0f0;
`;

const MessageContent = styled.div<{ isMine: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ isMine }) => (isMine ? 'flex-end' : 'flex-start')};
`;

const Nickname = styled.span`
  font-size: 12px;
  color: #666;
  margin-bottom: 4px;
`;

const MessageBubbleWrapper = styled.div<{ isMine: boolean }>`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  flex-direction: ${({ isMine }) => (isMine ? 'row-reverse' : 'row')};
`;

const MessageBubble = styled.div<{ isMine: boolean }>`
  background-color: ${({ isMine }) => (isMine ? '#007AFF' : '#f0f0f0')};
  color: ${({ isMine }) => (isMine ? '#fff' : '#000')};
  padding: 8px 12px;
  border-radius: 16px;
  max-width: 70%;
  word-break: break-word;
`;

const MessageInfo = styled.div<{ isMine: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ isMine }) => (isMine ? 'flex-end' : 'flex-start')};
  gap: 4px;
  font-size: 12px;
  color: #8e8e8e;
  min-width: 45px;
`;

const TimeStamp = styled.span`
  font-size: 12px;
  color: #8e8e8e;
  white-space: nowrap;
`;

const UnreadCount = styled.span`
  color: #007aff;
  font-weight: 600;
`;

interface Message {
  id: number;
  content: string;
  senderId: number;
  timestamp: string;
  unreadCount: number;
  user: {
    nickname: string;
    profileImage: string;
  };
}

const MessageItem = ({ message }: { message: Message }) => {
  const isMine = message.senderId === 1;

  // 프로필 이미지 에러 처리
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.src = DEFAULT_PROFILE_IMAGE;
  };

  return (
    <MessageItemWrapper isMine={isMine}>
      {!isMine && (
        <ProfileImage
          src={message.user.profileImage || DEFAULT_PROFILE_IMAGE}
          alt={message.user.nickname}
          onError={handleImageError}
        />
      )}
      <MessageContent isMine={isMine}>
        {!isMine && <Nickname>{message.user.nickname}</Nickname>}
        <MessageBubbleWrapper isMine={isMine}>
          <MessageBubble isMine={isMine}>{message.content}</MessageBubble>
          <MessageInfo isMine={isMine}>
            {message.unreadCount > 0 && (
              <UnreadCount>{message.unreadCount}</UnreadCount>
            )}
            <TimeStamp>{message.timestamp}</TimeStamp>
          </MessageInfo>
        </MessageBubbleWrapper>
      </MessageContent>
    </MessageItemWrapper>
  );
};

export default MessageItem;
