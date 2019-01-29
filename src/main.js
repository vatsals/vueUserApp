import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'
import vueRouter from 'vue-router'
import Additional from './components/Additional.vue'
import User from './components/User.vue'

Vue.config.productionTip = false
Vue.use(vueResource)
Vue.use(vueRouter)

const router = new vueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{path: '/', component: User},
		{path: '/additional', component: Additional}
	]
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
