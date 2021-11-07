import ApiClient from '../../services/ApiClient';
import { setContenType } from '../../services/ApiClient';

export const createAdvertisement = (advertisement) => {
  const url = `/api/v1/adverts`;
  return ApiClient.post(url, advertisement);
};
