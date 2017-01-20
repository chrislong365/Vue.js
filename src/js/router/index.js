// ROUTER
//

import Vue from 'vue';
import VueRouter from 'vue-router';

// COMPONENT VIEWS
import home from '../views/Home.vue';
import people from '../views/people/index.vue';
import peopleShow from '../views/people/show.vue';

// INIT VUE-ROUTER
Vue.use(VueRouter);

// ROUTER MAP
export default new VueRouter({
  routes: [
    { path: '/', component: home },
    { path: '/people', component: people },
    { path: '/people/:email', component: peopleShow }


  ],
  linkActiveClass: "active",
});
