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
} from './modalStyledComponents'; // Assume we'll create a shared styled components file

interface StudyCreateModalProps {
  onClose: () => void;
}

const StudyCreateModal: React.FC<StudyCreateModalProps> = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [difficulty, setDifficulty] = useState('초급');
  const [description, setDescription] = useState('');
  const [techStack, setTechStack] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Study creation logic goes here
    onClose();
  };

  return (
    <BaseModal onClose={onClose} title="스터디 생성하기">
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
            <Label>기술 스택</Label>
            <SelectButtonWrapper>
              {['JavaScript', 'Python', 'Java', 'C++'].map((tech) => (
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
                    fontSize: '13px',
                    padding: '8px 16px',
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

export default StudyCreateModal;
