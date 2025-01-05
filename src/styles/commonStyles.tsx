import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: 700;
  background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  padding: 10px;
`;
