<script setup>
import cardShopImage from "@/assets/icon-card.png";
import cartShopImage from "@/assets/icon-cart.png";
</script>

<template>
  <header
    class="border-[1px] px-[20px] py-[10px] flex justify-between items-center"
  >
    <div class="flex gap-[10px] items-center">
      <img :src="cardShopImage" class="w-[50px] h-[50px]" alt="" />
      <h3 class="text-[white]">Card Shop</h3>
    </div>
    <div class="flex gap-[10px] items-center">
      <img
        :src="cartShopImage"
        class="w-[50px] h-[50px] cursor-pointer"
        alt=""
      />
      <button
        class="border-[1px] px-[10px] py-[5px] text-[white] duration-500 rounded-[5px] outline-none hover:bg-[white] hover:text-[#04011d]"
      >
        GALLERY
      </button>
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>
