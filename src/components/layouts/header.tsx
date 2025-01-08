import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: black;
  display: flex;
  align-items: center;
  padding: 0 20px;
  z-index: 1000;
`;

const Logo = styled.h1`
  font-size: 20px;
  font-weight: 700;
  background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo>deploy test</Logo>
    </HeaderWrapper>
  );
}
