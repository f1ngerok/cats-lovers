import type { FC, PropsWithChildren } from 'react';

import { useEffect, useMemo, useState } from 'react';

import { useGetArticlesQuery } from '@/utils/api/hooks';
import { GetArticlesParams } from '@/utils/api/requests/articles/list';

import { NoArticles } from '../components';
import { ArticleListLoader } from '../loader';
import { ArticleListContext } from './article-list-context';

export const ArticleListProvider: FC<PropsWithChildren> = ({ children }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [canLoadMore, setCanLoadMore] = useState(false);
  const [params, setParams] = useState<GetArticlesParams>({
    offset: 0,
    limit: 10,
  });

  const articlesListResponse = useGetArticlesQuery(params, {
    options: {
      enabled: true,
    },
  });

  const handleNewArticles = (newArticles: Article[]) => {
    setArticles(prev => {
      const existingIds = new Set(prev.map(article => article.articleId));
      const uniqueNewArticles = newArticles.filter(
        article => !existingIds.has(article.articleId)
      );

      if (uniqueNewArticles.length === 0) {
        return prev;
      }

      const updatedArticles = [...prev, ...uniqueNewArticles];
      const totalArticles =
        articlesListResponse.data?.data.pagination.total ?? 0;
      setCanLoadMore(totalArticles > updatedArticles.length);

      return updatedArticles;
    });
  };

  useEffect(() => {
    if (articlesListResponse.data) {
      handleNewArticles(articlesListResponse.data.data.items);
    }
  }, [articlesListResponse.data]);

  const loadMoreArticles = () => {
    if (!canLoadMore) return;

    setParams(prev => ({
      ...prev,
      offset: prev.offset + prev.limit,
    }));
  };

  const value = useMemo(
    () => ({
      articles,
      loadMoreArticles,
      canLoadMore,
    }),
    [articles, canLoadMore]
  );

  const shouldShowNoArticles =
    articlesListResponse.data?.data.items.length === 0 && articles.length === 0;

  if (shouldShowNoArticles) {
    return <NoArticles />;
  }

  return (
    <ArticleListContext.Provider value={value}>
      {children}
      {articlesListResponse.isLoading && <ArticleListLoader />}
    </ArticleListContext.Provider>
  );
};
