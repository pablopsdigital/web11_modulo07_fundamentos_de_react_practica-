import ApiClient from '../../services/ApiClient';

export const getAdvertisementId = (advertisementId) => {
  const url = `/api/v1/adverts/${advertisementId}`;
  return ApiClient.get(url);
};
