import axios from 'axios';

const api = axios.create({
  baseURL:  "https://apiv3.apifootball.com/", // Replace with your API base URL
});

const authApi = axios.create({
  baseURL: "http://localhost:5000/api/auth/"
});

export {api, authApi};