<template>
  <div id="app">
    <NavigationBar></NavigationBar>
    <b-container fluid>
      <router-view :key="$route.fullPath"></router-view>
    </b-container>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'
export default {
  name: 'app',
  components: {
    NavigationBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>