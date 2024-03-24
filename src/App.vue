<script setup>
import { ref, onMounted } from "vue";
import Header from "@/components/Header.vue";

const isCartVisible = ref(false);

onMounted(() => {
  isCartVisible.value = true;
});
</script>

<template>
  <div>
    <Header />
    <div id="nav">
      <router-link to="/"></router-link> |
      <router-link to="/productDetail"></router-link>
      <router-link to="/checkout"></router-link>
    </div>
    <router-view />
    <main>
      <TheWelcome />
    </main>
    <Cart v-if="isCartVisible" />
  </div>
</template>
