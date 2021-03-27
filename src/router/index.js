import { createRouter, createWebHistory } from "vue-router";
import { trackRouter } from "vue-gtag-next";
import HomeEcuador from "../views/Ecuador/HomeEcuador.vue";
import HomeArgentina from "../views/Argentina/HomeArgentina.vue";
import Tour from "../views/Tour.vue";
import Landing from "../views/Landing.vue";
import Admin from "../views/Admin/Admin.vue";
import AdminLogin from "../views/Admin/AdminLogin.vue";
import AuthGuard from "../guards/auth.guard";
import IsLoggedGuard from "../guards/isLogged.guard";

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/ecu",
    name: "HomeEcuador",
    component: HomeEcuador,
  },
  {
    path: "/arg",
    name: "HomeArgentina",
    component: HomeArgentina,
  },
  {
    path: "/tour/:id",
    name: "Tour",
    component: Tour,
    props: true,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    beforeEnter: AuthGuard,
    children: [
      {
        path: "",
        component: () => import("../views/Admin/AdminCategorias.vue"),
      },
      {
        path: "/admin/colecciones",
        component: () => import("../views/Admin/AdminColecciones.vue"),
      },
      {
        path: "/admin/tours",
        name: "tours",
        component: () => import("../views/Admin/AdminTours.vue"),
        props: true,
      },
      {
        path: "/admin/clientes",
        component: () => import("../views/Admin/AdminClientes.vue"),
      },
    ],
  },
  {
    path: "/admin/login",
    component: AdminLogin,
    beforeEnter: IsLoggedGuard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

trackRouter(router);

export default router;
