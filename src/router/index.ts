import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/home/Home.vue";
import Tasks from "../components/tasks/Tasks.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Home },
    { path: "/home", component: Home },
    { path: "/tasks", component: Tasks },
  ],
});

export default router;
