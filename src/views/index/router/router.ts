const importComponent = require('./_import_' + process.env.NODE_ENV);

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: importComponent('home/Home'),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../home/About.vue'),
  },
  {
    path: '/404',
    name: 'notFound',
    component: () => import(/* webpackChunkName: "notFound" */ '@/components/NotFound.vue'),
  },
  {
    path: '*',
    redirect: {
      path: '/404',
    },
  }
];

export default routes;
