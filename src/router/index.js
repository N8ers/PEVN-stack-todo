import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Auth from "../components/Auth.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
