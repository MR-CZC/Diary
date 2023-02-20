<template>
  <div class="container">
    <Home/>
  </div>
</template>

<script>
  import Home from "./pages/Home.vue";
  export default {
    name: 'App',
    components : {Home}
  }
</script>

<style scoped>
  .container{
    background: url("./assets/bgi.jpg");
    background-size: 100% 100%;
    height: 100%;
    position: fixed;
    width: 100%;
    overflow: scroll;
    height: 100vh;
  }
</style>
