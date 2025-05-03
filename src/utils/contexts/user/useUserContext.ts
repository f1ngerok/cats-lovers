import { useContext } from 'react';

import { UserContext } from '@/utils/contexts/user/user-context';

export const useUserContext = () => {
  return useContext(UserContext);
};
