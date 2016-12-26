import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import {routes} from './router/router.js'
import {state,mutations} from './store/store.js'
import App from './App.vue'
Vue.use(VueRouter)
const store = new Vuex.Store({
	state,mutations
})

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})


new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
