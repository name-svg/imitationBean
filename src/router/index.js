import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index.vue'
import details from '@/components/details.vue'
import science from '@/components/science.vue'
import search from '@/components/search.vue'
import searchtwo from '@/components/searchtwo.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/details',
      component: details
    },
    {
      path: '/science',
      component: science
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '/searchtwo',
      component: searchtwo
    },
  ]
})
