import client from 'axios';

function getUrl(config) {
  if (config.baseURL) {
    return config.url.replace(config.baseURL, '');
  }
  return config.url;
}

/* eslint-disable */
if (process.env.NODE_ENV !== 'production') {
  client.interceptors.request.use(
    (config) => {
      console.log(
        '%c ' + config.method.toUpperCase() + ' - ' + getUrl(config) + ':',
        'color: #0086b3; font-weight: bold',
        config,
      );
      return config;
    },
    error => Promise.reject(error),
  );

  client.interceptors.response.use(
    (response) => {
      console.log(
        '%c ' + response.status + ' - ' + getUrl(response.config) + ':',
        'color: #008000; font-weight: bold',
        response,
      );
      return response;
    },

    (error) => {
      console.log(
        '%c ' + error.response.status + ' - ' + getUrl(error.response.config) + ':',
        'color: #a71d5d; font-weight: bold',
        error.response,
      );
      return Promise.reject(error);
    },
  );
}

let api_key;
let endpoint = '';

export const setApiKey = (newApiKey) => {
  api_key = newApiKey;
};
/* eslint-enable */

const getBaseHeaders = () => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
});

export const setBaseEndpoint = (ep) => {
  endpoint = ep;
};

const callApi = async (url, {
  headers = {},
  params = {},
  data,
  ...restOptions
}) => {
  const config = {
    url: `${endpoint}${url}`,
    headers: { ...getBaseHeaders(), ...headers },
    params: { ...params, api_key },
    data,
    ...restOptions,
  };
  if (restOptions.method === 'POST' && !config.data) {
    config.data = {};
  }

  const request = await client.request(config);

  return request.data;
};

export default {
  get: (url, options) => callApi(url, { ...options, method: 'GET' }),
  post: (url, options) => callApi(url, { ...options, method: 'POST' }),
  put: (url, options) => callApi(url, { ...options, method: 'PUT' }),
  delete: (url, options) => callApi(url, { ...options, method: 'DELETE' }),
};
