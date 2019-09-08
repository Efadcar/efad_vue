
// initialize routes for the whole application
const routerOptions = [
	{
		path: '/',
		component: 'home/Index',
		name: 'home',
		meta: {
			layout: 'app-layout',
			activeNav: 'home',
			activeSubNav: '',
			requiresAuth: false,
		},
	},
	{
		path: '/about',
		component: 'about/Index',
		name: 'about',
		meta: {
			layout: 'app-layout',
			activeNav: 'home',
			activeSubNav: '',
			requiresAuth: false,
		},
	},
	{
		path: '*',
		component: 'error/404',
		name: '404',
		meta: {
			layout: 'error-layout',
			requiresAuth: false,
		},
	},
];

const routes = routerOptions.map(route => {
	return {
		...route,
		component: () => import(`@/views/${route.component}.vue`),
	}
});

export default routes;