import type { FC } from 'react';

import { useParams } from 'react-router';

export const ArticleDetailPage: FC = () => {
  const { articleId } = useParams();
  return <div>ArticleDetailPage: {articleId}</div>;
};
