import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Contact from './views/Contact.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path:'contactus',
    //   redirect:{path:"/contact"}
    // },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      alias:'/contactus'
    },
    
    {
      path: '/about/:name/:city',
      name: 'about',
      component:About,
      props:true
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'*',
      component:NotFound
    }
  ]
})
