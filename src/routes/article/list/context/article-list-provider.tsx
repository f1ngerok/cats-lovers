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
    limit: 1,
  });

  const articlesListResponse = useGetArticlesQuery(params, {
    options: {
      enabled: true,
    },
  });

  useEffect(() => {
    if (articlesListResponse.isSuccess && articlesListResponse.data) {
      setArticles(prev => {
        const newArticles = [...prev, ...articlesListResponse.data.data.items];
        setCanLoadMore(
          articlesListResponse.data.data.pagination.total > newArticles.length
        );
        return newArticles;
      });
    }

    return () => {
      setArticles([]);
      setCanLoadMore(false);
    };
  }, [articlesListResponse.isSuccess]);

  const loadMoreArticles = () => {
    const newOffset = params.offset + params.limit;
    setParams(prev => ({
      ...prev,
      offset: newOffset,
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

  if (articlesListResponse.isLoading) {
    return <ArticleListLoader />;
  }

  if (
    articlesListResponse.data &&
    articlesListResponse.data.data.items.length === 0
  ) {
    return <NoArticles />;
  }

  return (
    <ArticleListContext.Provider value={value}>
      {children}
    </ArticleListContext.Provider>
  );
};
