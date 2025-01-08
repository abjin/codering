import { Project, Study, Conference, Feed } from '../types/common';

export const mockProjects: Project[] = [
  {
    id: 1,
    title: '실시간 채팅 앱 개발',
    category: '프로젝트',
    description: 'Socket.io를 활용한 실시간 채팅 애플리케이션 개발',
    level: '중급',
    tags: ['React', 'Node.js', 'Socket.io'],
    currentMembers: 3,
    maxMembers: 5,
    schedule: '매주 화/목 저녁 8시',
    location: '강남역 스터디카페',
    recruitingPositions: ['백엔드'],
  },
  {
    id: 2,
    title: '인공지능 얼굴인식 서비스',
    category: '프로젝트',
    description: 'TensorFlow.js를 활용한 얼굴인식 웹 서비스 개발',
    level: '고급',
    tags: ['AI', 'TensorFlow.js', 'Python'],
    currentMembers: 4,
    maxMembers: 6,
    schedule: '매주 토요일 오후 2시',
    location: '판교 테크노밸리',
    recruitingPositions: ['프론트엔드'],
  },
  {
    id: 3,
    title: '블록체인 월렛 개발',
    category: '프로젝트',
    description: '이더리움 기반 암호화폐 월렛 개발',
    level: '고급',
    tags: ['Blockchain', 'Ethereum', 'Web3.js'],
    currentMembers: 2,
    maxMembers: 4,
    schedule: '매주 월/수 저녁 7시',
    location: '서울숲 코워킹스페이스',
    recruitingPositions: ['백엔드'],
  },
  {
    id: 4,
    title: '헬스케어 모바일 앱',
    category: '프로젝트',
    description: '운동 기록 및 건강관리 모바일 애플리케이션',
    level: '중급',
    tags: ['React Native', 'Firebase', 'Node.js'],
    currentMembers: 3,
    maxMembers: 5,
    schedule: '매주 화/금 저녁 8시',
    location: '선릉역 회의실',
    recruitingPositions: ['백엔드'],
  },
  {
    id: 5,
    title: '온라인 쇼핑몰 플랫폼',
    category: '프로젝트',
    description: '풀스택 이커머스 플랫폼 개발',
    level: '중급',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    currentMembers: 4,
    maxMembers: 6,
    schedule: '매주 수/토 오후 3시',
    location: '홍대입구역 스터디룸',
    recruitingPositions: ['DevOps'],
  },
  {
    id: 6,
    title: 'AI 음악 추천 서비스',
    category: '프로젝트',
    description: '머신러닝 기반 음악 추천 시스템 개발',
    level: '고급',
    tags: ['Python', 'TensorFlow', 'FastAPI'],
    currentMembers: 2,
    maxMembers: 4,
    schedule: '매주 일요일 오후 2시',
    location: '역삼역 스터디카페',
    recruitingPositions: ['AI 엔지니어'],
  },
];

export const mockStudies: Study[] = [
  {
    id: 1,
    title: '알고리즘 마스터 클래스',
    category: '스터디',
    description: '코딩테스트 대비 알고리즘 문제 풀이',
    level: '중급',
    tags: ['Algorithm', 'Python', 'Java'],
    currentMembers: 4,
    maxMembers: 6,
    schedule: '매주 월/수 저녁 8시',
    location: '강남역 스터디룸',
    organizer: '김알고',
  },
  {
    id: 2,
    title: 'CS 지식 공유 스터디',
    category: '스터디',
    description: '면접 대비 CS 전공 지식 학습',
    level: '중급',
    tags: ['CS', 'Network', 'OS'],
    currentMembers: 5,
    maxMembers: 8,
    schedule: '매주 화/목 저녁 7시',
    location: '선릉역 회의실',
    organizer: '박면접',
  },
  {
    id: 3,
    title: '프론트엔드 심화 스터디',
    category: '스터디',
    description: 'React와 최신 웹 기술 학습',
    level: '고급',
    tags: ['React', 'TypeScript', 'Next.js'],
    currentMembers: 3,
    maxMembers: 5,
    schedule: '매주 토요일 오후 2시',
    location: '역삼역 스터디카페',
    organizer: '이프론트',
  },
  {
    id: 4,
    title: '디자인 패턴 스터디',
    category: '스터디',
    description: 'GoF 디자인 패턴 학습 및 실습',
    level: '중급',
    tags: ['Design Pattern', 'Java', 'OOP'],
    currentMembers: 4,
    maxMembers: 6,
    schedule: '매주 일요일 오후 3시',
    location: '삼성역 카페',
    organizer: '최패턴',
  },
  {
    id: 5,
    title: '클린 코드 리딩',
    category: '스터디',
    description: '클린 코드 도서 읽기 및 토론',
    level: '초급',
    tags: ['Clean Code', 'Review', 'Refactoring'],
    currentMembers: 6,
    maxMembers: 8,
    schedule: '매주 금요일 저녁 7시',
    location: '교대역 스터디룸',
    organizer: '정클린',
  },
  {
    id: 6,
    title: '백엔드 아키텍텍처 스터디',
    category: '스터디',
    description: 'MSA와 디자인 패턴 학습',
    level: '고급',
    tags: ['MSA', 'Spring', 'Docker'],
    currentMembers: 4,
    maxMembers: 6,
    schedule: '매주 토요일 오전 10시',
    location: '판교역 회의실',
    organizer: '김백엔드',
  },
];

export const mockEvents: Conference[] = [
  {
    id: 1,
    title: '2024 개발자 컨퍼런스',
    category: '컨퍼런스',
    startDate: '2024-04-15',
    endDate: '2024-04-16',
    location: '코엑스 그랜드볼룸',
    organizer: '테크 얼라이언스',
    description: '최신 개발 트렌드와 기술 공유',
  },
  {
    id: 2,
    title: '프론트엔드 밋업',
    category: '밋업',
    startDate: '2024-04-20',
    endDate: '2024-04-20',
    location: '강남 위워크',
    organizer: '프론트엔드 코리아',
    description: '프론트엔드 개발자 네트워킹',
  },
  {
    id: 3,
    title: 'AI 해커톤',
    category: '해커톤',
    startDate: '2024-05-01',
    endDate: '2024-05-02',
    location: '서울창업허브',
    organizer: 'AI 연구소',
    description: '24시간 AI 프로젝트 개발 대회',
  },
  {
    id: 4,
    title: '오픈소스 컨트리뷰톤',
    category: '컨트리뷰톤',
    startDate: '2024-05-15',
    endDate: '2024-05-15',
    location: '구글 캠퍼스',
    organizer: '오픈소스 커뮤니티',
    description: '오픈소스 프로젝트 기여 행사',
  },
  {
    id: 5,
    title: '블록체인 서밋',
    category: '컨퍼런스',
    startDate: '2024-06-01',
    endDate: '2024-06-02',
    location: '부산 벡스코',
    organizer: '블록체인 협회',
    description: '블블록체인 기술 동향 컨퍼런스',
  },
  {
    id: 6,
    title: '테크 리더십 포럼',
    category: '포럼',
    startDate: '2024-06-15',
    endDate: '2024-06-15',
    location: '그랜드 인터컨티넨탈',
    organizer: '테크 리더스',
    description: 'IT 리더십 강연 및 네트워킹',
  },
];

export const mockFeeds: Feed[] = [
  {
    id: 1,
    user: {
      name: '김개발',
      image: 'https://avatars.githubusercontent.com/u/583231',
    },
    content: '오늘 처음으로 오픈소스 프로젝트에 컨트리뷰션했습니다! 🎉',
    image:
      'https://github.blog/wp-content/uploads/2020/12/102393310-07478b80-3f8d-11eb-84eb-392d555ebd29.png',
    time: '2024-03-15T10:30:00',
    likes: 24,
    comments: 5,
  },
  {
    id: 2,
    user: {
      name: '이코딩',
      image: 'https://avatars.githubusercontent.com/u/383316',
    },
    content: '알고리즘 스터디 후기입니다. 정말 많이 배워갑니다.',
    image:
      'https://www.geeksforgeeks.org/wp-content/uploads/Competitive-Programming-1.jpg',
    time: '2024-03-15T11:20:00',
    likes: 15,
    comments: 3,
  },
  {
    id: 3,
    user: {
      name: '박해커',
      image: 'https://avatars.githubusercontent.com/u/499550',
    },
    content: '새로 나온 M3 맥북 프로 개발자 관점에서 리뷰해봤습니다.',
    image:
      'https://www.apple.com/v/macbook-pro-14-and-16/e/images/overview/hero/hero_intro__cww8m2vra4uq_large.jpg',
    time: '2024-03-15T12:45:00',
    likes: 42,
    comments: 8,
  },
  {
    id: 4,
    user: {
      name: '최프론트',
      image: 'https://avatars.githubusercontent.com/u/810438',
    },
    content: 'React 18 업데이트 내용 정리했습니다. 링크 첨부합니다.',
    image: 'https://reactjs.org/logo-og.png',
    time: '2024-03-15T14:15:00',
    likes: 31,
    comments: 6,
  },
  {
    id: 5,
    user: {
      name: '정백엔드',
      image: 'https://avatars.githubusercontent.com/u/317776',
    },
    content: 'Spring Boot 3.0 마이그레이션 가이드 작성했습니다.',
    image: 'https://spring.io/img/spring-2.svg',
    time: '2024-03-15T15:30:00',
    likes: 28,
    comments: 4,
  },
  {
    id: 6,
    user: {
      name: '강디자인',
      image: 'https://avatars.githubusercontent.com/u/709451',
    },
    content: '개발자를 위한 UI/UX 디자인 팁 공유합니다!',
    image: 'https://miro.medium.com/max/1400/1*9QxOZpiI_RvC5VQb5zZyuA.png',
    time: '2024-03-15T16:45:00',
    likes: 35,
    comments: 7,
  },
];

export const postUserApiResponse: PostUserApiResponse = {
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFiamluMTEiLCJpYXQiOjE3MzU5ODM2NjksImV4cCI6MTc2NzUxOTY2OX0.F37JCDIK_m6hlokkqA53HtCSHNaC0MgpCugstswvKbM',
  user: { id: 'test', nickname: 'test' },
};
