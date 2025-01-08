import styled from 'styled-components';
import { Title } from '../styles/commonStyles';

const Wrapper = styled.div`
  padding: 20px;
`;

const EventGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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
  margin-bottom: 30px;
  position: relative;

  input {
    width: 100%;
    padding: 16px 24px;
    border-radius: 16px;
    border: 2px solid transparent;
    background: rgba(40, 40, 40, 0.9);
    color: #f8f9fa;
    font-size: 16px;
    margin-bottom: 15px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

    &::placeholder {
      color: #868e96;
    }

    &:focus {
      outline: none;
      border-color: #4a90e2;
      background: rgba(45, 45, 45, 0.95);
      box-shadow: 0 8px 25px rgba(74, 144, 226, 0.15);
    }

    &:hover {
      background: rgba(45, 45, 45, 0.95);
    }
  }
`;

const FilterWrapper = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  select {
    padding: 10px 20px;
    border-radius: 12px;
    border: 2px solid transparent;
    background: rgba(40, 40, 40, 0.9);
    color: #f8f9fa;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 14px;

    &:hover,
    &:focus {
      border-color: #4a90e2;
      background: rgba(45, 45, 45, 0.95);
      outline: none;
    }

    option {
      background: #2d2d2d;
      color: #f8f9fa;
    }
  }
`;

const CreateButton = styled.button`
  width: 100%;
  padding: 12px 24px;
  background: linear-gradient(90deg, #4a90e2, #67b8ff);
  border: none;
  border-radius: 12px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 30px;

  &:hover {
    opacity: 0.9;
  }
`;

const StudyCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 32px;
  background: linear-gradient(
    165deg,
    rgba(40, 40, 40, 0.95) 0%,
    rgba(50, 50, 50, 0.85) 50%,
    rgba(45, 45, 45, 0.9) 100%
  );
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.3s ease;

  // 메탈릭 효과 개선
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -150%;
    width: 150%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.08),
      transparent
    );
    transform: skewX(-15deg);
    transition: 0.75s;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 45px rgba(0, 0, 0, 0.15);
    background: linear-gradient(
      165deg,
      rgba(55, 55, 55, 1) 0%,
      rgba(65, 65, 65, 0.9) 50%,
      rgba(50, 50, 50, 0.95) 100%
    );

    &::before {
      left: 100%;
    }

    .category {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    gap: 12px;
  }

  h3 {
    font-size: 24px;
    font-weight: 700;
    margin: 16px 0;
    color: #f8f9fa;
    letter-spacing: -0.5px;
  }

  .info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 16px;
    margin-bottom: 24px;
    color: #adb5bd;
    font-size: 15px;

    .item {
      display: flex;
      align-items: center;
      gap: 10px;

      svg {
        width: 18px;
        height: 18px;
        color: #4a90e2;
      }
    }
  }

  .description {
    color: #adb5bd;
    line-height: 1.7;
    margin-bottom: 24px;
    font-size: 15px;
  }

  .category {
    display: inline-block;
    padding: 8px 16px;
    background: linear-gradient(135deg, #4a90e2, #67b8ff);
    color: white;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 600;
    transition: all 0.3s ease;
  }
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0;
`;

const Tag = styled.span`
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  font-size: 13px;
  color: #adb5bd;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    transform: translateY(-1px);
  }
`;

const LevelBadge = styled.span<{ level: string }>`
  padding: 6px 14px;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 600;
  transition: all 0.3s ease;

  background: ${({ level }) => {
    switch (level) {
      case '초급':
        return 'rgba(0, 184, 148, 0.15)';
      case '중급':
        return 'rgba(74, 144, 226, 0.15)';
      case '고급':
        return 'rgba(255, 107, 107, 0.15)';
      default:
        return 'rgba(0, 184, 148, 0.15)';
    }
  }};
  color: ${({ level }) => {
    switch (level) {
      case '초급':
        return '#00b894';
      case '중급':
        return '#4a90e2';
      case '고급':
        return '#ff6b6b';
      default:
        return '#00b894';
    }
  }};

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.1);
  }
`;

const JoinButton = styled.button<{ full: boolean }>`
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  border: none;
  margin-top: 20px;
  font-weight: 600;
  font-size: 15px;
  cursor: ${({ full }) => (full ? 'not-allowed' : 'pointer')};
  background: ${({ full }) =>
    full ? '#636e72' : 'linear-gradient(135deg, #4a90e2, #67b8ff)'};
  color: white;
  opacity: ${({ full }) => (full ? '0.7' : '1')};
  transition: all 0.3s ease;

  &:hover {
    opacity: ${({ full }) => (full ? '0.7' : '0.9')};
    transform: ${({ full }) => (full ? 'none' : 'translateY(-2px)')};
    box-shadow: ${({ full }) =>
      full ? 'none' : '0 5px 15px rgba(74, 144, 226, 0.3)'};
  }
`;

export default function Classes() {
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
