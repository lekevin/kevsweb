<script setup lang="ts">
const redirectLinkedin = () => {
  window.location.href = 'https://www.linkedin.com/in/kevin-le-243381189/';
};
const redirectGithub = () => {
  window.location.href = 'https://github.com/lekevin';
};
const redirectInstagram = () => {
  window.location.href = 'https://www.secure.instagram.com/accounts/login/?next=/_nivekel/';
};

const reload = () => {
  window.location.reload();
}
</script>

<template>
  <div className="container" v-if="$route.name === 'home'">
      <div className="navbar">
        <Appear :delay="100" :transition="['-100px', '-100px']">
          <a href="#home" v-smooth-scroll className="logo logo-m" @click="reload">lekev.in</a>
        </Appear>
        <Appear :delay="200" :transition="['-100px', '-100px']">
          <nav className="nav-item nav-item-m">
              <a href="#home" v-smooth-scroll className="nav1">HOME</a>
              <a href="#about" v-smooth-scroll="{ offset: -100 }" className="nav2">ABOUT</a>
              <a href="#projects" v-smooth-scroll className="nav3">PROJECTS</a>
          </nav>
        </Appear>
        <Appear :delay="300" :transition="['-100px', '-100px']">
          <a href="/resume.pdf" className="navEnd navEnd-m" target="_blank" rel="noopener noreferrer">RESUME</a>
        </Appear>
      </div>
    <Appear :delay="200" :transition="['100px', '100px']">
    <div className="right-banner right-banner-m">
      <a href="mailto:lekevvin@gmail.com" className="right-banner-item"><v-icon name="md-email-outlined" scale="1.5"/></a>
      <div className="right-banner-item" id="right-banner-item"><v-icon name="bi-linkedin" scale="1.5" @click="redirectLinkedin" /></div>
      <div className="right-banner-item" id="right-banner-item"><v-icon name="ri-github-line" scale="1.5" @click="redirectGithub"/></div>
      <div className="right-banner-item" id="right-banner-item"><v-icon name="bi-instagram" scale="1.5" @click="redirectInstagram"/></div>
    </div>
  </Appear>

  </div>
</template>