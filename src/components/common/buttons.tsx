import styled from 'styled-components';

export const CreateButton = styled.button`
  width: 100%;
  padding: 16px;
  background: #6c5ce7;
  border: none;
  border-radius: 16px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 40px;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0)
    );
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover::after {
    opacity: 1;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const JoinButton = styled.button<{ full: boolean }>`
  width: 100%;
  padding: 16px;
  border-radius: 16px;
  border: none;
  background: ${({ full }) =>
    full
      ? 'rgba(108, 92, 231, 0.3)'
      : 'linear-gradient(135deg, #6c5ce7, #a367fc)'};
  color: white;
  font-weight: 600;
  font-size: 15px;
  cursor: ${({ full }) => (full ? 'not-allowed' : 'pointer')};
  opacity: ${({ full }) => (full ? '0.7' : '1')};
  transition: all 0.3s ease;

  &:hover {
    transform: ${({ full }) => (full ? 'none' : 'translateY(-2px)')};
    box-shadow: ${({ full }) =>
      full ? 'none' : '0 8px 20px rgba(108, 92, 231, 0.2)'};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ImageUploadButton = styled.button`
  padding: 8px 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  background: transparent;
  color: #adb5bd;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const ActionButton = styled.button<{ $primary?: string }>`
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background: ${({ $primary }) =>
    $primary === 'true' ? '#6c5ce7' : 'transparent'};
  color: ${({ $primary }) => ($primary === 'true' ? 'white' : '#adb5bd')};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${({ $primary }) =>
      $primary === 'true' ? '#5f3dc4' : 'rgba(255, 255, 255, 0.1)'};
  }
`;
