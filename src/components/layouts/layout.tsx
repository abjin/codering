import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import NavigationBar from './navigation-bar';
import Header from './header';

const Wrapper = styled.div`
  --header-height: 60px;
  --nav-height: 70px;
  --nav-width: 0px;

  @media (min-width: 768px) {
    --header-height: 60px;
    --nav-height: 0px;
    --nav-width: 240px;
  }

  min-height: 100vh;
  width: 100%;
  position: relative;

  // 모바일에서는 하단 네비게이션을 위한 패딩
  padding: var(--header-height) 0 var(--nav-height) 0;

  // PC에서는 좌측 네비게이션을 위한 패딩과 레이아웃 조정
  @media (min-width: 768px) {
    padding: 0;
    padding-left: var(--nav-width);
    display: flex;
    flex-direction: column;
  }
`;

const ContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  position: absolute;

  height: calc(100vh - var(--header-height) - var(--nav-height));
  width: calc(100% - var(--nav-width));

  top: var(--header-height);
  left: var(--nav-width);
  right: 0px;
  overflow-y: scroll;
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
