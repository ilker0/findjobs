import Vue from "vue";
import VueRouter from "vue-router";
import JobList from "../views/JobList";
import JobDetail from "../views/JobDetail";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "JobList",
    component: JobList,
  },
  {
    path: "/joblist",
    name: "JobList",
    component: JobList,
  },
  {
    path: "/jobdetail/:id",
    name: "JobDetail",
    component: JobDetail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
