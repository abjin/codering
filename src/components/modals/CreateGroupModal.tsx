import styled from 'styled-components';

interface Props {
  onClose: () => void;
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

export function CreateGroupModal({ onClose }: Props) {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2>새로운 소모임 만들기</h2>
        {/* 모달 내용 추가 예정 */}
      </ModalContent>
    </ModalOverlay>
  );
}
