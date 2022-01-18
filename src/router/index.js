import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
//import About from '../views/About.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/about",
        name: "About",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
      },
      {
        path: "/register",
        name: "Register",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Register.vue"),
      },
      {
        path: "/",
        name: "Dashboard",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Dashboard.vue"),
      },
      {
        path: "/members",
        name: "Members",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Members.vue"),
      },
      {
        path: "/admins",
        name: "Admins",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Admins.vue"),
      },
    ],
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
