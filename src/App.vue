<template>
  <navbar/>
  <div class="app">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  components: {Navbar}
}
</script>

<style>
  .container {
    padding: 0 20px;
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }
</style>