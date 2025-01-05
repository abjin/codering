import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: 700;
  background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  padding: 10px;
`;

const GroupCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.3s ease;

  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 12px;
    color: #2d3436;
  }

  p {
    color: #636e72;
    line-height: 1.5;
    margin: 8px 0;
  }

  .members {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #00b894;
    font-weight: 500;
    margin-bottom: 12px;
  }

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
    background: rgba(255, 255, 255, 0.95);
  }
`;

// 임시 데이터 - 나중에 API로 대체
const recommendedGroups = [
  {
    id: 1,
    name: '독서 모임',
    members: 15,
    description: '매주 새로운 책을 읽고 토론해요',
  },
  {
    id: 2,
    name: '등산 동호회',
    members: 25,
    description: '주말마다 새로운 산을 등반합니다',
  },
  {
    id: 3,
    name: '코딩 스터디',
    members: 10,
    description: '함께 성장하는 개발자 모임',
  },
];

// 임시 이벤트 데이터 추가
const localEvents = [
  {
    id: 1,
    title: '강남 플리마켓',
    date: '2024.04.15',
    location: '서울 강남구',
    description: '로컬 작가들의 수공예품 마켓',
    category: '마켓',
  },
  {
    id: 2,
    title: '홍대 버스킹 페스티벌',
    date: '2024.04.20',
    location: '서울 마포구',
    description: '신진 뮤지션들의 거리공연',
    category: '문화',
  },
  {
    id: 3,
    title: '송리단길 맛집 투어',
    date: '2024.04.22',
    location: '서울 송파구',
    description: '지역 맛집 탐방 행사',
    category: '푸드',
  },
];

const EventCard = styled(GroupCard)`
  .category {
    display: inline-block;
    padding: 6px 12px;
    background: linear-gradient(90deg, #ff6b6b, #ffa07a);
    color: white;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 12px;
  }

  .event-info {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
    color: #636e72;
    font-size: 14px;

    svg {
      color: #00b894;
    }
  }
`;

const SectionTitle = styled(Title)`
  margin-top: 50px;
`;

export default function Home() {
  return (
    <Wrapper>
      <Title>추천 소모임 ✨</Title>
      <CardGrid>
        {recommendedGroups.map((group) => (
          <GroupCard key={group.id}>
            <h3>{group.name}</h3>
            <div className="members">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              {group.members}명 참여중
            </div>
            <p>{group.description}</p>
          </GroupCard>
        ))}
      </CardGrid>

      <SectionTitle>추천 지역 이벤트 🎉</SectionTitle>
      <CardGrid>
        {localEvents.map((event) => (
          <EventCard key={event.id}>
            <span className="category">{event.category}</span>
            <h3>{event.title}</h3>
            <div className="event-info">
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                {event.location}
              </div>
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                </svg>
                {event.date}
              </div>
            </div>
            <p>{event.description}</p>
          </EventCard>
        ))}
      </CardGrid>
    </Wrapper>
  );
}
