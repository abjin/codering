import styled from 'styled-components';
import { Title } from '../styles/commonStyles';

const Wrapper = styled.div`
  padding: 20px;
`;

const EventGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  padding: 10px;
`;

const EventCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  background: linear-gradient(
    135deg,
    rgba(40, 40, 40, 0.97) 0%,
    rgba(45, 40, 45, 0.95) 20%,
    rgba(40, 45, 40, 0.95) 40%,
    rgba(40, 42, 45, 0.95) 60%,
    rgba(42, 40, 45, 0.95) 80%,
    rgba(40, 40, 40, 0.97) 100%
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
    background: linear-gradient(90deg, #ff6b6b, #ffa07a);
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
        color: #00b894;
      }
    }
  }

  .description {
    color: #ced4da;
    line-height: 1.6;
    margin-bottom: 16px;
  }

  .price {
    font-size: 18px;
    font-weight: 600;
    color: #00b894;
  }

  .spots {
    margin-top: 8px;
    font-size: 14px;
    color: #ff6b6b;
  }
`;

// 임시 데이터
const events = [
  {
    id: 1,
    title: '도예 원데이 클래스',
    category: '공예',
    date: '2024.04.15',
    time: '14:00 - 17:00',
    location: '서울 강남구',
    instructor: '김도예 작가',
    description:
      '나만의 도자기를 만들어보는 특별한 경험. 초보자도 쉽게 따라할 수 있습니다.',
    price: 55000,
    maxSpots: 8,
    remainingSpots: 3,
  },
  {
    id: 2,
    title: '마크라메 월행잉 만들기',
    category: '공예',
    date: '2024.04.16',
    time: '19:00 - 21:00',
    location: '서울 성동구',
    instructor: '이마크 강사',
    description: '인테리어 소품으로 perfect한 마크라메 월행잉을 만들어봐요.',
    price: 45000,
    maxSpots: 6,
    remainingSpots: 2,
  },
  {
    id: 3,
    title: '향수 블렌딩 클래스',
    category: '뷰티',
    date: '2024.04.17',
    time: '15:00 - 17:00',
    location: '서울 마포구',
    instructor: '박향기 조향사',
    description: '나만의 시그니처 향수를 직접 만들어보는 특별한 경험.',
    price: 65000,
    maxSpots: 10,
    remainingSpots: 5,
  },
];

export default function Classes() {
  return (
    <Wrapper>
      <Title>원데이 클래스 ✨</Title>
      <EventGrid>
        {events.map((event) => (
          <EventCard key={event.id}>
            <span className="category">{event.category}</span>
            <h3>{event.title}</h3>
            <div className="info">
              <div className="item">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                </svg>
                {event.date} {event.time}
              </div>
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
                {event.instructor}
              </div>
            </div>
            <p className="description">{event.description}</p>
            <div className="price">{event.price.toLocaleString()}원</div>
            <div className="spots">잔여 {event.remainingSpots}석</div>
          </EventCard>
        ))}
      </EventGrid>
    </Wrapper>
  );
}
