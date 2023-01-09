import { createApp, h } from 'vue';
import App from './App.vue';
import router from './router';
import VueSmoothScroll from 'vue3-smooth-scroll';
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiInstagram, OiPackageDependents } from "oh-vue-icons/icons";
import { RiGithubLine } from "oh-vue-icons/icons";
import { BiLinkedin } from "oh-vue-icons/icons";
import { MdEmailOutlined } from "oh-vue-icons/icons";
import Appear from './components/Appear.vue';
import { OiThreeBars } from "oh-vue-icons/icons";


addIcons(BiInstagram, BiLinkedin, RiGithubLine, MdEmailOutlined);

import './assets/main.css'
import './assets/nav.css'

/**
 * VueSmoothScroll
 * @source https://www.npmjs.com/package/vue3-smooth-scroll
*/

/**
 * OhVueIcons
 * @source https://oh-vue-icons.js.org/
*/


const app = createApp(App);

app.component("v-icon", OhVueIcon);

app.component('Appear', Appear)

app.use(VueSmoothScroll);

app.use(router);

app.mount('#app');

app.component("detectMobile", detectMobile);
