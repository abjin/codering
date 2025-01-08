import { useState } from 'react';
import styled from 'styled-components';
import { Title } from '../styles/commonStyles';
import { BaseCard } from '../components/common/card';
import {
  Grid,
  SearchSection,
  FilterWrapper,
} from '../components/common/layout';
import { CreateButton, JoinButton } from '../components/common/buttons';
import { TagsWrapper, Tag, LevelBadge } from '../components/common/tags';

const Wrapper = styled.div`
  padding: 20px;
`;

const StudyCard = styled(BaseCard)`
  background: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0.05),
    transparent
  );
  backdrop-filter: blur(10px);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    background: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0.08),
      rgba(255, 255, 255, 0.02)
    );
  }
`;

// 스터디 데이터
const studies = [
  {
    id: 1,
    title: '알고리즘 마스터하기',
    category: '알고리즘',
    schedule: '매주 화/목 20:00',
    location: '온라인',
    organizer: '김코딩',
    currentMembers: 4,
    maxMembers: 6,
    level: '중급',
    description:
      '코딩테스트 대비 알고리즘 문제 풀이 스터디입니다. 매주 백준 골드 레벨 문제를 풀고 토론합니다.',
    tags: ['Python', 'Java', 'Algorithm'],
  },
  {
    id: 2,
    title: 'CS 스터디',
    category: '기초이론',
    schedule: '매주 토 14:00',
    location: '강남',
    organizer: '박개발',
    currentMembers: 3,
    maxMembers: 8,
    level: '초급',
    description:
      '전공자/비전공자 모두를 위한 CS 기초 스터디입니다. 운영체제, 네트워크, 데이터베이스를 차근차근 공부합니다.',
    tags: ['CS', 'OS', 'Network', 'DB'],
  },
  {
    id: 3,
    title: '실전 프로젝트 스터디',
    category: '프로젝트',
    schedule: '매주 수/일 19:00',
    location: '판교',
    organizer: '이풀스택',
    currentMembers: 5,
    maxMembers: 5,
    level: '고급',
    description:
      'MSA 기반 서비스 개발 프로젝트 스터디입니다. Spring Boot, React, Docker를 활용합니다.',
    tags: ['Spring', 'React', 'MSA', 'Docker'],
  },
];

export default function Studies() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Wrapper>
      <Title>개발 스터디 🤓</Title>
      <CreateButton>새 스터디 만들기 +</CreateButton>

      <SearchSection>
        <input
          type="text"
          placeholder="관심있는 스터디를 검색해보세요"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FilterWrapper>
          <select>
            <option value="">카테고리</option>
            <option value="algorithm">알고리즘</option>
            <option value="cs">CS/이론</option>
            <option value="project">프로젝트</option>
            <option value="language">프로그래밍 언어</option>
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

      <Grid>
        {studies.map((study) => (
          <StudyCard key={study.id}>
            <div className="header">
              <span className="category">{study.category}</span>
              <LevelBadge level={study.level}>{study.level}</LevelBadge>
            </div>
            <h3>{study.title}</h3>
            <div className="info">
              <div className="item">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z" />
                </svg>
                {study.schedule}
              </div>
              <div className="item">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                </svg>
                {study.location}
              </div>
              <div className="item">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
                {study.currentMembers}/{study.maxMembers}명
              </div>
            </div>
            <p className="description">{study.description}</p>
            <TagsWrapper>
              {study.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagsWrapper>
            <JoinButton full={study.currentMembers === study.maxMembers}>
              {study.currentMembers === study.maxMembers
                ? '모집완료'
                : '참여하기'}
            </JoinButton>
          </StudyCard>
        ))}
      </Grid>
    </Wrapper>
  );
}
