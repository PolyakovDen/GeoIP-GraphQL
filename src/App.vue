<template>
  <div id="app">
    <Wrapper />
  </div>
</template>

<script>
import Wrapper from "./components/Wrapper";
export default {
  name: 'App',
  components: {
    Wrapper
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: Open Sans, sans-serif;
  }
</style>
