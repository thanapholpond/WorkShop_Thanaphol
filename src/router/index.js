import Vue from "vue";
import Router from "vue-router";

import home from "../components/HelloWorld.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("../components/HelloWorld.vue")
    },
    {
      path: "/page2",
      component: () => import("../components/page2.vue")
    },
    {
      path: "/page3",
      component: () => import("../components/page3.vue")
    }
  ]
});
