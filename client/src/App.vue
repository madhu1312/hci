<template>
  <div id="app">
    <img alt="NYC logo" src="./assets/kyc.jpeg">
    <h1>Have a Break. Know about your City</h1>
    <app-quiz></app-quiz>
  </div>
</template>

<script>
import Quiz from './components/Quiz.vue'

export default {
  name: 'app',
  components: {
    'app-quiz': Quiz
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
