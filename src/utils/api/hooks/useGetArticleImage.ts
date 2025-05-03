import { useQuery } from '@tanstack/react-query';

import { articlesKeys } from '@/utils/api/query-keys';
import { getImage } from '@/utils/api/requests/images/get';

export const useGetArticleImage = (
  imageId: string,
  settings?: QuerySettings<typeof getImage>
) => {
  return useQuery({
    queryKey: articlesKeys.image(imageId),
    queryFn: () => getImage({ imageId }),
    ...settings,
  });
};
