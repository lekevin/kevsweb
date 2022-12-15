<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <Router-link class="logo" to="/">KEVIN</Router-link>
      <nav>
        <Router-link class="nav1" to="/">HOME</Router-link>
        <Router-link class="nav2" to="/about">ABOUT</Router-link>
        <Router-link class="nav3" to="/about">PROJECTS</Router-link>
      </nav>
    <Router-link class="navEnd" to="/about">CONTACT</Router-link>
  </header>
  <RouterView />
</template>