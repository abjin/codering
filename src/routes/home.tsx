import styled from 'styled-components';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';

const Wrapper = styled.div``;

export default function Home() {
  const auth = useAuthUser<{ nickname: string }>();
  return <Wrapper>Hello {auth!.nickname}, Here is home page.</Wrapper>;
}
