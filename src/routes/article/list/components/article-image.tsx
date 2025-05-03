import type { FC } from 'react';

import { useState, useEffect } from 'react';

import { Skeleton } from '@/components/ui';
import { useGetArticleImage } from '@/utils/api/hooks';

interface ArticleImageProps {
  imageId: string;
}

export const ArticleImage: FC<ArticleImageProps> = ({ imageId }) => {
  const [imageUrl, setImageUrl] = useState<string>();
  const imageResponse = useGetArticleImage(imageId);

  useEffect(() => {
    if (imageResponse.data) {
      setImageUrl(URL.createObjectURL(imageResponse.data.data));
    }
  }, [imageResponse.data]);

  if (imageResponse.isLoading || imageResponse.isError) {
    return <Skeleton className='h-full w-68' />;
  }

  return (
    <div className='h-full max-w-68'>
      <img
        alt='Article 1 image'
        className='h-full w-full rounded-xs object-cover'
        src={imageUrl}
      />
    </div>
  );
};
