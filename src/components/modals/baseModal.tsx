import styled from 'styled-components';

interface BaseModalProps {
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #222;
  padding: 30px;
  border-radius: 16px;
  width: 90%;
  max-width: 500px;
`;

export function BaseModal({ onClose, children, title }: BaseModalProps) {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {title && <h2>{title}</h2>}
        {children}
      </ModalContent>
    </ModalOverlay>
  );
}
