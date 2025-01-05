import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid red;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 70px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
`;

export default function NavigationBar() {
  return <Wrapper></Wrapper>;
}
