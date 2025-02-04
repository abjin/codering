import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import NavigationBar from './navigation-bar';
import Header from './header';

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;

  // 모바일에서는 하단 네비게이션을 위한 패딩
  padding: 60px 0 70px 0;

  // PC에서는 좌측 네비게이션을 위한 패딩과 레이아웃 조정
  @media (min-width: 768px) {
    padding: 0;
    padding-left: 240px; // NavigationBar의 width와 동일하게 설정
    display: flex;
    flex-direction: column;
  }
`;

const ContentWrapper = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  padding-bottom: 80px;

  @media (min-width: 768px) {
    padding-top: 80px; // Header 높이만큼 상단 패딩 추가
  }
`;

export default function Layout() {
  return (
    <Wrapper>
      <Header />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      <NavigationBar />
    </Wrapper>
  );
}
