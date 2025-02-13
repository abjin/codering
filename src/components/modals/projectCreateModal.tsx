import React, { useState } from 'react';
import { BaseModal } from './baseModal';
import {
  ModalContent,
  Form,
  Input,
  Select,
  TextArea,
  ButtonGroup,
  Button,
  CancelButton,
  SelectButtonWrapper,
  Label,
} from './modalStyledComponents';

interface ProjectCreateModalProps {
  onClose: () => void;
}

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
