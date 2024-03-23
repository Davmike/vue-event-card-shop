<template>
  <div>
    <h1 class="text-white text-4xl text-center mt-10">
      Unlock Every Experience. Shop Cards, Join Events.
    </h1>
    <div class="grid-container mt-10 px-20 pb-20">
      <div
        v-for="(card, index) in filteredCards"
        :key="index"
        class="border border-gray-300 rounded-lg p-6"
      >
        <img
          :src="card.photo"
          class="w-full rounded-lg mb-4"
          :alt="card.name"
        />
        <div class="text-left">
          <h3 class="text-white text-lg font-bold mb-2 uppercase">
            {{ card.name }}
          </h3>
          <p class="card-details text-gray-600 text-sm">
            {{ card.date }} - {{ card.time }}
          </p>
          <h2 class="text-white text-2xl mt-2">{{ card.title }}</h2>
          <div class="flex justify-center items-center mt-2">
            <button
              class="text-white px-4 py-2 border border-white rounded outline-none hover:bg-white hover:text-black"
            >
              BUY NOW - <span>${{ card.price }}</span>
            </button>
            <div
              class="ml-auto mr-4 cursor-pointer hover:scale-90 transition-transform"
              @click="navigateToProductDetail(card.name)"
            >
              <p class="text-white font-light text-sm">More Info</p>
              <hr class="h-1 w-12 bg-white mt-1" />
            </div>
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
      selectedCategories: [],
    };
  },
  computed: {
    filteredCards() {
      if (this.selectedCategories.length === 0) {
        return this.data.cards;
      } else {
        return this.data.cards.filter((card) =>
          card.categories.some((category) =>
            this.selectedCategories.includes(category)
          )
        );
      }
    },
  },
  methods: {
    navigateToProductDetail(cardName) {
      // Pass the selected category as a query parameter
      this.$router.push({
        path: "/productDetail",
        query: { name: cardName, selectedCategory: this.selectedCategories },
      });
    },
    handleButtonClick(category) {
      if (this.selectedCategories.includes(category)) {
        this.selectedCategories = this.selectedCategories.filter(
          (value) => value !== category
        );
      } else {
        this.selectedCategories.push(category);
      }
    },
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
