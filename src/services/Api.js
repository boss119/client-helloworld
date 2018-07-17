import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export default () => axios.create({
  baseURL: 'https://server-helloworld.herokuapp.com/',
});
