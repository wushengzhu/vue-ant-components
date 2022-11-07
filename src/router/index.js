import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,

  },
  {
    path: "/list",
    name: "list",
    component: () => import("@/views/TableList.vue")
  },
  {
    path: "/upload",
    name: "upload",
    component: () => import("@/views/UploadFile.vue")
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
