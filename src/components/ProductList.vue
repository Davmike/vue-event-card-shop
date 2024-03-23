<template>
  <h1 class="text-[white] text-[40px] text-center mt-[50px]">
    "Unlock Every Experience. Shop Cards, Join Events."
  </h1>
  <div class="grid-container mt-[50px] px-[20px] pb-[50px]">
    <div
      v-for="(card, index) in data.cards"
      :key="index"
      class="border border-gray-300 rounded-lg p-6"
    >
      <img :src="card.photo" class="w-full rounded-lg mb-4" :alt="card.name" />
      <div class="text-left">
        <h3 class="text-white text-lg font-bold mb-2 uppercase">
          {{ card.name }}
        </h3>
        <p class="card-details text-gray-600 text-sm">
          {{ card.date }} - {{ card.time }}
        </p>
        <h2 class="text-white text-[32px] mt-[10px]">{{ card.title }}</h2>
        <div class="flex justify-center items-center mt-[10px]">
          <button
            class="text-[white] px-[10px] py-[8px] border-[1px] duration-500 rounded-[5px] outline-none hover:bg-[white] hover:text-[#04011d]"
          >
            BUY NOW -<span> ${{ card.price }}</span>
          </button>

          <div
            class="ml-auto mr-[15px] mb-[10px] cursor-pointer hover:scale-90 transition-transform"
          >
            <p class="text-[white] font-light text-[15px]">More Info</p>
            <hr class="h-[1px] w-[48px] bg-[white]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../../data.json";

export default {
  data() {
    return {
      data: data,
    };
  },
};
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  justify-items: center;
}
</style>
