// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';
import VueMaterial from 'vue-material'

import App from './App'
import Api from './components/Api'
import Home from './components/Home'
import Cart from './components/Cart'
import Modal from './components/Modal'
import Users from './components/Users'
import NavBar from './components/NavBar'
import Product from './components/Product'
import Products from './components/Products'
import NotFound from './components/NotFound'


Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueMaterial);

Vue.material.registerTheme({
  default: {
    primary: {
	    color: 'blue',
	    hue: 500,
	    textColor: 'white'
	},
	accent: {
		color: 'red',
		hue: 500,
		textColor: 'white'
	}
  },
  red: {
    primary: {
	    color: 'red',
	    hue: 600,
	    textColor: 'white'
	},
	accent: {
		color: 'red',
		hue: 600,
		textColor: 'black'
	}
  },
  green: {
    primary: {
	    color: 'green',
	    hue: 600,
	    textColor: 'white'
	},
		accent: {
		color: 'green',
		hue: 600,
		textColor: 'black'
	}
  },
  white: {
    primary: {
		color: 'white',
		hue: 500,
		textColor: 'black'
	},
	accent: {
		color: 'black',
		hue: 500,
		textColor: 'white'
	}
  },
});

Vue.material.setCurrentTheme('default');

Vue.component('nav-bar', NavBar);
Vue.component('modal', Modal);

const router = new VueRouter({
  routes: [
		{
			path: '/',
			component: Home,
			meta: {page_title: 'Vuejs&Material Demo | Home'}
		},
		{
			path: '/users',
			component: Users,
			meta: {page_title: 'Vuejs&Material Demo | Users'}
		},
		{
			path: '/api',
			component: Api,
			meta: {page_title: 'Vuejs&Material Demo | Api'}
		},
		{
			path: '/products',
			component: Products,
			meta: {page_title: 'Vuejs&Material Demo | Products'}
		},
		{
			path: '/product/:id',
			component: Product,
			meta: {page_title: 'Vuejs&Material Demo | Product'}
		},
		{
			path: '/cart',
			component: Cart,
			meta: {page_title: 'Vuejs&Material Demo | Cart'}
		},
		{
			path: '/*',
			component: NotFound,
			meta: {page_title: 'Vuejs&Material Demo | 404 NOT FOUND'}
		}
	]
});

router.beforeEach((to, from, next) => {
	document.title = to.meta.page_title;
	gtag('config', 'UA-108117243-1', {'page_path': to.path});
	next();
});

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: router
})
