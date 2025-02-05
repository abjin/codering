import styled from 'styled-components';
import { BaseCard } from '../components/common/card';
import { Grid } from '../components/common/layout';
import { Tag, TagsWrapper, LevelBadge } from '../components/common/tags';
import { JoinButton } from '../components/common/buttons';
import { Title } from '../components/common/title';
import { recommendedProjects, recommendedStudies } from '../data/mockData';

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

const ProjectCard = styled(BaseCard)``;

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
                <LevelBadge $level={project.level}>{project.level}</LevelBadge>
              </div>
              <h3>{project.title}</h3>
              <TagsWrapper>
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagsWrapper>
              <div className="description">{project.description}</div>
              <JoinButton $full={project.currentMembers >= project.maxMembers}>
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
                <LevelBadge $level={study.level}>{study.level}</LevelBadge>
              </div>
              <h3>{study.title}</h3>
              <TagsWrapper>
                {study.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagsWrapper>
              <div className="description">{study.description}</div>
              <JoinButton $full={study.currentMembers >= study.maxMembers}>
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
