import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './header';
import NavigationBar from './navigation-bar';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr 100px;
  width: 100%;
`;

export default function Layout() {
  return (
    <Wrapper>
      <Header />
      <Outlet />
      <NavigationBar />
    </Wrapper>
  );
}
