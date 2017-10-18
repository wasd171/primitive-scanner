import Vue from 'vue'
import Router from 'vue-router'
import Scan from '@/components/Scan'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			component: Scan
		}
	]
})
