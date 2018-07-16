import Api from './Api';

export default {
  fetchCalculator(params) {
    return Api().post('calculator', params);
  },
};
