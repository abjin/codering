import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import NavigationBar from './navigation-bar';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 70px;
  width: 100%;
  div {
    border: 1px solid red;
  }
`;

export default function Layout() {
  return (
    <Wrapper>
      <Outlet />
      <NavigationBar />
    </Wrapper>
  );
}
