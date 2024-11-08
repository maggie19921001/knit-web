<template>
  <!-- 購物車列表 -->
  <Loading :active="isLoading"></Loading>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6 bg-white py-5" style="min-height: calc(100vh - 56px - 76px);">
        <div class="d-flex justify-content-between">
          <h2 class="mt-2">購物車 Cart Detail</h2>
        </div>
        <div class="d-flex mt-4" v-for=" item in cart.carts" :key=" item.id ">
          <img :src="item.product.imageUrl" alt="" style="width: 120px; height: 120px; object-fit: cover;">
          <div class="w-100 p-3 position-relative">
            <!--刪除按鈕-->
            <button class="position-absolute border-0 rounded-5" 
            style="top: 16px; right: 16px;"
            @click="removeFromCart(item)"><i class="bi bi-x-lg"></i></button>

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
                              updateCart(item);
                            }
                          }">
                  <i class="bi bi-dash-lg"></i>
                </button>

                <input type="text" class="form-control border-0 text-center my-auto shadow-none px-0" placeholder=""   aria-label="Example text with button addon" aria-describedby="button-addon1" value="1"
                    v-model.number="item.qty"
                    :disabled="status.loadingItem === item.id"
                    @change="updateCart(item)">

                  <button class="btn input-group-append ps-1 border-0 py-2" 
                          type="button" 
                          id="button-addon2"
                          @click="() => {
                            item.qty++;
                            updateCart(item);
                          }">
                  <i class="bi bi-plus-lg"></i>
                  </button>  
              </div>
              <div class="text-end text-success">
                <small v-if="cart.final_total !== cart.total" class="text-success">折扣價：</small>
                NT${{ countStore.currency(item.final_total) }}
              </div>

            </div>
          </div>
        </div><!--v-for End-->
        <hr>
        <div class="d-flex flex-column justify-content-end p-3">
          <p class="text-end">總計 {{ countStore.currency(cart.total) }}</p>
          <div v-if="cart.total !== cart.final_total">
            <p class="text-end text-success">折扣價{{ countStore.currency(cart.final_total)}}</p>
          </div>
        </div>

          <div class="input-group mb-3 input-group-sm">
            <input type="text" class="form-control" placeholder="請輸入優惠碼" v-model="coupon_code">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
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
import axios from "axios";
import { ref, onMounted } from "vue";
import { useCounterStore } from "@/stores/counter";
const  countStore = useCounterStore();

const isLoading = ref(false);
const cart = ref({});
const coupon_code = ref('');
const status = ref({
        loadingItem: '',
      });

const getCart = async() => {
  try{
    isLoading.value = true;
    const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/cart`;
    const res = await axios.get(api);
    isLoading.value = false;
    cart.value = res.data.data;
    // console.log(res);
  }catch(error){
    console.error('Error during get cart:', error);
  }
}

const updateCart = async(item) => {
  try{
    status.value.loadingItem = item.id;
    isLoading.value = true;
    const cart = {
      product_id: item.product_id,
      qty: item.qty
    }
    const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/cart/${item.id}`;
    const res = await axios.put(api, { data:cart });
    isLoading.value = false;
    status.value.loadingItem = '';
    // console.log(res);
    getCart();
  }catch(error){
    console.error('Error during update cart:', error);
  }
}

const removeFromCart = async(item) =>{
  try{
    isLoading.value = true;
    const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/cart/${item.id}`;
    const res = await axios.delete(api);
    isLoading.value = false;
    getCart();
  }catch(error){
    console.error('Error during remove from cart:', error);
  }
}


const addCouponCode = async() => {
  try{
    isLoading.value = true;
    const coupon = {
      code:coupon_code.value
    }
    // console.log(coupon);
    const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/coupon`;
    const res = await axios.post(api, { data:coupon });
    isLoading.value = false;
    getCart();
    countStore.pushMessageState(res, '套用優惠券');
  }catch(error){
    console.error('Error during add coupon code:', error);
  }
}

onMounted(() => {
  getCart();
})
</script>