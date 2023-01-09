<script setup lang="ts">
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
</script>

<template>
  <div className="encompass encompass-m">
    <div className="hero-section" id="home">
      <div className="header">
          <h1 className="small-heading small-heading-m">Hi, I'm Kevin. I like to build stuff.</h1>
          <p className="main-desc main-desc-m">A computer science major who is passionate about the functionality and design of websites and applications. Fueled by persistence and a mediocre
          *but functional* brain, I am currently seeking new opportunities within tech!</p>
      </div>
    </div>

    <div className="about about-m" id="about">
      <h1 className="subtitle subtitle-m">About Me</h1>
      <p className="about-desc about-desc-m">Hi there! My name is Kevin Le and I develop small crumbs that live on the great web. Graduating college in Fall of 2022, I developed
        a strong desire to create personalized and custom experiences for myself. Since then, web development has become a hobby for me and I am continually
        learning and developing functional, extravagant designs on my free time. How you ask? The greatest motivations in my life reside in my own curiosities and
        Starbucks coffee. (:</p>
      <button @click="redirectCoffee" className="coffee coffee-m">Buy me a coffee!</button>
    </div>

    <div className="projects projects-m" id="projects">
      <h1 className="proj-subtitle proj-subtitle-m">Projects</h1>
      <p className="proj-desc proj-desc-m">Here are a few of the projects that I have worked on... definitely more to come and I am always looking for new and interesting
        ideas/projects to work on so contact me if you have any ideas or want to collaborate (-:
      </p>
      <div className="project-items project-items-m">
        <div className="item1 item1-m" @click="redirectCalc">
          <img className="snorlax" src='calculator.png'/>
          <h2 className="item1-desc item1-desc-m">Calculator</h2>
          <p>.NET MAUI</p>
        </div>
        <div className="item2 item2-m" @click="redirectQuiz">
          <img className="snorlax" src="quiz.png"/>
          <h2 className="item2-desc item2-desc-m">Quiz App</h2>
          <p>.NET MAUI</p>
        </div>
        <div className="item3 item3-m" @click="redirectInv">
          <img className="snorlax" src="inventory.png"/>
          <h2 className="item3-desc item3-desc-m">Inventory App</h2>
          <p>C#</p>
        </div>
      </div>
    </div>

    <!-- <div className="cool">
      <h1 className="cool-subtitle">Cool Stuff</h1>
      <p className="cool-desc">Just some cool stuff that I like.</p> 
    </div> -->
    <!-- for the cool stuff just have words scrambled in random places with random sizes :D -->

    <div className="talk talk-m" id="contact">
      <h1 className="talk-subtitle talk-subtitle-m">Let's Hang!</h1>
      <p className="talk-desc talk-desc-m">Whether it's mentorship, a collaboration, or if you just want to chat, I open my inbox to all and will try my best to get back to you as soon as possible!</p>
      <button className="talk-button talk-button-m" @click="redirectEmail">Let's Chat</button>
    </div>
  </div>
</template>