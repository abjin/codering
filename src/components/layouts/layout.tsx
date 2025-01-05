import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import NavigationBar from './navigation-bar';
import Header from './header';

const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
  padding: 60px 0 70px 0;
`;

const ContentWrapper = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  padding-bottom: 80px;
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
