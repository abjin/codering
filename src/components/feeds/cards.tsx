import styled from 'styled-components';
import { Feed } from '../../types/common';

const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(45deg, #ff6b6b, #ff8787);
    margin-right: 1rem;
  }

  .user-details {
    h4 {
      color: #fff;
      margin: 0;
      font-size: 1rem;
    }

    span {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.875rem;
    }
  }
`;

const Content = styled.div`
  color: #fff;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;

  button {
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      color: #fff;
    }
  }
`;

const FeedImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

interface FeedCardProps {
  feed: Feed;
}

export function FeedCard({ feed }: FeedCardProps) {
  return (
    <CardWrapper>
      <UserInfo>
        <img src={feed.user.image} alt="user" className="avatar" />
        <div className="user-details">
          <h4>{feed.user.name}</h4>
          <span>{feed.time}</span>
        </div>
      </UserInfo>
      <Content>{feed.content}</Content>
      {feed.image && <FeedImage src={feed.image} alt="feed content" />}
      <Actions>
        <button>
          <span>❤️ 좋아요</span>
          <span>{feed.likes}</span>
        </button>
        <button>
          <span>💭 댓글</span>
          <span>{feed.comments}</span>
        </button>
        <button>
          <span>🔗 공유하기</span>
        </button>
      </Actions>
    </CardWrapper>
  );
}
