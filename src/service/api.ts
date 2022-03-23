import axios from 'axios';

export const http = axios.create({
  baseURL: 'http://swapi.dev/api/',
});
