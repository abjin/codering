import { useState } from 'react';
import { Study } from '../types/common';
import { mockStudies } from '../data/mockData';
import { ItemCard } from '../components/common/ItemCard';
import { Title } from '../components/common/title';
import {
  Grid,
  SearchSection,
  FilterWrapper,
} from '../components/common/layout';
import { CreateButton } from '../components/common/buttons';
import { StudyDetailModal } from '../components/modals/studyDetailModal';
import styled from 'styled-components';

const PageWrapper = styled.div`
  padding: 1.25rem; // 20px in rem units (5 * 0.25rem = 1.25rem)
`;

export default function Studies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudy, setSelectedStudy] = useState<Study | null>(null);

  return (
    <PageWrapper>
      <Title>스터디 📚</Title>
      <CreateButton>새 스터디 만들기 +</CreateButton>

      <SearchSection>
        <input
          type="text"
          placeholder="관심있는 스터디를 검색해보세요"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FilterWrapper>{/* 필터 옵션들 */}</FilterWrapper>
      </SearchSection>

      <Grid>
        {mockStudies.map((study) => (
          <ItemCard
            key={study.id}
            item={study}
            onClick={() => setSelectedStudy(study)}
          >
            <div className="info">{/* 스터디 특정 정보 */}</div>
          </ItemCard>
        ))}
      </Grid>

      {selectedStudy && (
        <StudyDetailModal
          study={selectedStudy}
          onClose={() => setSelectedStudy(null)}
        />
      )}
    </PageWrapper>
  );
}
