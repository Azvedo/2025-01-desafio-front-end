import axios from 'axios';

const api = axios.create({
  baseURL:  "https://apiv3.apifootball.com/", // Replace with your API base URL
});

export default api;