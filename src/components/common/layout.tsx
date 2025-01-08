import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 25px;
  padding: 10px;
`;

export const SearchSection = styled.div`
  background: rgba(30, 30, 30, 0.6);
  padding: 24px;
  border-radius: 20px;
  margin-bottom: 40px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);

  input {
    width: 100%;
    padding: 16px 24px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(20, 20, 20, 0.8);
    color: #f8f9fa;
    font-size: 16px;
    margin-bottom: 15px;

    &:focus {
      outline: none;
      border-color: #6c5ce7;
      box-shadow: 0 0 0 2px rgba(108, 92, 231, 0.2);
    }
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  select {
    padding: 12px 20px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(20, 20, 20, 0.8);
    color: #f8f9fa;
    cursor: pointer;
    font-size: 14px;

    &:focus {
      outline: none;
      border-color: #6c5ce7;
    }
  }
`;
