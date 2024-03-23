<script setup>
import Header from "@/components/Header.vue";
</script>

<template>
  <Header />
  <div id="nav">
    <router-link to="/"></router-link> |
    <router-link to="/productDetail"></router-link>
  </div>
  <router-view />
  <main>
    <TheWelcome />
  </main>
</template>
