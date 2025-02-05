import { RouterProvider } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { router } from './routes';
import AuthProvider from 'react-auth-kit/AuthProvider';
import { store } from './store';
import { SocketProvider } from './socket';
import { useKeyboardAvoidingView } from './hooks/common/useKeyboardAvoidingView';

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    background-color: black;
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const Wrapper = styled.div`
  height: 100svh;
  display: flex;
  justify-content: center;
`;

function App() {
  useKeyboardAvoidingView();

  return (
    <Wrapper>
      <GlobalStyles />
      <SocketProvider>
        <AuthProvider store={store}>
          <RouterProvider router={router} />
        </AuthProvider>
      </SocketProvider>
    </Wrapper>
  );
}

export default App;
