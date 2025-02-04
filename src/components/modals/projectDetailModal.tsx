import { BaseModal } from './baseModal';
import { TagsWrapper, Tag, LevelBadge } from '../common/tags';
import styled from 'styled-components';
import { JoinButton } from '../common/buttons';

interface ProjectDetailModalProps {
  project: {
    title: string;
    category: string;
    schedule: string;
    location: string;
    currentMembers: number;
    maxMembers: number;
    level: string;
    description: string;
    tags: string[];
  };
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

export function ProjectDetailModal({
  project,
  onClose,
}: ProjectDetailModalProps) {
  const handleJoin = () => {
    console.log('Joining project:', project.title);
  };

  return (
    <>
      <BaseModal onClose={onClose} title={project.title}>
        <DetailContent>
          <div className="header">
            <span className="category">{project.category}</span>
            <LevelBadge level={project.level}>{project.level}</LevelBadge>
          </div>

          <div className="info">
            <div className="item">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z" />
              </svg>
              {project.schedule}
            </div>
            <div className="item">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              </svg>
              {project.location}
            </div>
            <div className="item">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
              {project.currentMembers}/{project.maxMembers}명
            </div>
          </div>

          <p>{project.description}</p>

          <TagsWrapper>
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagsWrapper>

          <JoinButton
            full={project.currentMembers === project.maxMembers}
            onClick={handleJoin}
          >
            {project.currentMembers === project.maxMembers
              ? '모집완료'
              : '참여하기'}
          </JoinButton>
        </DetailContent>
      </BaseModal>
    </>
  );
}
