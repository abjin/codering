import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Wrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70px;
  background: #1a1a1a;
`;

const NavItem = styled(Link)<{ $isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: ${(props) => (props.$isActive ? '#FF6B6B' : '#9e9e9e')};
  font-size: 12px;
  gap: 4px;
  width: 20%;
  justify-content: center;
  padding: 8px 0;

  svg {
    width: 24px;
    height: 24px;
    transition: all 0.2s ease;
    fill: ${(props) => (props.$isActive ? '#FF6B6B' : '#9e9e9e')};
  }

  &:hover {
    color: #ff6b6b;
    svg {
      fill: #ff6b6b;
    }
  }
`;

export default function NavigationBar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Wrapper>
      <NavItem to="/" $isActive={currentPath === '/'}>
        <svg viewBox="0 0 24 24">
          <path d="M12 3L4 9v12h5v-7h6v7h5V9z" />
        </svg>
        홈
      </NavItem>

      <NavItem to="/projects" $isActive={currentPath === '/projects'}>
        <svg viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
        프로젝트
      </NavItem>

      <NavItem to="/feeds" $isActive={currentPath === '/feeds'}>
        <svg viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
        </svg>
        게시판
      </NavItem>

      <NavItem to="/studies" $isActive={currentPath === '/studies'}>
        <svg viewBox="0 0 24 24">
          <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
        </svg>
        스터디
      </NavItem>

      <NavItem to="/conferences" $isActive={currentPath === '/conferences'}>
        <svg viewBox="0 0 24 24">
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z" />
        </svg>
        이벤트
      </NavItem>
    </Wrapper>
  );
}
