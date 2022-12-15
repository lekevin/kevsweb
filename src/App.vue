<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <Router-link class="logo" to="/">KEVIN</Router-link>
      <nav>
        <Router-link class="nav1" to="/">Home</Router-link>
        <Router-link class="nav2" to="/about">About</Router-link>
        <Router-link class="nav3" to="/about">Projects</Router-link>
      </nav>
    <Router-link class="navEnd" to="/about">Contact</Router-link>
  </header>
  <RouterView />
</template>