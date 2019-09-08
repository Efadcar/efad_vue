import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes.js';
import Guards from '../guards/index.js';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
});

/*
  Apply application middlewares (Guards)
*/
// Avoid login if user already logged in or registered
// Guards.redirectIfAuthenticated(router);
// Authentication guard
// Guards.auth(router);
// User role guard
// Guards.role(router);


export default router;