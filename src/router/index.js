import * as vueRouter from "vue-router";

export const constantRoutes = [
  {
    path: "/",
    redirect: "/login",
    meta: {}
  },
  {
    path: "/login",
    component: () => import("../pages/login/index.vue"),
    meta: {},
  },
  {
    path: "/home",
    component: () => import("../pages/home/index.vue"),
    meta: {}
  },
  {
    path: "/table",
    component: () => import("../pages/home/table.vue"),
    meta: {}
  },
  // {
  //   path: "/404",
  //   name: "404",
  //   component: () => import("@/views/404"),
  //   hidden: true,
  //   meta: {}
  // }
];
const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(),
  routes: constantRoutes
});
// router.beforeEach((to, from, next) => {
//   console.log('to', to.path);
//   console.log('from', from.path);
//   next();
// })

export function resetRouter() {
  location.reload();
}

export default router;
