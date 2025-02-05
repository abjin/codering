import styled from 'styled-components';

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 24px;

  span {
    display: inline-flex;
    align-items: center;
  }
`;

export const Tag = styled.span`
  padding: 6px 12px;
  background: rgba(108, 92, 231, 0.1);
  border-radius: 12px;
  font-size: 13px;
  color: #6c5ce7;
  font-weight: 500;
`;

export const LevelBadge = styled.span<{ $level: string }>`
  padding: 8px 16px;
  border-radius: 16px;
  font-size: 13px;
  font-weight: 600;
  background: ${({ $level: level }) => {
    switch (level) {
      case '초급':
        return 'rgba(0, 184, 148, 0.1)';
      case '중급':
        return 'rgba(108, 92, 231, 0.1)';
      case '고급':
        return 'rgba(225, 112, 85, 0.1)';
      default:
        return 'rgba(0, 184, 148, 0.1)';
    }
  }};
  color: ${({ $level: level }) => {
    switch (level) {
      case '초급':
        return '#00b894';
      case '중급':
        return '#6c5ce7';
      case '고급':
        return '#e17055';
      default:
        return '#00b894';
    }
  }};
`;
