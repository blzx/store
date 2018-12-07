<template>
  <div id="app">
    <!--<img s  rc="./assets/logo.png">-->
    <router-link tag="button" to="/sibling">sibling</router-link>
    <router-link tag="button" to="/storeMutation">storeMutation</router-link>
    <router-link tag="button" to="/storeActions">storeActions</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
