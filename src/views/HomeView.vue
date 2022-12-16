<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="encompass">

    <div class="hero-section">

      <h1 class="small-heading">Hi, I'm <span class="kevin">Kevin</span><span class="period" style="color: yellow">.</span></h1>
      <div class="big-heading">
      <h2>I like to <span class="build">build</span> <span class="random-text">stuff</span></h2>
      </div>
      <p class="main-desc">A computer science major who is passionate about the functionality and design of websites and applications. Fueled by persistence and a mediocre
        *but functional* brain, I am currently seeking new opportunities within tech!</p>
      <button class="linkedin">Check out my LinkedIn!</button>
      </div>

      <div class="about">
      <h1 class="subtitle">About Me</h1>
      <p class="about-desc">Hi there! My name is Kevin Le and I develop small crumbs that live on the great web. Graduating college in Fall of 2022, I developed
        a strong desire to create personalized and custom experiences for myself. Since then, web development has become a hobby for me and I am continually
        learning and developing functional, extravagant designs on my free time. How you ask? The greatest motivations in my life reside in my own curiosities and
        Starbucks coffee cups!</p>
      <button class="coffee">Buy me a coffee!</button>
    </div>

    <div class="projects">
      <h1 class="proj-subtitle">Projects</h1>
      <p class="proj-desc">Hi there! My name is Kevin Le and I develop small crumbs that live on the great web. Graduating college in Fall of 2022, I developed
        a strong desire to create personalized and custom experiences for myself. Since then, web development has become a hobby for me and I am continually
        learning and developing functional, extravagant designs on my free time. How you ask? The greatest motivations in my life reside in my own curiosities and
        Starbucks coffee cups!</p>
    </div>

    <div class="talk">
      <h1 class="talk-subtitle">Let's Hang!</h1>
      <p class="talk-desc">Whether it's mentorship, a collaboration, or if you just want to chat, I open my inbox to all and will try my best to get back to you ASAP!</p>
      <button class="talk-button">Check out my LinkedIn!</button>
    </div>

  </div>
  <RouterView />
</template>