import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/practice",
      name: "practice",
      component:() => import("../views/PracticeView.vue"),
    },
    {
      path: "/cicles",
      name: "cicles",
      component:() => import("../views/CiclesView.vue"),
    },
    {
      path: "/events",
      name: "events",
      component:() => import("../views/EventosView.vue"),
    },
    {
      path: "/reactive",
      name: "reactive",
      component:() => import("../views/ReactivoView.vue"),
    },
    {
      path: "/prUno",
      name: "prUno",
      component:() => import("../views/Practica1View.vue"),
    },
    {
      path: "/computed",
      name: "computed",
      component:() => import("../views/ComputadoView.vue"),
    },
    {
      path: "/prDos",
      name: "prDos",
      component:() => import("../views/Practica2View.vue"),
    },
  ],
});

export default router;
