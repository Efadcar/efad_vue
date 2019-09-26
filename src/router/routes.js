
// initialize routes for the whole application
const routerOptions = [
	{
		path: process.env.VUE_APP_PUBLIC_PATH+'/',
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
		path: process.env.VUE_APP_PUBLIC_PATH+'/about',
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
		path: process.env.VUE_APP_PUBLIC_PATH+'/booking/new/:id',
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
		path: process.env.VUE_APP_PUBLIC_PATH+'/booking/pay',
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
		path: process.env.VUE_APP_PUBLIC_PATH+'/booking/subscribe',
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
		path: process.env.VUE_APP_PUBLIC_PATH+'/booking/subscribe-b',
		component: 'booking/subscribe-b',
		name: 'subscribeBookings',
		meta: {
			layout: 'app-layout',
			activeNav: 'subscribeBookings',
			activeSubNav: '',
			requiresAuth: true,
		},
	},
	{
		path: process.env.VUE_APP_PUBLIC_PATH+'/profile',
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
		path: process.env.VUE_APP_PUBLIC_PATH+'/bookings/:id',
		component: 'profile/bookings',
		name: 'bookings',
		meta: {
			layout: 'app-layout',
			activeNav: 'bookings',
			activeSubNav: '',
			requiresAuth: true,
		},
	},
	{
		path: process.env.VUE_APP_PUBLIC_PATH+'/faqs',
		component: 'faqs/index',
		name: 'faqs',
		meta: {
			layout: 'app-layout',
			activeNav: 'faqs',
			activeSubNav: '',
			requiresAuth: true,
		},
	},
	{
		path: process.env.VUE_APP_PUBLIC_PATH+'/terms-of-use',
		component: 'terms/index',
		name: 'terms',
		meta: {
			layout: 'app-layout',
			activeNav: 'terms',
			activeSubNav: '',
			requiresAuth: true,
		},
	},
	{
		path: process.env.VUE_APP_PUBLIC_PATH+'/privacy-policy',
		component: 'terms/privacy',
		name: 'privacy',
		meta: {
			layout: 'app-layout',
			activeNav: 'privacy',
			activeSubNav: '',
			requiresAuth: true,
		},
	},
	{
		path: process.env.VUE_APP_PUBLIC_PATH+'/branches',
		component: 'branches/index',
		name: 'branches',
		meta: {
			layout: 'app-layout',
			activeNav: 'branches',
			activeSubNav: '',
			requiresAuth: true,
		},
	},
	{
		path: process.env.VUE_APP_PUBLIC_PATH+'*',
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