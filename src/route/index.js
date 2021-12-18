import { createRouter, createWebHashHistory } from "vue-router";
export const routes = [
    { path: "/", redirect: "/home" },
    {
        path: "/home",
        name: "home",
        component: () => import("../views/Home.vue")
    }, {
        path: "/about",
        name: "about",
        component: () => import("../views/About.vue")
    }
]
export default createRouter({
    history: createWebHashHistory(),
    routes
})