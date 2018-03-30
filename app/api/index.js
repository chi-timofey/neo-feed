import client, { setBaseEndpoint, setApiKey } from 'utils/apiClient';
import config from 'config';

setBaseEndpoint(config.apiHost);
setApiKey(config.NasaApiKey);

export const getAsteroidsList = (start_date, end_date) => // eslint-disable-line camelcase
  client.get('/neo/rest/v1/feed', {
    params: {
      start_date,
      end_date,
    },
  });
