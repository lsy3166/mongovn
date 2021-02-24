<template>
  <div id="app">
    <div id="nav">
      <nav-bar />
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: { NavBar }
};
</script>

<style lang="scss"></style>
