<template>
  <div id="app">
    <h1>Calculadora</h1>
    <Calculator />
  </div>
</template>

<script>
import Calculator from './views/Calculator.vue'

export default {
  components: { Calculator },
  name: 'App',
}
</script>

<style>
body {
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  color: #fff;
  background: linear-gradient(to right, rgb(0, 0, 70), rgb(28, 181, 224));
}
</style>
