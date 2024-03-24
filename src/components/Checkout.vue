<script setup>
import purchase from "../../public/assets/buy.jpeg";
import { quantity } from "@/components/Header.vue";
import { price } from "@/components/Header.vue";
</script>

<template>
  <div class="flex justify-center item-center flex-col">
    <h1 class="text-white text-4xl text-center mt-10 px-[20px]">
      You Just Experienced the Best Card Event Ever!
    </h1>
    <div class="grid-container mt-10 px-20 pb-20">
      <div
        class="border border-gray-300 rounded-lg p-6 flex justify-center items-center max-w-[500px] m-auto"
      >
        <img :src="purchase" class="w-full rounded-lg mb-4" />
      </div>
      <div class="flex justify-center items-center mt-[20px] flex-col">
        <p class="text-[white] text-[35px] text-event">
          YOU SEND IT!<span> - {{ quantity }} EVENT CARDS</span>
        </p>
        <p class="text-[white] text-[35px] text">
          TOTAL: {{ quantity * price }}$
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 560px) {
  .text {
    font-size: 20px; /* Decrease font size for smaller screens */
  }

  .text-event {
    font-size: 15px;
  }
}
</style>
