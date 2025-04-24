import { api } from '@/utils/api/instance';

export interface GetArticlesParams {
  limit: number;
  offset: number;
}

export const getArticlesList = (params: GetArticlesParams) => {
  return api.get<PaginatedArticles>('/articles', { params });
};
