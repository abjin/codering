import styled from 'styled-components';
import { Conference } from '../../types/common';

const Card = styled.div`
  min-width: 280px;
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

interface EventCardProps {
  conference: Conference;
}

export function ConferenceCard({ conference }: EventCardProps) {
  return (
    <Card key={conference.id}>
      <span className="category">{conference.category}</span>
      <h3>{conference.title}</h3>
      <div className="info">
        <div className="item">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          {conference.location}
        </div>
        <div className="item">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          {conference.organizer}
        </div>
      </div>
      <p className="description">{conference.description}</p>
      <div className="period">
        {conference.startDate} ~ {conference.endDate}
      </div>
    </Card>
  );
}
