import { createContext } from 'react';

export interface UserContextProps {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

export const UserContext = createContext<UserContextProps>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});
