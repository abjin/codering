import React, { useState } from 'react';
import { BaseModal } from './baseModal';
import styled from 'styled-components';

interface ProjectCreateModalProps {
  onClose: () => void;
}

const ModalContent = styled.div`
  padding: 2rem;
  background: #2c2c2c;
  border-radius: 8px;
  color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  background: #3c3c3c;
  border: 1px solid #555;
  border-radius: 6px;
  font-size: 1rem;
  color: #fff;
  transition: border-color 0.2s ease;
  &:focus {
    border-color: #2979ff;
    outline: none;
  }
`;

const Select = styled.select`
  padding: 0.75rem 1rem;
  background: #3c3c3c;
  border: 1px solid #555;
  border-radius: 6px;
  font-size: 1rem;
  color: #fff;
  transition: border-color 0.2s ease;
  &:focus {
    border-color: #2979ff;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  background: #3c3c3c;
  border: 1px solid #555;
  border-radius: 6px;
  font-size: 1rem;
  resize: vertical;
  color: #fff;
  transition: border-color 0.2s ease;
  &:focus {
    border-color: #2979ff;
    outline: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #2979ff;
  border: none;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #1565c0;
  }
`;

const CancelButton = styled(Button)`
  background-color: #e53935;
  &:hover {
    background-color: #c62828;
  }
`;

const SelectButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 600;
  color: #e0e0e0;
  display: block;
  margin-bottom: 0.5rem;
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
                    backgroundColor: positions.includes(pos)
                      ? '#2979ff'
                      : '#3c3c3c',
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
                    backgroundColor: techStack.includes(tech)
                      ? '#2979ff'
                      : '#3c3c3c',
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
