import { createRouter, createWebHistory } from "vue-router";
import AdminLogin from "../views/AdminLogin.vue";
import UserLayout from "../layouts/UserLayout.vue";
import AdminLayout from "../layouts/AdminLayout.vue";
import Product from "../views/Product.vue";
import Cart from "../views/Cart.vue";
import Checkout from "../views/Checkout.vue";
import CreateProduct from "../views/Panel.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/admin/login",
      name: "admin-login",
      component: AdminLogin,
    },
    {
      path: "/",
      name: "user-layout",
      component: UserLayout,
      children: [
        { path: "/", component: Product },
        { path: "cart", component: Cart },
        { name: "checkout", path: "checkout/:id", component: Checkout },
      ],
    },
    {
      path: "/admin",
      name: "admin-layout",
      component: AdminLayout,
    },
  ],
});

export default router;
