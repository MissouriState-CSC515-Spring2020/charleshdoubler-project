<template>
  <div id="app">
    <NavigationBar></NavigationBar>
    <search></search>
    <b-container fluid>
      <router-view :key="$route.fullPath"></router-view>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    NavigationBar : () => import('@/components/NavigationBar'),
    Search : () => import('@/components/Search'),
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