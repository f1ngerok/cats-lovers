type Article = {
  articleId: string;
  title: string;
  perex: string;
  imageId: string;
  createdAt: string;
  lastUpdatedAt: string;
};

type ArticleDetail = Article & {
  content: string;
  comments: Comment[];
};

type Comment = {
  commentId: string;
  articleId: string;
  author: string;
  content: string;
  createdAt: string;
  score: number;
};

type Tenant = {
  tenantId: string;
  name: string;
  createdAt: string;
  lastUpdatedAt: string;
};

type Image = {
  imageId: string;
  name: string;
  createdAt: string;
  lastUpdatedAt: string;
};

type PaginatedArticles = {
  items: Article[];
  pagination: Pagination;
};

type Pagination = {
  offset: number;
  limit: number;
  total: number;
};

type VoteResponse = {
  score: number;
};
