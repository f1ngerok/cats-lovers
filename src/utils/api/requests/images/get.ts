import { api } from '@/utils/api';

interface GetImagePayload {
  imageId: string;
}

export const getImage = ({ imageId }: GetImagePayload) => {
  return api.get<Blob>(`/images/${imageId}`, {
    responseType: 'blob',
  });
};
