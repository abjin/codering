import { useState } from 'react';
import styled from 'styled-components';
import { Title, CardGrid } from '../styles/commonStyles';
import { CreateGroupModal } from '../components/modals/CreateGroupModal';

const Wrapper = styled.div`
  padding: 20px;
`;

const SearchBar = styled.div`
  margin-bottom: 30px;

  input {
    width: 100%;
    padding: 12px 20px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(40, 40, 40, 0.8);
    color: #f8f9fa;
    font-size: 16px;

    &::placeholder {
      color: #adb5bd;
    }
  }
`;

const CreateButton = styled.button`
  width: 100%;
  padding: 12px 24px;
  background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
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

// 임시 데이터
const myGroups = [
  {
    id: 1,
    name: 'AI 챗봇 프로젝트',
    members: 8,
    description: 'GPT 기반 챗봇 서비스 개발',
    isAdmin: true,
  },
  {
    id: 2,
    name: '알고리즘 스터디',
    members: 12,
    description: '코딩 테스트 대비 알고리즘 학습',
    isAdmin: false,
  },
];

const allGroups = [
  {
    id: 3,
    name: '모바일 앱 개발',
    members: 25,
    description: 'React Native 기반 앱 개발',
    location: '서울',
  },
  {
    id: 4,
    name: '블록체인 프로젝트',
    members: 15,
    description: 'NFT 마켓플레이스 개발',
    location: '온라인',
  },
  // ... 더 많은 그룹들
];

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const filteredGroups = allGroups.filter(
    (group) =>
      group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      group.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Wrapper>
      <Title>나의 프로젝트 👨‍💻</Title>
      <CreateButton onClick={() => setShowCreateModal(true)}>
        새로운 프로젝트 시작하기 +
      </CreateButton>

      <CardGrid>
        {myGroups.map((group) => (
          <GroupCard key={group.id}>
            <h3>{group.name}</h3>
            <div className="members">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              {group.members}명 참여중
            </div>
            <p>{group.description}</p>
            {group.isAdmin && <AdminBadge>관리자</AdminBadge>}
          </GroupCard>
        ))}
      </CardGrid>

      <Title style={{ marginTop: '50px' }}>프로젝트 찾기 🔍</Title>
      <SearchBar>
        <input
          type="text"
          placeholder="관심있는 프로젝트를 검색해보세요"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchBar>

      <CardGrid>
        {filteredGroups.map((group) => (
          <GroupCard key={group.id}>
            <h3>{group.name}</h3>
            <div className="members">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              {group.members}명 참여중
            </div>
            <p>{group.description}</p>
            <LocationBadge>{group.location}</LocationBadge>
          </GroupCard>
        ))}
      </CardGrid>

      {/* 모달 컴포넌트는 별도로 구현 필요 */}
      {showCreateModal && (
        <CreateGroupModal onClose={() => setShowCreateModal(false)} />
      )}
    </Wrapper>
  );
}

const GroupCard = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  background: linear-gradient(
    135deg,
    rgba(40, 40, 40, 0.95) 0%,
    rgba(60, 60, 60, 0.85) 50%,
    rgba(40, 40, 40, 0.9) 100%
  );
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.3s ease;

  // 메탈릭 효과를 위한 가상 요소
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.05),
      transparent
    );
    transition: 0.5s;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
    background: linear-gradient(
      135deg,
      rgba(50, 50, 50, 1) 0%,
      rgba(65, 65, 65, 0.9) 50%,
      rgba(45, 45, 45, 0.95) 100%
    );

    &::before {
      left: 100%;
    }
  }

  // 빛 반사 효과
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.08) 0%,
      rgba(255, 255, 255, 0.03) 20%,
      rgba(255, 255, 255, 0) 100%
    );
    pointer-events: none;
  }

  // 기존 스타일 유지
  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 12px;
    color: #f8f9fa;
    position: relative;
  }

  p {
    color: #adb5bd;
    line-height: 1.5;
    margin: 8px 0;
    position: relative;
  }

  .members {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #00b894;
    font-weight: 500;
    margin-bottom: 12px;
    position: relative;
  }
`;

const AdminBadge = styled.span`
  display: inline-block;
  padding: 4px 8px;
  background: linear-gradient(90deg, #ff6b6b, #ffa07a);
  color: white;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
`;

const LocationBadge = styled.span`
  display: inline-block;
  padding: 4px 8px;
  background: rgba(0, 184, 148, 0.2);
  color: #00b894;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
`;
