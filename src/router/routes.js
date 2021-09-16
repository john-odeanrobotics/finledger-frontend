import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Signin from "../components/Signin.vue";

Vue.use(VueRouter);
const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/signin",
        name: "signin",
        component: Signin
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;