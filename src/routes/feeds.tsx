import { useState } from 'react';
import { mockFeeds } from '../data/mockData';
import { Title } from '../components/common/title';
import { FeedCard } from '../components/feeds/cards';
import styled from 'styled-components';
import { CreateFeedCard } from '../components/feeds/createFeedCard';

const PageWrapper = styled.div`
  padding: 1.25rem;
  margin: 0 auto;
  background-color: #000;
  min-height: 100vh;
  color: #fff;

  @media (min-width: 1280px) {
    width: 900px;
  }
`;

const PageTitle = styled(Title)`
  color: #ff6b6b;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const FeedList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const HolographicCard = styled.div`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05)
  );
  border-radius: 16px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 1rem;

  /* 홀로그램 효과 */
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.05) 100%
    );
    z-index: 0;
  }
`;

const CreateFeedWrapper = styled(HolographicCard)`
  input,
  textarea {
    width: 100%;
    background: rgba(255, 255, 255, 0.05);
    border: none;
    border-radius: 8px;
    color: #fff;
    padding: 0.8rem;
    margin-bottom: 1rem;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

export default function Feeds() {
  const [content, setContent] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = () => {
    console.log('Submit:', content);
    setContent('');
    setIsExpanded(false);
  };

  return (
    <PageWrapper>
      <PageTitle>피드 ✨</PageTitle>
      <FeedList>
        <CreateFeedWrapper>
          <CreateFeedCard
            content={content}
            isExpanded={isExpanded}
            onContentChange={setContent}
            onExpandChange={setIsExpanded}
            onSubmit={handleSubmit}
          />
        </CreateFeedWrapper>

        {mockFeeds.map((feed) => (
          <HolographicCard key={feed.id}>
            <FeedCard feed={feed} />
          </HolographicCard>
        ))}
      </FeedList>
    </PageWrapper>
  );
}
