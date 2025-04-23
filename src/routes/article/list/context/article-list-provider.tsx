import type { FC, PropsWithChildren } from 'react';

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router';

import { useGetArticlesQuery } from '@/utils/api/hooks';
import { GetArticlesParams } from '@/utils/api/requests/articles/list';

import { ArticleListLoader } from '../loader';
import { ArticleListContext } from './article-list-context';

interface ArticleListProviderProps extends PropsWithChildren {
  defaultArticles: Article[];
}

export const ArticleListProvider: FC<ArticleListProviderProps> = ({
  children,
  defaultArticles = [],
}) => {
  const [searchParams] = useSearchParams();
  const [articles, setArticles] = useState<Article[]>(defaultArticles);
  const [params, setParams] = useState<GetArticlesParams>({
    offset: Number(searchParams.get('offset') || 0),
    limit: Number(searchParams.get('limit') || 0),
  });

  const articlesListResponse = useGetArticlesQuery(params);

  useEffect(() => {
    if (articlesListResponse.isSuccess) {
      setArticles(prev => [...prev, ...articlesListResponse.data.data.items]);
    }
  }, [articlesListResponse.isSuccess]);

  const loadMoreArticles = () => {
    const newOffset = params.offset + params.limit;
    setParams(prev => ({
      ...prev,
      offset: newOffset,
    }));
    searchParams.set('offset', String(newOffset));
  };

  if (articlesListResponse.isPending && !articlesListResponse.data) {
    return <ArticleListLoader />;
  }

  const value = useMemo(
    () => ({ articles, loadMoreArticles, loading: false }),
    [articles]
  );

  return (
    <ArticleListContext.Provider value={value}>
      {children}
    </ArticleListContext.Provider>
  );
};
