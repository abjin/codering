import { useState } from 'react';
import styled from 'styled-components';
import { Title } from '../styles/commonStyles';

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
`;

const EventGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 25px;
  padding: 10px;
`;

const SearchSection = styled.div`
  background: rgba(30, 30, 30, 0.6);
  padding: 24px;
  border-radius: 20px;
  margin-bottom: 40px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);

  input {
    width: 100%;
    padding: 16px 24px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(20, 20, 20, 0.8);
    color: #f8f9fa;
    font-size: 16px;
    margin-bottom: 15px;

    &:focus {
      outline: none;
      border-color: #6c5ce7;
      box-shadow: 0 0 0 2px rgba(108, 92, 231, 0.2);
    }
  }
`;

const FilterWrapper = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  select {
    padding: 12px 20px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(20, 20, 20, 0.8);
    color: #f8f9fa;
    cursor: pointer;
    font-size: 14px;

    &:focus {
      outline: none;
      border-color: #6c5ce7;
    }
  }
`;

const CreateButton = styled.button`
  width: 100%;
  padding: 16px;
  background: #6c5ce7;
  border: none;
  border-radius: 16px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 40px;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0)
    );
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover::after {
    opacity: 1;
  }

  &:active {
    transform: scale(0.98);
  }
`;
const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 24px;
`;

const Tag = styled.span`
  padding: 6px 12px;
  background: rgba(108, 92, 231, 0.1);
  border-radius: 12px;
  font-size: 13px;
  color: #6c5ce7;
  font-weight: 500;
`;

const LevelBadge = styled.span<{ level: string }>`
  padding: 8px 16px;
  border-radius: 16px;
  font-size: 13px;
  font-weight: 600;
  background: ${({ level }) => {
    switch (level) {
      case '초급':
        return 'rgba(0, 184, 148, 0.1)';
      case '중급':
        return 'rgba(108, 92, 231, 0.1)';
      case '고급':
        return 'rgba(225, 112, 85, 0.1)';
      default:
        return 'rgba(0, 184, 148, 0.1)';
    }
  }};
  color: ${({ level }) => {
    switch (level) {
      case '초급':
        return '#00b894';
      case '중급':
        return '#6c5ce7';
      case '고급':
        return '#e17055';
      default:
        return '#00b894';
    }
  }};
`;

const JoinButton = styled.button<{ full: boolean }>`
  width: 100%;
  padding: 16px;
  border-radius: 16px;
  border: none;
  background: ${({ full }) =>
    full
      ? 'rgba(108, 92, 231, 0.3)'
      : 'linear-gradient(135deg, #6c5ce7, #a367fc)'};
  color: white;
  font-weight: 600;
  font-size: 15px;
  cursor: ${({ full }) => (full ? 'not-allowed' : 'pointer')};
  opacity: ${({ full }) => (full ? '0.7' : '1')};
  transition: all 0.3s ease;

  &:hover {
    transform: ${({ full }) => (full ? 'none' : 'translateY(-2px)')};
    box-shadow: ${({ full }) =>
      full ? 'none' : '0 8px 20px rgba(108, 92, 231, 0.2)'};
  }

  &:active {
    transform: scale(0.98);
  }
`;

const ProjectCard = styled.div`
  background: rgba(30, 30, 30, 0.6);
  border-radius: 24px;
  padding: 32px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-4px);
    background: rgba(35, 35, 35, 0.8);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    gap: 12px;
  }

  .category {
    display: inline-flex;
    align-items: center;
    padding: 8px 16px;
    background: linear-gradient(135deg, #6c5ce7, #a367fc);
    color: white;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 600;
  }

  h3 {
    font-size: 24px;
    font-weight: 700;
    color: #f8f9fa;
    margin: 20px 0;
  }

  .info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 16px;
    margin-bottom: 28px;

    .item {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 12px 20px;
      background: rgba(108, 92, 231, 0.1);
      border-radius: 16px;
      color: #6c5ce7;
      font-size: 14px;
      font-weight: 500;

      svg {
        width: 18px;
        height: 18px;
      }
    }
  }

  .description {
    color: #a8b2c1;
    line-height: 1.7;
    font-size: 15px;
    margin-bottom: 28px;
    min-height: 52px;
  }
`;

// 프로젝트 데이터
const projects = [
  {
    id: 1,
    title: 'AI 챗봇 프로젝트',
    category: 'AI/ML',
    schedule: '매주 월/수 20:00',
    location: '온라인',
    currentMembers: 8,
    maxMembers: 10,
    level: '중급',
    description:
      'GPT 기반 챗봇 서비스 개발. 자연어 처리와 머신러닝을 활용하여 사용자 친화적인 대화형 AI 시스템을 구축합니다.',
    tags: ['Python', 'OpenAI', 'React', 'Node.js'],
  },
  {
    id: 2,
    title: '반응형 웹 포트폴리오',
    category: '웹 개발',
    schedule: '매주 화/목 19:00',
    location: '서울',
    currentMembers: 4,
    maxMembers: 6,
    level: '초급',
    description:
      '최신 웹 기술을 활용한 포트폴리오 웹사이트 제작. React와 styled-components를 사용하여 모던한 UI/UX를 구현합니다.',
    tags: ['React', 'TypeScript', 'Styled-Components', 'Figma'],
  },
  {
    id: 3,
    title: '크로스 플랫폼 앱 개발',
    category: '앱 개발',
    schedule: '매주 토 14:00',
    location: '온라인',
    currentMembers: 6,
    maxMembers: 6,
    level: '고급',
    description:
      'Flutter를 이용한 iOS/Android 크로스 플랫폼 앱 개발. 실시간 데이터 동기화와 푸시 알림 기능을 구현합니다.',
    tags: ['Flutter', 'Dart', 'Firebase', 'UI/UX'],
  },
];

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Wrapper>
      <Title>프로젝트 👨‍💻</Title>
      <CreateButton>새 프로젝트 만들기 +</CreateButton>

      <SearchSection>
        <input
          type="text"
          placeholder="관심있는 프로젝트를 검색해보세요"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FilterWrapper>
          <select>
            <option value="">분야</option>
            <option value="web">웹 개발</option>
            <option value="app">앱 개발</option>
            <option value="ai">AI/ML</option>
          </select>
          <select>
            <option value="">난이도</option>
            <option value="beginner">입문</option>
            <option value="intermediate">중급</option>
            <option value="advanced">고급</option>
          </select>
          <select>
            <option value="">지역</option>
            <option value="online">온라인</option>
            <option value="seoul">서울</option>
            <option value="gyeonggi">경기</option>
          </select>
        </FilterWrapper>
      </SearchSection>

      <EventGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id}>
            <div className="header">
              <span className="category">{project.category}</span>
              <LevelBadge level={project.level}>{project.level}</LevelBadge>
            </div>
            <h3>{project.title}</h3>
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
            <p className="description">{project.description}</p>
            <TagsWrapper>
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagsWrapper>
            <JoinButton full={project.currentMembers === project.maxMembers}>
              {project.currentMembers === project.maxMembers
                ? '모집완료'
                : '참여하기'}
            </JoinButton>
          </ProjectCard>
        ))}
      </EventGrid>
    </Wrapper>
  );
}
