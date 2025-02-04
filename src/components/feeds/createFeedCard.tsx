import styled from 'styled-components';
import { ActionButton } from '../common/buttons';
import { HolographicCard } from './cards';

const CreateFeedWrapper = styled(HolographicCard)`
  input,
  textarea {
    width: 100%;
    background: rgba(255, 255, 255, 0.05);
    border: none;
    border-radius: 8px;
    color: #fff;
    padding: 0.8rem;
    margin-bottom: 1rem;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  position: relative;
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 80px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 8px;
  color: #fff;
  padding: 1rem;
  resize: none;
  font-size: 1rem;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end; /* Align buttons to the right */
  gap: 0.5rem; /* Reduced space between buttons */
  padding-top: 0.5rem; /* Reduced padding for better spacing */
`;

interface CreateFeedCardProps {
  content: string;
  isExpanded: boolean;
  onContentChange: (content: string) => void;
  onExpandChange: (expanded: boolean) => void;
  onSubmit: () => void;
}

export function CreateFeedCard({
  content,
  onContentChange,
  onExpandChange,
  onSubmit,
}: CreateFeedCardProps) {
  return (
    <CreateFeedWrapper>
      <TextArea
        placeholder="무슨 생각을 하고 계신가요?"
        value={content}
        onChange={(e) => onContentChange(e.target.value)}
        onFocus={() => onExpandChange(true)}
      />

      <input
        type="file"
        id="file-input"
        style={{ display: 'none' }}
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            console.log(file);
          }
        }}
      />

      {
        <Actions>
          <ActionButton
            onClick={() => document.getElementById('file-input')?.click()}
            style={{
              background: 'transparent',
            }}
          >
            📷
          </ActionButton>
          <ActionButton
            onClick={() => onExpandChange(false)}
            style={{ background: 'transparent' }}
          >
            X
          </ActionButton>
          <ActionButton $primary={'true'} onClick={onSubmit}>
            ✔️
          </ActionButton>
        </Actions>
      }
    </CreateFeedWrapper>
  );
}
