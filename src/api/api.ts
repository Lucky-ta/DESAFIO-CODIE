import API_URLS from './apiUrls/urls';

import axios from 'axios';

const AXIOS_API = axios.create({
  baseURL: API_URLS.base_url,
});

export default AXIOS_API;
