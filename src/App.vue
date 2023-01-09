<template>
  <NavbarMobi id="navbarmobi"/>
  <Navbar id="navbar"/>
  <HomeViewMobi id="homeviewmobi"/>
  <HomeView id="homeview"/>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import NavbarMobi from './components/NavbarMobi.vue';
import HomeView from './views/HomeView.vue';
import HomeViewMobi from './views/HomeViewMobi.vue';
</script>

<style>

@media screen and (min-width: 1096px){
  #homeviewmobi{
    display: none;
  }
  #navbarmobi{
    display: none;
  }
}

@media screen and (max-width: 1096px){
  #homeview{
    display: none;
  }
  #navbar{
    display: none;
  }
}

</style>