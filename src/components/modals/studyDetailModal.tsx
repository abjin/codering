import { BaseModal } from './baseModal';
import { LevelBadge } from '../common/tags';
import styled from 'styled-components';
import { JoinButton } from '../common/buttons';
import { Study } from '../../types/common';

interface StudyDetailModalProps {
  study: Study;
  onClose: () => void;
}

const DetailContent = styled.div`
  padding: 20px;
  font-family: 'Arial', sans-serif;
  color: white;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    .category {
      font-size: 1.2em;
      font-weight: bold;
      color: #555;
    }
  }

  .info {
    margin: 20px 0;

    .item {
      display: flex;
      align-items: center;
      gap: 12px;
      margin: 12px 0;

      svg {
        width: 24px;
        height: 24px;
        color: #888;
      }
    }
  }

  p {
    margin: 20px 0;
    line-height: 1.6;
  }
`;

export function StudyDetailModal({ study, onClose }: StudyDetailModalProps) {
  const handleJoin = () => {
    console.log('Joining study:', study.title);
  };

  return (
    <BaseModal onClose={onClose} title={study.title}>
      <DetailContent>
        <div className="header">
          <span className="category">{study.category}</span>
          <LevelBadge level={study.level}>{study.level}</LevelBadge>
        </div>
        <div className="info">
          <div className="item">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z" />
            </svg>
            {study.currentMembers}/{study.maxMembers}명
          </div>
        </div>
        <p>{study.description}</p>
        <JoinButton
          full={study.currentMembers === study.maxMembers}
          onClick={handleJoin}
        >
          {study.currentMembers === study.maxMembers ? '모집완료' : '참여하기'}
        </JoinButton>
      </DetailContent>
    </BaseModal>
  );
}
