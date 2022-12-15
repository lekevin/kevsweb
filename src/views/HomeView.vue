<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="encompass">
    <div class="hero-section">
      <h1 class="small-heading">Hi, I'm <span class="kevin">Kevin</span><span class="period" style="color: yellow">.</span></h1>
      <h2 class="big-heading">I like to build ---------</h2>
      <p class="description">I am a computer science major who is passionate about the functionality and design of websites and applications. Fueled by persistence and caffeine, I am currently seeking new opportunities within tech!</p>
      <button class="courses">Check out my LinkedIn!</button>
    </div>
  </div>
  <RouterView />
</template>