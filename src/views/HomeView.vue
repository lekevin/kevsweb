<script setup lang="ts">
import { onMounted } from 'vue';

const redirectLinkedin = () => {
  window.location.href = 'https://www.linkedin.com/in/kevin-le-243381189/';
};

const redirectCoffee = () => {
  window.location.href = 'https://www.buymeacoffee.com/lekevin742N';
};

const redirectEmail = () => {
  window.location.href = 'mailto:lekevvin@gmail.com';
};

const redirectCalc = () => {
  window.location.href = 'https://github.com/vinentHuynh/maui-calculator';
};

const redirectQuiz = () => {
  window.location.href = 'https://github.com/lekevin/quiz-app';
};

const redirectInv = () => {
  window.location.href = 'https://github.com/lekevin/inventoryApp';
};

const redirectKeep = () => {
  window.location.href = 'https://google-keep-react-eight.vercel.app/';
};

onMounted(() => {
  const hiddenElements = document.querySelectorAll('.hidden')
  console.log('hello', hiddenElements);
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("show", entry.isIntersecting)
      console.log(entry)
    })
  })

  hiddenElements.forEach(hiddenElement => {
    observer.observe(hiddenElement)
  })

})

</script>

<template>
  <section>
    <span class="span"></span>
    <span class="span"></span>
    <span class="span"></span>
    <span class="span"></span>
    <span class="span"></span>
    <span class="span"></span>
    <span class="span"></span>
    <span class="span"></span>
    <span class="span"></span>
  </section>
  <div className="encompass">
    <div className="hero-section hidden" id="home">
      <div className="header">
        <h1 className="small-heading">Hi, I'm <span className="kevin">Kevin</span><span className="period"
            style="color: yellow">.</span></h1>
        <h1 className="big-heading">I like to <span className="build">build</span> <span
            className="random-text">stuff</span></h1>
        <p className="main-desc">A computer science major who is passionate about the functionality and design of
          websites and applications. Fueled by persistence and a mediocre
          *but functional* brain, I am currently seeking new opportunities within tech!</p>
          <p className="warning">p.s. sorry if it looks wonky: I'm still new to cross-browser compatibility testing*</p>
        <button className="linkedin" @click="redirectLinkedin">Check out my LinkedIn!</button>
      </div>
    </div>
    <div className="about about-m" id="about">
        <div className="me-container">
          <img src="me.png" className="me"/>
        </div>
        <div className="about-wrapper">
            <h1 className="about-subtitle hidden">About Me</h1>
            <p className="about-desc hidden">Hi there! My name is Kevin Le and I develop small crumbs that live on the great web.
              Graduating college in Fall of 2022, I developed
              a strong desire to create personalized and custom experiences for myself. Since then, web development has become
              a hobby for me and I am continually
              learning and developing functional, extravagant designs on my free time. How you ask? The greatest motivations
              in my life reside in my own curiosities and
              Starbucks coffee.</p>
            <button @click="redirectCoffee" className="coffee hidden">Buy me a coffee!</button>
        </div>
    </div>

    <div className="projects" id="projects">
      <h1 className="proj-subtitle hidden">Projects</h1>
      <p className="proj-desc hidden">Here are a few of the projects that I have worked on... definitely more to come and I am
        always looking for new and interesting
        ideas/projects to work on so contact me if you have any ideas or want to collaborate (-:
      </p>
      <div className="project-items hidden">
        <div className="item1" @click="redirectKeep">
          <img className="snorlax" src="google-keep.png" />
          <h2 className="item1-desc">Google Keep</h2>
          <p>Javascript</p>
        </div>
        <div className="item2" @click="redirectQuiz">
          <img className="snorlax" src="quiz.png" />
          <h2 className="item2-desc">Quiz App</h2>
          <p>.NET MAUI</p>
        </div>
        <div className="item3" @click="redirectInv">
          <img className="snorlax" src="inventory.png" />
          <h2 className="item3-desc">Inventory App</h2>
          <p>C#</p>
        </div>
        <div className="item4" @click="redirectCalc">
          <img className="snorlax" src='calculator.png' />
          <h2 className="item4-desc">Calculator</h2>
          <p>.NET MAUI</p>
        </div>
        </div>
    </div>

    <!-- <div className="cool">
      <h1 className="cool-subtitle">Cool Stuff</h1>
      <p className="cool-desc">Just some cool stuff that I like.</p> 
    </div> -->
    <!-- for the cool stuff just have words scrambled in random places with random sizes :D -->

    <div className="talk hidden" id="contact">
      <h1 className="talk-subtitle">Let's Hang!</h1>
      <p className="talk-desc">Whether it's mentorship, a collaboration, or if you just want to chat, I open my inbox to
        all and will try my best to get back to you as soon as possible!</p>
      <button className="talk-button" @click="redirectEmail">Let's Chat</button>
    </div>
  </div>
</template>