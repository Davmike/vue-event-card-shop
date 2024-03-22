import { createRouter, createWebHistory } from "vue-router";
import ProductList from "./views/ProductList.vue";
import ProductDetail from "./views/ProductDetail.vue";
import Cart from "./views/Cart.vue";
import Checkout from "./views/Checkout.vue";

const routes = [
  { path: "/", component: ProductList },
  { path: "/product/:id", component: ProductDetail },
  { path: "/cart", component: Cart },
  { path: "/checkout", component: Checkout },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
