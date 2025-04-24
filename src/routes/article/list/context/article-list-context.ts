import { createContext } from 'react';

export type ArticleListContextProps = {
  articles: Article[];
  loadMoreArticles: () => void;
  canLoadMore: boolean;
};

export const ArticleListContext = createContext<ArticleListContextProps>({
  articles: [],
  loadMoreArticles: () => {},
  canLoadMore: false,
});
