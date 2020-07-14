import Vue from "vue";
import Router from "vue-router";

// In this PoC I'm not using lazy-load components, due performance issues running it under codesandbox
//const Home = () => import("./views/Home.vue");
//const Play = () => import("./views/Play.vue");
import Home from "@/views/Home";
import Play from "@/views/Play";

Vue.use(Router);

const siteTitle = "Nonograms";
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { title: "Home" }
    },
    {
      path: "/play/:id",
      name: "play",
      component: Play,
      props: true,
      meta: { title: "You can do it!" }
    }
  ]
});

router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title =
      (!to.meta || !to.meta.title ? "" : to.meta.title + " - ") + siteTitle;
  });
});

export default router;
