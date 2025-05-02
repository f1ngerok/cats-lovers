import type { FC, PropsWithChildren } from 'react';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Cookies from 'js-cookie';
import { ErrorBoundary } from 'react-error-boundary';
import { Toaster } from 'sonner';

import type { QueryProviderProps } from '@/utils/contexts/query';

import { ErrorFallback } from '@/components';
import { STORE } from '@/utils/constants';
import { QueryProvider } from '@/utils/contexts/query';
import { UserContextProvider } from '@/utils/contexts/user/user-provider';

export interface ProvidersProps extends PropsWithChildren {
  query: Omit<QueryProviderProps, 'children'>;
}

const TOASTER_DURATION = 3000;

const Providers: FC<ProvidersProps> = ({ children, query }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryProvider {...query}>
        <UserContextProvider
          defaultIsAuthenticated={
            Cookies.get(STORE.COOKIES.AUTH_TOKEN_KEY) !== undefined
          }
        >
          {children}
          <Toaster duration={TOASTER_DURATION} />
          {process.env.NODE_ENV === 'development' && (
            <ReactQueryDevtools initialIsOpen={false} />
          )}
        </UserContextProvider>
      </QueryProvider>
    </ErrorBoundary>
  );
};

export default Providers;
