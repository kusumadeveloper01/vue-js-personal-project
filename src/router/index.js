import { createRouter, createWebHistory } from "vue-router";
import Product from "../views/Product.vue";
import Cart from "../views/Cart.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "product",
      component: Product,
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
  ],
});

export default router;
