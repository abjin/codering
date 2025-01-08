import styled from 'styled-components';
import { Title } from '../components/common/title';

const Wrapper = styled.div`
  padding: 20px;
`;

const EventGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  padding: 10px;
`;

const FestivalCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  background: linear-gradient(
    135deg,
    rgba(40, 45, 60, 0.97) 0%,
    rgba(45, 45, 65, 0.95) 20%,
    rgba(40, 50, 65, 0.95) 40%,
    rgba(40, 48, 60, 0.95) 60%,
    rgba(42, 45, 60, 0.95) 80%,
    rgba(40, 45, 60, 0.97) 100%
  );
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }

  .category {
    display: inline-block;
    padding: 6px 12px;
    background: linear-gradient(90deg, #4a90e2, #67b8ff);
    color: white;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 12px;
    color: #f8f9fa;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
    color: #adb5bd;
    font-size: 14px;

    .item {
      display: flex;
      align-items: center;
      gap: 8px;

      svg {
        width: 16px;
        height: 16px;
        color: #4a90e2;
      }
    }
  }

  .description {
    color: #ced4da;
    line-height: 1.6;
    margin-bottom: 16px;
  }

  .period {
    font-size: 16px;
    font-weight: 600;
    color: #4a90e2;
    margin-top: 16px;
  }
`;

// 데이터 수출
const aiEvents = [
  {
    id: 1,
    title: 'AI Summit Korea 2024',
    category: '컨퍼런스',
    startDate: '2024.05.15',
    endDate: '2024.05.17',
    location: '서울 코엑스',
    organizer: 'AI Tech Foundation',
    description:
      '최신 AI 기술 트렌드와 활용 사례를 공유하는 대규모 컨퍼런스. LLM, 생성형 AI 등 다양한 주제의 세션이 준비되어 있습니다.',
  },
  {
    id: 2,
    title: 'AI Developers Meetup',
    category: '밋업',
    startDate: '2024.04.20',
    endDate: '2024.04.20',
    location: '판교 스타트업캠퍼스',
    organizer: 'AI Dev Community',
    description:
      'AI 개발자들을 위한 네트워킹 밋업. 실제 프로젝트 경험과 노하우를 공유합니다.',
  },
  {
    id: 3,
    title: 'AI Ethics Workshop',
    category: '워크샵',
    startDate: '2024.06.10',
    endDate: '2024.06.11',
    location: '부산 벡스코',
    organizer: 'AI Ethics Council',
    description:
      'AI 윤리와 책임있는 AI 개발에 대해 함께 고민하고 토론하는 워크샵입니다.',
  },
];

export default function Conferences() {
  return (
    <Wrapper>
      <Title>AI 이벤트 & 컨퍼런스 🎯</Title>
      <EventGrid>
        {aiEvents.map((event) => (
          <FestivalCard key={event.id}>
            <span className="category">{event.category}</span>
            <h3>{event.title}</h3>
            <div className="info">
              <div className="item">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                {event.location}
              </div>
              <div className="item">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                {event.organizer}
              </div>
            </div>
            <p className="description">{event.description}</p>
            <div className="period">
              {event.startDate} ~ {event.endDate}
            </div>
          </FestivalCard>
        ))}
      </EventGrid>
    </Wrapper>
  );
}
