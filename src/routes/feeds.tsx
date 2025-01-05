import { useState } from 'react';
import styled from 'styled-components';
import { Title } from '../styles/commonStyles';

const Wrapper = styled.div`
  padding: 20px;
`;

const FeedGrid = styled.div`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FeedCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  padding: 24px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(255, 240, 245, 0.9) 20%,
    rgba(240, 255, 245, 0.9) 40%,
    rgba(240, 248, 255, 0.9) 60%,
    rgba(248, 240, 255, 0.9) 80%,
    rgba(255, 255, 255, 0.95) 100%
  );
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(147, 112, 219, 0.05);

  .header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;

    .profile-image {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
    }

    .user-info {
      flex: 1;

      .name {
        font-weight: 600;
        color: #2d3436;
      }

      .time {
        font-size: 12px;
        color: #636e72;
      }
    }
  }

  .content {
    color: #2d3436;
    line-height: 1.6;
    margin-bottom: 16px;
  }

  .image {
    width: 100%;
    border-radius: 12px;
    margin-bottom: 16px;
  }

  .actions {
    display: flex;
    gap: 20px;
    color: #636e72;
    font-size: 14px;

    button {
      display: flex;
      align-items: center;
      gap: 6px;
      background: none;
      border: none;
      color: inherit;
      cursor: pointer;
      padding: 4px 0;

      &:hover {
        color: #ff6b6b;
      }
    }
  }
`;

const CreateFeedCard = styled(FeedCard)<{ isExpanded: boolean }>`
  .input-wrapper {
    display: flex;
    gap: 12px;
    margin-bottom: ${(props) => (props.isExpanded ? '16px' : '0')};
  }

  textarea {
    flex: 1;
    border: none;
    background: none;
    resize: none;
    font-size: 16px;
    color: #2d3436;
    min-height: ${(props) => (props.isExpanded ? '100px' : '40px')};
    padding: 8px 0;

    &::placeholder {
      color: #adb5bd;
    }

    &:focus {
      outline: none;
    }
  }

  .actions {
    display: ${(props) => (props.isExpanded ? 'flex' : 'none')};
    justify-content: space-between;
    align-items: center;

    .buttons {
      display: flex;
      gap: 12px;
    }
  }
`;

const ActionButton = styled.button<{ primary?: boolean }>`
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  ${(props) =>
    props.primary
      ? `
    background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
    border: none;
    color: white;
    
    &:hover {
      opacity: 0.9;
    }
  `
      : `
    background: none;
    border: 1px solid #ddd;
    color: #636e72;
    
    &:hover {
      background: #f5f5f5;
    }
  `}
`;

const ImageUploadButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: none;
  color: #636e72;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

// 임시 데이터
const feeds = [
  {
    id: 1,
    user: {
      name: '김모임',
      image: '/profile1.jpg',
    },
    content:
      '오늘 독서모임에서 읽은 책 "함께자라기"! 애자일과 성장에 대한 인사이트가 정말 좋았어요. 다음 모임이 기대됩니다 📚',
    image: '/book-meeting.jpg',
    time: '1시간 전',
    likes: 24,
    comments: 8,
  },
  {
    id: 2,
    user: {
      name: '등산왕',
      image: '/profile2.jpg',
    },
    content:
      '주말 등산 모임 후기입니다! 날씨도 좋고 멤버들도 좋고 완벽한 하루였어요 ⛰️',
    image: '/hiking.jpg',
    time: '3시간 전',
    likes: 42,
    comments: 12,
  },
];

export default function Feeds() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    // TODO: API 연동
    console.log('Submit:', content);
    setContent('');
    setIsExpanded(false);
  };

  return (
    <Wrapper>
      <Title>피드 ✨</Title>
      <FeedGrid>
        <CreateFeedCard isExpanded={isExpanded}>
          <div className="input-wrapper">
            <div className="profile-image" />
            <textarea
              placeholder="무슨 생각을 하고 계신가요?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onFocus={() => setIsExpanded(true)}
            />
          </div>
          <div className="actions">
            <ImageUploadButton>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
              </svg>
              사진 추가
            </ImageUploadButton>
            <div className="buttons">
              <ActionButton onClick={() => setIsExpanded(false)}>
                취소
              </ActionButton>
              <ActionButton primary onClick={handleSubmit}>
                게시하기
              </ActionButton>
            </div>
          </div>
        </CreateFeedCard>

        {/* 기존 피드 목록 */}
        {feeds.map((feed) => (
          <FeedCard key={feed.id}>
            <div className="header">
              <div className="profile-image" />
              <div className="user-info">
                <div className="name">{feed.user.name}</div>
                <div className="time">{feed.time}</div>
              </div>
            </div>
            <p className="content">{feed.content}</p>
            {feed.image && (
              <div
                className="image"
                style={{ height: '300px', background: '#ddd' }}
              />
            )}
            <div className="actions">
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                {feed.likes}
              </button>
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM17 11h-4v4h-2v-4H7V9h4V5h2v4h4v2z" />
                </svg>
                {feed.comments}
              </button>
            </div>
          </FeedCard>
        ))}
      </FeedGrid>
    </Wrapper>
  );
}
