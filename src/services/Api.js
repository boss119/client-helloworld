import axios from 'axios';

export default () => axios.create({
  baseURL: 'https://server-helloworld.herokuapp.com/',
});
