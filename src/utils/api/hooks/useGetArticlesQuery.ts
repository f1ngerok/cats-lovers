import type { UseQueryOptions, UseQueryResult } from '@tanstack/react-query';

import { useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

import type { GetArticlesParams } from '@/utils/api/requests/articles/list';

import { articlesKeys } from '@/utils/api';
import { getArticlesList } from '@/utils/api/requests/articles/list';

export const useGetArticlesQuery = (
  payload: GetArticlesParams,
  options?: UseQueryOptions<
    AxiosResponse<Article[]>,
    AxiosError,
    AxiosResponse<Article[]>,
    readonly string[]
  >
): UseQueryResult<AxiosResponse<Article[]>, AxiosError> => {
  return useQuery<
    AxiosResponse<Article[]>,
    AxiosError,
    AxiosResponse<Article[]>,
    readonly string[]
  >({
    queryKey: articlesKeys.list(payload),
    queryFn: () => getArticlesList(payload),
    ...options,
  });
};
