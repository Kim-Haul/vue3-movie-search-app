import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home.vue'
import Movie from './Movie.vue'
import About from './About.vue'
import Mbti from './Mbti.vue'

export default createRouter({
  // Hash
  // http://google.com/#/search
  history: createWebHashHistory(),
  // pages 구분 개념
  // http://google.com/
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/movie',
      component: Movie
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/mbti',
      component: Mbti
    }
  ]
})