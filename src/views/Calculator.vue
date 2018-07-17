<template>
  <div>
    <h1>{{ title }}</h1>
    <p>
      A: <input type="text" v-model="a">
      B: <input type="text" v-model="b">
      <b-btn size="sm" variant="primary" @click="add" class="m-1">+</b-btn>
      <b-btn size="sm" variant="primary" @click="minus" class="m-1">-</b-btn>
      <b-btn size="sm" variant="primary" @click="multiple" class="m-1">*</b-btn>
      <b-btn size="sm" variant="primary" @click="devide" class="m-1">/</b-btn>
      = {{ total }} {{ message }}
    </p>
  </div>
</template>

<script>
import CalculatorService from '../services/CalculatorService';

export default {
  name: 'calculator',
  data() {
    return {
      title: 'Calculator',
      a: '',
      b: '',
      total: '',
      message: '',
    };
  },
  methods: {
    async add() {
      this.total = '';
      this.message = '';
      const response = await CalculatorService.fetchCalculator({
        a: this.a,
        b: this.b,
        operator: 'add',
      }).catch((error) => {
        this.message = error.response.data.message;
      });
      this.total = response.data.total;
    },
    async minus() {
      this.total = '';
      this.message = '';
      const response = await CalculatorService.fetchCalculator({
        a: this.a,
        b: this.b,
        operator: 'minus',
      }).catch((error) => {
        this.message = error.response.data.message;
      });
      this.total = response.data.total;
    },
    async multiple() {
      this.total = '';
      this.message = '';
      const response = await CalculatorService.fetchCalculator({
        a: this.a,
        b: this.b,
        operator: 'multiple',
      }).catch((error) => {
        this.message = error.response.data.message;
      });
      this.total = response.data.total;
    },
    async devide() {
      this.total = '';
      this.message = '';
      const response = await CalculatorService.fetchCalculator({
        a: this.a,
        b: this.b,
        operator: 'devide',
      }).catch((error) => {
        this.message = error.response.data.message;
      });
      this.total = response.data.total;
    },
  },
};
</script>

<style scoped>
  button {
    width: 80px;
  }
</style>
