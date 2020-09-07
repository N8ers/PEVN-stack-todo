import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Auth from "../components/Auth.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: (to, from, next) => {
      const { email, id, name } = store.state.auth.user;
      const token = localStorage.getItem("token");
      if (email && id && name && token) {
        next();
      }
    }
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
