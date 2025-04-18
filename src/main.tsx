import { QueryClient } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import type { ProvidersProps } from '@/providers';

import AppRouter from '@/app';
import Providers from '@/providers';

import '@/assets/styles/global.css';

let rootElement = document.getElementById('root');
if (!rootElement) {
  rootElement = document.createElement('div');
  rootElement.id = 'root';
  document.body.appendChild(rootElement);
}

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

const providersProps: Omit<ProvidersProps, 'children'> = {
  query: {
    client: queryClient,
  },
};

createRoot(rootElement).render(
  <StrictMode>
    <Providers {...providersProps}>
      <AppRouter />
    </Providers>
  </StrictMode>
);
