import { useContext } from 'react';

import { ArticleListContext } from './article-list-context';

export const useArticleListContext = () => {
  return useContext(ArticleListContext);
};
