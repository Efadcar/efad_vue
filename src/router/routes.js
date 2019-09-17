
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
		path: '/booking/new',
		component: 'booking/new',
		name: 'newBooking',
		meta: {
			layout: 'app-layout',
			activeNav: 'newBooking',
			activeSubNav: '',
			requiresAuth: false,
		},
	},
	{
		path: '/booking/pay',
		component: 'booking/pay',
		name: 'payBooking',
		meta: {
			layout: 'app-layout',
			activeNav: 'payBooking',
			activeSubNav: '',
			requiresAuth: true,
		},
	},
	{
		path: '/booking/subscribe',
		component: 'booking/subscribe',
		name: 'subscribeBooking',
		meta: {
			layout: 'app-layout',
			activeNav: 'subscribeBooking',
			activeSubNav: '',
			requiresAuth: true,
		},
	},
	{
		path: '/profile',
		component: 'profile/index',
		name: 'profile',
		meta: {
			layout: 'app-layout',
			activeNav: 'profile',
			activeSubNav: '',
			requiresAuth: true,
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