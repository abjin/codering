import styled from 'styled-components';

export const ModalContent = styled.div`
  padding: 32px;
  background: rgba(30, 30, 30, 0.6);
  border-radius: 24px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  max-height: 80vh;
  overflow-y: scroll;
`;

// Reusable Form Components
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Input = styled.input`
  padding: 14px 20px;
  background: rgba(25, 25, 25, 0.8);
  border: 1px solid rgba(108, 92, 231, 0.2);
  border-radius: 12px;
  font-size: 14px;
  color: #f8f9fa;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:hover {
    border-color: rgba(108, 92, 231, 0.4);
  }

  &:focus {
    border-color: #6c5ce7;
    background: rgba(25, 25, 25, 1);
    box-shadow: 0 0 0 3px rgba(108, 92, 231, 0.2);
    outline: none;
  }
`;

export const Select = styled.select`
  ${Input.componentStyle.rules}
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23958cff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
  padding-right: 2.5rem;
  cursor: pointer;

  option {
    background: #1a1a1a;
    color: #f8f9fa;
    padding: 12px;
  }
`;

export const TextArea = styled.textarea`
  ${Input.componentStyle.rules}
  min-height: 120px;
  padding: 14px 20px;
  line-height: 1.5;
  resize: vertical;
  font-family: inherit;
  scrollbar-width: thin;
  scrollbar-color: rgba(108, 92, 231, 0.4) transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(108, 92, 231, 0.4);
    border-radius: 3px;
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(108, 92, 231, 0.2);
    background: rgba(25, 25, 25, 1);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const Button = styled.button`
  padding: 12px 24px;
  background: linear-gradient(135deg, #6c5ce7, #a367fc);
  border: none;
  color: white;
  border-radius: 20px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(108, 92, 231, 0.3);
  }
`;

export const CancelButton = styled(Button)`
  background: rgba(255, 255, 255, 0.1);
  color: #a8b2c1;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: none;
    transform: none;
  }
`;

export const SelectButtonWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #a8b2c1;
  margin-bottom: 0.75rem;
  display: block;
`;
