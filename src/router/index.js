import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import NotFound from "../views/404.vue";
import Tour from "../views/Tour.vue";
import Admin from "../views/Admin/Admin.vue";
import AdminLogin from "../views/Admin/AdminLogin.vue";
import AuthGuard from "../guards/auth.guard";
import IsLoggedGuard from "../guards/isLogged.guard";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/tour/",
    name: "Tour",
    component: Tour,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/404",
    name: "NotFound",
    component: NotFound,
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

export default router;
