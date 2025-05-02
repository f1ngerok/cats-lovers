import type { FC, PropsWithChildren } from 'react';

import { useMemo, useState } from 'react';

import { UserContext } from './user-context';

interface UserContextProviderProps extends PropsWithChildren {
  defaultIsAuthenticated?: boolean;
}

export const UserContextProvider: FC<UserContextProviderProps> = ({
  children,
  defaultIsAuthenticated = false,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    defaultIsAuthenticated
  );

  const value = useMemo(
    () => ({ isAuthenticated, setIsAuthenticated }),
    [isAuthenticated]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
