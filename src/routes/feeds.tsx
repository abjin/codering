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
      <CreateFeedCard
        content={content}
        isExpanded={isExpanded}
        onContentChange={setContent}
        onExpandChange={setIsExpanded}
        onSubmit={handleSubmit}
      />
      <FeedList>
        {mockFeeds.map((feed, key) => (
          <FeedCard feed={feed} key={key} />
        ))}
      </FeedList>
    </PageWrapper>
  );
}
