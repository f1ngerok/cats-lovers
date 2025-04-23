import { createContext } from 'react';

export type ArticleListContextProps = {
  articles: Article[];
  loadMoreArticles: () => void;
  loading: boolean;
};

export const ArticleListContext = createContext<ArticleListContextProps>({
  articles: [],
  loadMoreArticles: () => {},
  loading: false,
});
