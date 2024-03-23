<script setup>
import Header from "@/components/Header.vue";
</script>

<template>
  <Header />
  <div id="nav">
    <router-link to="/">ProductList</router-link> |
    <router-link to="/productDetail">ProductDetail</router-link>
  </div>
  <router-view />
  <main>
    <TheWelcome />
  </main>
</template>
