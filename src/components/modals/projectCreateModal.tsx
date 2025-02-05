import React, { useState } from 'react';
import { BaseModal } from './baseModal';
import styled from 'styled-components';

interface ProjectCreateModalProps {
  onClose: () => void;
}

const ModalContent = styled.div`
  padding: 32px;
  background: rgba(30, 30, 30, 0.6);
  border-radius: 24px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
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

const Select = styled.select`
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

const TextArea = styled.textarea`
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

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const Button = styled.button`
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

const CancelButton = styled(Button)`
  background: rgba(255, 255, 255, 0.1);
  color: #a8b2c1;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: none;
    transform: none;
  }
`;

const SelectButtonWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #a8b2c1;
  margin-bottom: 0.75rem;
  display: block;
`;

const ProjectCreateModal: React.FC<ProjectCreateModalProps> = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [difficulty, setDifficulty] = useState('초급');
  const [description, setDescription] = useState('');
  const [positions, setPositions] = useState<string[]>([]);
  const [techStack, setTechStack] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Project creation logic goes here (e.g., API call)
    onClose();
  };

  return (
    <BaseModal onClose={onClose} title="프로젝트 생성하기">
      <ModalContent>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <Select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            required
          >
            <option value="초급">초급</option>
            <option value="중급">중급</option>
            <option value="고급">고급</option>
          </Select>
          <TextArea
            placeholder="설명"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <div>
            <Label>모집 포지션</Label>
            <SelectButtonWrapper
              style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}
            >
              {['백엔드', '프론트엔드', '풀스택'].map((pos) => (
                <Button
                  type="button"
                  key={pos}
                  style={{
                    background: positions.includes(pos)
                      ? 'linear-gradient(135deg, #6c5ce7, #a367fc)'
                      : 'rgba(255, 255, 255, 0.05)',
                    border: positions.includes(pos)
                      ? 'none'
                      : '1px solid rgba(108, 92, 231, 0.2)',
                    color: positions.includes(pos) ? 'white' : '#a8b2c1',
                    transition: 'all 0.3s ease',
                    fontSize: '13px',
                    padding: '8px 16px',
                    borderRadius: '8px',
                  }}
                  onClick={() => {
                    if (positions.includes(pos)) {
                      setPositions(positions.filter((p) => p !== pos));
                    } else {
                      setPositions([...positions, pos]);
                    }
                  }}
                >
                  {pos}
                </Button>
              ))}
            </SelectButtonWrapper>
          </div>
          <div>
            <Label>기술 스택</Label>
            <SelectButtonWrapper
              style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}
            >
              {['React', 'NestJS', 'Node.js', 'TypeScript'].map((tech) => (
                <Button
                  type="button"
                  key={tech}
                  style={{
                    background: techStack.includes(tech)
                      ? 'linear-gradient(135deg, #6c5ce7, #a367fc)'
                      : 'rgba(255, 255, 255, 0.05)',
                    border: techStack.includes(tech)
                      ? 'none'
                      : '1px solid rgba(108, 92, 231, 0.2)',
                    color: techStack.includes(tech) ? 'white' : '#a8b2c1',
                    transition: 'all 0.3s ease',
                    fontSize: '13px',
                    padding: '8px 16px',
                    borderRadius: '8px',
                  }}
                  onClick={() => {
                    if (techStack.includes(tech)) {
                      setTechStack(techStack.filter((t) => t !== tech));
                    } else {
                      setTechStack([...techStack, tech]);
                    }
                  }}
                >
                  {tech}
                </Button>
              ))}
            </SelectButtonWrapper>
          </div>
          <ButtonGroup>
            <CancelButton type="button" onClick={onClose}>
              취소
            </CancelButton>
            <Button type="submit">생성하기</Button>
          </ButtonGroup>
        </Form>
      </ModalContent>
    </BaseModal>
  );
};

export default ProjectCreateModal;
