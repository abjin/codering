import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import api from '../api';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 40px 20px;
  max-width: 400px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: white;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 28px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  position: relative;
  padding-bottom: 12px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 40px;
    height: 3px;
    background-color: #e50914;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 16px;
  background-color: #fee500;
  color: #000000;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background-color: #e6d000;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

export default function Login() {
  const navigate = useNavigate();
  const signIn = useSignIn();
  const isAuthenticated = useIsAuthenticated();

  const onClickLoginButton = async () => {
    try {
      const getUserResponse = await api.postUser();
      signIn({
        auth: { token: getUserResponse.token },
        userState: getUserResponse.user,
      });
      navigate('/');
    } catch (error) {
      console.error('로그인 실패:', error);
      alert('로그인에 실패했습니다. 다시 시도해주세요.');
    }
  };

  if (isAuthenticated) return <Navigate to="/" />;
  return (
    <Wrapper>
      <Title>Codering</Title>
      <p>함께 성장하는 개발자 커뮤니티</p>
      <LoginButton onClick={onClickLoginButton}>카카오로 시작하기</LoginButton>
    </Wrapper>
  );
}
