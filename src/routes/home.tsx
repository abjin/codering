import styled from 'styled-components';
import { BaseCard } from '../components/common/card';
import { Grid } from '../components/common/layout';
import { Tag, TagsWrapper, LevelBadge } from '../components/common/tags';
import { JoinButton } from '../components/common/buttons';
import { Title } from '../components/common/title';

const Wrapper = styled.div`
  padding: 20px;
`;

const Section = styled.section`
  margin-bottom: 40px;

  h2 {
    font-size: 24px;
    font-weight: 700;
    color: #f8f9fa;
    margin-bottom: 20px;
  }
`;

const ProjectCard = styled(BaseCard)`
  // 추가적인 스타일링이 필요한 경우
`;

// 임시 데이터
const recommendedProjects = [
  {
    id: 1,
    title: 'React Native 앱 개발',
    category: '모바일',
    description: '함께 배우면서 성장하는 React Native 프로젝트입니다.',
    level: '중급',
    tags: ['React Native', 'TypeScript', 'Mobile'],
    currentMembers: 3,
    maxMembers: 5,
  },
  // ... 더 많은 프로젝트
];

const recommendedStudies = [
  {
    id: 1,
    title: '알고리즘 스터디',
    category: '알고리즘',
    description: '매주 알고리즘 문제를 풀고 토론하는 스터디입니다.',
    level: '초급',
    tags: ['Algorithm', 'Python', 'Java'],
    currentMembers: 2,
    maxMembers: 4,
  },
  // ... 더 많은 스터디
];

export default function Home() {
  return (
    <Wrapper>
      <Section>
        <Title>추천 프로젝트</Title>
        <Grid>
          {recommendedProjects.map((project) => (
            <ProjectCard key={project.id}>
              <div className="header">
                <span className="category">{project.category}</span>
                <LevelBadge level={project.level}>{project.level}</LevelBadge>
              </div>
              <h3>{project.title}</h3>
              <TagsWrapper>
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagsWrapper>
              <div className="description">{project.description}</div>
              <JoinButton full={project.currentMembers >= project.maxMembers}>
                {project.currentMembers >= project.maxMembers
                  ? '모집 완료'
                  : '참여하기'}
              </JoinButton>
            </ProjectCard>
          ))}
        </Grid>
      </Section>

      <Section>
        <Title>추천 스터디</Title>
        <Grid>
          {recommendedStudies.map((study) => (
            <ProjectCard key={study.id}>
              <div className="header">
                <span className="category">{study.category}</span>
                <LevelBadge level={study.level}>{study.level}</LevelBadge>
              </div>
              <h3>{study.title}</h3>
              <TagsWrapper>
                {study.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagsWrapper>
              <div className="description">{study.description}</div>
              <JoinButton full={study.currentMembers >= study.maxMembers}>
                {study.currentMembers >= study.maxMembers
                  ? '모집 완료'
                  : '참여하기'}
              </JoinButton>
            </ProjectCard>
          ))}
        </Grid>
      </Section>
    </Wrapper>
  );
}
