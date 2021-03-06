import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Signin from "../components/Signin.vue";
import LedgerBoard from "../components/LedgerBoard.vue";
import Signup from "../components/Signup.vue";

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
    },
    {
        path: "/ledger",
        name: "ledger",
        component: LedgerBoard
    },
    {
        path: "/signup",
        name: "signup",
        component: Signup
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;