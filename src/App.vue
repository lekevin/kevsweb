<template>
  <NavbarMobi v-if="mobileView"/>
  <Navbar v-else/>
  <HomeView v-if="!mobileView"/>
  <HomeViewMobi v-else/>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import NavbarMobi from './components/NavbarMobi.vue';
import HomeView from './views/HomeView.vue';
import HomeViewMobi from './views/HomeViewMobi.vue';


var mobileView=true;

</script>