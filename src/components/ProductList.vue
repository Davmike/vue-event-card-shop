<script>
import redBull from "@/assets/redbull.jpeg";
import data from "../../data.json";
export default {
  data() {
    return {
      redBull: redBull,
      filterCategory: "", // Initialize filterCategory
      data: {
        photos: [
          /* Your data structure */
        ],
      },
    };
  },
  computed: {
    filteredImages() {
      if (this.filterCategory) {
        const category = this.data.photos.find(
          (category) => category.category === this.filterCategory
        );
        return category ? category.images : [];
      } else {
        return this.data.photos.flatMap((category) => category.images);
      }
    },
  },
};
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div
      class="mt-[16px] flex justify-center items-center flex-col gap-[16px] border-[1px] rounded-[10px] w-[375px] h-[auto]"
    >
      <img
        :src="redBull"
        class="w-[400px] rounded-[10px]"
        alt="components image"
      />
      <div class="mt-[20px] pb-[20px] text-center">
        <h3 class="text-white text-[16px] font-medium">Red Bull Event</h3>
        <p class="text-[#85858D] text-[12px] font-normal mt-[8px]">
          20.02.24 - 20:00
        </p>
        <h2
          class="text-white w-[720px] text-[32px] leading-10 font-medium mt-[16px]"
        >
          Welcome And Fly!
        </h2>
      </div>
    </div>
  </div>
</template>
