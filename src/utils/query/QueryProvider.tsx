import type { FC, ComponentProps, ReactNode } from 'react';

import { QueryClientProvider } from '@tanstack/react-query';

export interface QueryProviderProps
  extends ComponentProps<typeof QueryClientProvider> {
  children: ReactNode;
}

export const QueryProvider: FC<QueryProviderProps> = ({ children, client }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default QueryProvider;
