import styled from 'styled-components';

export const BaseCard = styled.div`
  background: rgba(30, 30, 30, 0.6);
  border-radius: 24px;
  padding: 32px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-4px);
    background: rgba(35, 35, 35, 0.8);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    gap: 12px;
  }

  .category {
    display: inline-flex;
    align-items: center;
    padding: 8px 16px;
    background: linear-gradient(135deg, #6c5ce7, #a367fc);
    color: white;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 600;
  }

  h3 {
    font-size: 24px;
    font-weight: 700;
    color: #f8f9fa;
    margin: 20px 0;
  }

  .info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 16px;
    margin-bottom: 28px;

    .item {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 12px 20px;
      background: rgba(108, 92, 231, 0.1);
      border-radius: 16px;
      color: #6c5ce7;
      font-size: 14px;
      font-weight: 500;

      svg {
        width: 18px;
        height: 18px;
      }
    }
  }

  .description {
    color: #a8b2c1;
    line-height: 1.7;
    font-size: 15px;
    margin-bottom: 28px;
    min-height: 52px;
  }
`;
