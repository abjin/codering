import { useState } from 'react';
import { Project } from '../types/common';
import { mockProjects } from '../data/mockData';
import { ItemCard } from '../components/common/ItemCard';
import { Title } from '../components/common/title';
import {
  Grid,
  SearchSection,
  FilterWrapper,
} from '../components/common/layout';
import { CreateButton } from '../components/common/buttons';
import { ProjectDetailModal } from '../components/modals/projectDetailModal';
import ProjectCreateModal from '../components/modals/projectCreateModal';
import styled from 'styled-components';
import { Tag, TagsWrapper } from '../components/common/tags';

const PageWrapper = styled.div`
  padding: 1.25rem; // 20px in rem units (5 * 0.25rem = 1.25rem)
`;

export default function Projects() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <PageWrapper>
      <Title>프로젝트 👨‍💻</Title>
      <CreateButton onClick={() => setShowCreateModal(true)}>
        새 프로젝트 만들기 +
      </CreateButton>

      <SearchSection>
        <input
          type="text"
          placeholder="관심있는 프로젝트를 검색해보세요"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FilterWrapper>{/* 필터 옵션들 */}</FilterWrapper>
      </SearchSection>

      <Grid>
        {mockProjects.map((project) => (
          <ItemCard
            key={project.id}
            item={project}
            onClick={() => setSelectedProject(project)}
          >
            {project.recruitingPositions && (
              <TagsWrapper>
                <span className="recruiting-label">모집 포지션:</span>
                {project.recruitingPositions.map((position) => (
                  <Tag
                    key={position}
                    style={{
                      background: 'rgba(225, 112, 85, 0.1)',
                      color: '#e17055',
                    }}
                  >
                    {position}
                  </Tag>
                ))}
              </TagsWrapper>
            )}
          </ItemCard>
        ))}
      </Grid>
      {showCreateModal && (
        <ProjectCreateModal onClose={() => setShowCreateModal(false)} />
      )}

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </PageWrapper>
  );
}
