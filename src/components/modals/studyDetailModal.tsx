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
  .info {
    margin: 20px 0;
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
