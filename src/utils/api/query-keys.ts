import { GetArticlesParams } from './requests/articles/list';

export const articlesKeys = {
  article: 'article' as const,
  list: (params: GetArticlesParams) =>
    [
      articlesKeys.article,
      'list',
      'page',
      params.offset.toString(),
      'limit',
      params.limit.toString(),
    ] as const,
};
