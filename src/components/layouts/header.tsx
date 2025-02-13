import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  z-index: 100;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: black;
  opacity: 0.9;

  @media (min-width: 768px) {
    left: var(--nav-width);
  }
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
      <Logo>Codering</Logo>
    </HeaderWrapper>
  );
}
