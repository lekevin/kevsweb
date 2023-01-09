<template>
  <NavbarMobi id="navbarmobi"/>
  <Navbar id="navbar"/>
  <HomeViewMobi id="navbarmobi"/>
  <HomeView id="homeview"/>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import NavbarMobi from './components/NavbarMobi.vue';
import HomeView from './views/HomeView.vue';
import HomeViewMobi from './views/HomeViewMobi.vue';

var isMobile = false;
</script>

<style>
@media screen and (max-width: 1096px){
  #homeview{
    display: none;
  }
  #navbar{
    display: none;
  }
}

</style>