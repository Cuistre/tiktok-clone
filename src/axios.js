import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://tiktok-backend-gh.herokuapp.com/',
});

export default instance;
