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
  gap: 10px;
  font-size: 20px;
`;

const Button = styled.button`
  width: 50px;
`;

export default function Login() {
  const navigate = useNavigate();
  const signIn = useSignIn();
  const isAuthenticated = useIsAuthenticated();

  const onClickLoginButton = async () => {
    const getUserResponse = await api.postUser();
    signIn({
      auth: { token: getUserResponse.token },
      userState: getUserResponse.user,
    });
    navigate('/');
  };

  if (isAuthenticated) return <Navigate to="/" />;
  return (
    <Wrapper>
      Here is Login page.
      <Button onClick={onClickLoginButton}>로그인</Button>
    </Wrapper>
  );
}
