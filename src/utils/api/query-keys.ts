import { GetArticlesParams } from './requests/articles/list';

export const articlesKeys = {
  article: 'article',
  list: (params: GetArticlesParams) => [
    articlesKeys.article,
    'list',
    'page',
    params.offset.toString(),
    'limit',
    params.limit.toString(),
  ],
  image: (imageId: string) => [articlesKeys.article, 'image', imageId],
};
