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
      const response = await CalculatorService.fetchCalculator({
        a: this.a,
        b: this.b,
        operator: 'add',
      });
      this.total = response.data.total;
      this.message = response.data.message;
    },
    async minus() {
      const response = await CalculatorService.fetchCalculator({
        a: this.a,
        b: this.b,
        operator: 'minus',
      });
      this.total = response.data.total;
      this.message = response.data.message;
    },
    async multiple() {
      const response = await CalculatorService.fetchCalculator({
        a: this.a,
        b: this.b,
        operator: 'multiple',
      });
      this.total = response.data.total;
      this.message = response.data.message;
    },
    async devide() {
      const response = await CalculatorService.fetchCalculator({
        a: this.a,
        b: this.b,
        operator: 'devide',
      });
      this.total = response.data.total;
      this.message = response.data.message;
    },
  },
};
</script>

<style scoped>
  button {
    width: 80px;
  }
</style>
