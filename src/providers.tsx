import type { FC, PropsWithChildren } from 'react';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ErrorBoundary } from 'react-error-boundary';
import { Toaster } from 'sonner';

import type { QueryProviderProps } from '@/utils/contexts/query';

import { ErrorFallback } from '@/components';
import { QueryProvider } from '@/utils/contexts/query';
export interface ProvidersProps extends PropsWithChildren {
  query: Omit<QueryProviderProps, 'children'>;
}

const TOASTER_DURATION = 3000;

const Providers: FC<ProvidersProps> = ({ children, query }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryProvider {...query}>
        {children}
        <Toaster duration={TOASTER_DURATION} />
        {process.env.NODE_ENV === 'development' && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
      </QueryProvider>
    </ErrorBoundary>
  );
};

export default Providers;
