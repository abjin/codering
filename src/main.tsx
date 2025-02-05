import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';

if (import.meta.env.USE_STRICT_MODE === 'true') {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  createRoot(document.getElementById('root')!).render(<App />);
}
