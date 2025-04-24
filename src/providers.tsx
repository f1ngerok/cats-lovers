import type { FC, PropsWithChildren } from 'react';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ErrorBoundary } from 'react-error-boundary';

import type { QueryProviderProps } from '@/utils/contexts/query';

import { ErrorFallback } from '@/components';
import { QueryProvider } from '@/utils/contexts/query';

export interface ProvidersProps extends PropsWithChildren {
  query: Omit<QueryProviderProps, 'children'>;
}

const Providers: FC<ProvidersProps> = ({ children, query }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryProvider {...query}>
        {children}
        {process.env.NODE_ENV === 'development' && (
          <ReactQueryDevtools initialIsOpen={true} />
        )}
      </QueryProvider>
    </ErrorBoundary>
  );
};

export default Providers;
