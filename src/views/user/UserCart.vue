<template>
  <!-- 購物車列表 -->
  <Loading :active="cartStore.isLoading"></Loading>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6 bg-white py-5" style="min-height: calc(100vh - 56px - 76px);">
        <div class="d-flex justify-content-between">
          <h2 class="mt-2">購物車 Cart Detail</h2>
        </div>
        <div class="d-flex mt-4" v-for=" item in cartStore.cart.carts" :key=" item.id ">
          <img :src="item.product.imageUrl" alt="" style="width: 120px; height: 120px; object-fit: cover;">
          <div class="w-100 p-3 position-relative">
            <!--刪除按鈕-->
            <button class="position-absolute border-0 rounded-5" 
            style="top: 16px; right: 16px;"
            @click="cartStore.removeFromCart(item)"><i class="bi bi-x-lg"></i></button>

            <p class="mb-0 fw-bold">{{ item.product.title }}</p>
            <p class="mb-1 text-muted" style="font-size: 14px;">{{ item.product.content }}</p>
            <div class="d-flex justify-content-between align-items-center w-100">
              <div class="input-group w-50 align-items-center">
                <!--增減按鈕-->
                <button class="btn input-group-prepend pe-1 border-0 py-2" 
                          type="button" 
                          id="button-addon1"
                          @click="() => {
                            if (item.qty > 1) {
                              item.qty--;
                              cartStore.updateCart(item);
                            }
                          }">
                  <i class="bi bi-dash-lg"></i>
                </button>

                <input type="text" class="form-control border-0 text-center my-auto shadow-none px-0" placeholder=""   aria-label="Example text with button addon" aria-describedby="button-addon1" value="1"
                    v-model.number="item.qty"
                    :disabled="cartStore.status.loadingItem === item.id"
                    @change="cartStore.updateCart(item)">

                  <button class="btn input-group-append ps-1 border-0 py-2" 
                          type="button" 
                          id="button-addon2"
                          @click="() => {
                            item.qty++;
                            cartStore.updateCart(item);
                          }">
                  <i class="bi bi-plus-lg"></i>
                  </button>  
              </div>
              <div class="text-end text-success">
                <small v-if="cartStore.cart.final_total !== cartStore.cart.total" class="text-success">折扣價：</small>
                NT${{ countStore.currency(item.final_total) }}
              </div>

            </div>
          </div>
        </div><!--v-for End-->
        <hr>
        <div class="d-flex flex-column justify-content-end p-3">
          <p class="text-end">總計 {{ countStore.currency(cartStore.cart.total) }}</p>
          <div v-if="cartStore.cart.total !== cartStore.cart.final_total">
            <p class="text-end text-success">折扣價{{ countStore.currency(cartStore.cart.final_total)}}</p>
          </div>
        </div>

          <div class="input-group mb-3 input-group-sm">
            <input type="text" class="form-control" placeholder="請輸入優惠碼" v-model="cartStore.coupon_code">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" @click="cartStore.addCouponCode">
                套用優惠碼
              </button>
            </div>
          </div>
          <router-link to="/user/userform">
            <button class="btn btn-dark py-3 px-7 rounded-0">下一步</button>
          </router-link>
      </div>
    </div>
</div>
</template>

<script setup>
import { onMounted } from "vue";
import { useCounterStore } from "@/stores/counter";
const  countStore = useCounterStore();

import { useCartStore } from '@/stores/cartStore';
const cartStore = useCartStore();

onMounted(() => {
  cartStore.getCart();
})
</script>