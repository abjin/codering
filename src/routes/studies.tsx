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

// 스터디 데이터 수정
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

// 추가 스타일 컴포넌트
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

const StudyCard = styled.div`
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
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(108, 92, 231, 0.3);
    }
  }

  h3 {
    font-size: 24px;
    font-weight: 700;
    color: #f8f9fa;
    margin: 20px 0;
    letter-spacing: -0.5px;
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
      transition: all 0.2s ease;

      &:hover {
        background: rgba(108, 92, 231, 0.15);
        transform: translateY(-2px);
      }

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
    padding: 0 4px;
  }
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 24px 0;
`;

const Tag = styled.span`
  padding: 8px 16px;
  background: rgba(108, 92, 231, 0.1);
  border-radius: 16px;
  font-size: 13px;
  font-weight: 500;
  color: #6c5ce7;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(108, 92, 231, 0.15);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(108, 92, 231, 0.1);
  }
`;

const LevelBadge = styled.span<{ level: string }>`
  padding: 8px 16px;
  border-radius: 16px;
  font-size: 13px;
  font-weight: 600;
  transition: all 0.2s ease;
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

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(108, 92, 231, 0.1);
  }
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

export default function Studies() {
  return (
    <Wrapper>
      <Title>개발 스터디 🤓</Title>
      <CreateButton>새 스터디 만들기 +</CreateButton>

      <SearchSection>
        <input type="text" placeholder="관심있는 스터디를 검색해보세요" />
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

      <EventGrid>
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
      </EventGrid>
    </Wrapper>
  );
}
