import type { FC, PropsWithChildren } from 'react';

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
      <QueryProvider {...query}>{children}</QueryProvider>
    </ErrorBoundary>
  );
};

export default Providers;
