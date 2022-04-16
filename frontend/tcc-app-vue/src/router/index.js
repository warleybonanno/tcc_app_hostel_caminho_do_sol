import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../components/auth-components/login/LoginComponent.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../components/auth-components/home/HomeComponent.vue'),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../components/auth-components/register/RegisterComponent.vue'),
  },
  {
    path: '/createItinerary',
    name: 'createItinerary',
    component: () => import('../components/itinerary-components/CreateItinerary/CreateItineraryComponent.vue'),
    meta: {
      requireAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// ==> Treatment to avoid storing the token in LocalStorage
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/',
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

// ==> Logic referring to nprogress
router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  NProgress.done();
});

export default router;
