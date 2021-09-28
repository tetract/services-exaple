import axios from 'axios';

const http = axios.create({
  baseURL: 'https://your-api-endpoint.azurewebsites.net/api',
  headers: {
    'Content-type': 'application/json'
  }
});

export default http;
