<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

// Import images
import cardShopImage from "../../public/assets/icon-card.png";
import cartShopImage from "../../public/assets/icon-cart.png";
import trash from "../../public/assets/trash.png";
import plus from "../../public/assets/plus.png";
import minus from "../../public/assets/minus.png";

const isCartVisible = ref(false);

const toggleCartVisibility = () => {
  isCartVisible.value = !isCartVisible.value;
};

// Router
const router = useRouter();

const navigateToProductList = () => {
  router.push("/");
  isCartVisible.value = false;
};

const increment = () => {
  if (quantity.value >= 0) {
    quantity.value++;
  }
};

const decrement = () => {
  if (quantity.value > 0) {
    quantity.value--;
  }
};

const goToCheckout = () => {
  router.push({ name: "Checkout" });
  isCartVisible.value = false;
};

const resetQuantity = () => {
  quantity.value = 0; // Reset quantity to 0
};
</script>
<script>
export const quantity = ref(1);
export const price = ref(9.5);
</script>

<template>
  <header
    class="border-[1px] px-[20px] py-[10px] flex justify-between items-center"
  >
    <div
      class="flex gap-[10px] items-center cursor-pointer"
      @click="navigateToProductList"
    >
      <img :src="cardShopImage" class="w-[50px] h-[50px]" alt="Card Shop" />
      <h3 class="text-[white]">Card Shop</h3>
    </div>
    <div class="flex gap-[10px] items-center">
      <img
        :src="cartShopImage"
        class="w-[50px] h-[50px] cursor-pointer"
        alt="Cart"
        @click="toggleCartVisibility"
      />
      <button
        class="border-[1px] px-[10px] py-[5px] text-[white] duration-500 rounded-[5px] outline-none hover:bg-[white] hover:text-[#04011d]"
        @click="navigateToProductList"
      >
        GALLERY
      </button>
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>

  <!-- Cart component -->
  <transition name="slide">
    <div
      v-if="isCartVisible"
      class="cart h-[256px] max-w-[360px] w-[100%] border-[1px] bg-[#04011d] rounded-[20px] flex absolute right-[80px] top-[80px] z-10 flex-row-reverse"
    >
      <div className="px-[24px] pt-[24px] pb-[32px]">
        <div className="flex">
          <div className="flex flex-col ml-[16px]">
            <p className="text-[white] text-[16px] font-normal cart-text">
              You Just Experienced the Best Card Event Ever!
            </p>
            <div className="flex flex-row mt-[10px]">
              <p className="text-[white] text-[16px] font-normal">
                {{ quantity }}
              </p>
              <p class="font-kumbh-sans text-[white]">x</p>
              <p class="font-kumbh-sans text-[white]">{{ price }}</p>
              <p class="text-[white] text-[16px] font-bold ml-[5px]">
                ${{ quantity * price }}
              </p>
            </div>
            <div class="button-div flex justify-center items-center">
              <button
                class="equal-cart h-[30px] w-[100px] border-[1px] rounded-[10px] mt-[24px] text-[white] text-[16px] font-bold flex justify-between items-center px-[5px]"
              >
                <img
                  :src="minus"
                  class="w-[20px] h-[20px]"
                  alt=""
                  @click="decrement"
                />
                {{ quantity }}
                <img
                  :src="plus"
                  class="w-[20px] h-[20px]"
                  alt=""
                  @click="increment"
                />
              </button>
              <img
                @click="resetQuantity"
                className="absolute right-[8%] top-[42%] cursor-pointer trash"
                :src="trash"
                alt=""
              />
            </div>
          </div>
        </div>
        <button
          className="cart-button h-[56px] w-[312px] border-[1px] rounded-[10px] mt-[24px] text-[white] text-[16px] font-bold cursor-pointer hover:scale-90 transition-transform hover:bg-white hover:text-black"
          @click="goToCheckout"
        >
          Checkout
        </button>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.cart {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

@media screen and (max-width: 450px) {
  .cart {
    max-width: 285px;
  }
  .cart-text {
    text-align: center;
  }
  .cart-button {
    width: 230px;
  }
  .equal-cart {
    width: 90px;
  }
  .trash {
    top: 52%;
  }
}
</style>
