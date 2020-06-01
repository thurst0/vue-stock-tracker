import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import { getSession } from '../services/session';

Vue.use(VueRouter);

type CustomRouteConfig = RouteConfig & { loginRequired?: boolean };

const routes: Array<CustomRouteConfig> = [
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    loginRequired: true,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  const toRoute = routes.find(route => route.path == to.path);
  const session = await getSession();
  if (toRoute != null && toRoute.loginRequired == true && session == null) {
    return next('/login');
  }
  return next();
});

export default router;
