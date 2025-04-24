import type { UseQueryResult } from '@tanstack/react-query';

import { useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

import type { GetArticlesParams } from '@/utils/api/requests/articles/list';

import { articlesKeys } from '@/utils/api';
import { getArticlesList } from '@/utils/api/requests/articles/list';

export const useGetArticlesQuery = (
  payload: GetArticlesParams,
  settings?: QuerySettings<typeof getArticlesList>
): UseQueryResult<AxiosResponse<PaginatedArticles>, AxiosError> => {
  return useQuery<
    AxiosResponse<PaginatedArticles>,
    AxiosError,
    AxiosResponse<PaginatedArticles>
  >({
    queryKey: articlesKeys.list(payload),
    queryFn: () => getArticlesList(payload),
    enabled: false,
    ...settings?.options,
  });
};
