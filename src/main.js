import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'
import vueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld'
import User from './components/User'

Vue.config.productionTip = false
Vue.use(vueResource)
Vue.use(vueRouter)

const router = new vueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{path: '/', component: User},
		{path: '/hello', component: HelloWorld}
	]
});

/* eslint-disable no-new */
new Vue({
  	router,
	template: `
		<div id="app">
			<router-view></router-view>
		</div>
		`
}).$mount('#app')
