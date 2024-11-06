<template>
    <!-- 產品分類 -->
    <div class="d-flex gap-3 justify-content-center " role="group" aria-label="Basic radio toggle button group">
      <input type="radio" class="btn-check " name="btnradio" id="btnradio1" autocomplete="off" checked>
      <label class="btn btn-outline-primary px-4" for="btnradio1">全部</label>

      <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
      <label class="btn btn-outline-primary px-4" for="btnradio2">工具</label>

      <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
      <label class="btn btn-outline-primary px-4" for="btnradio3">毛線</label>

      <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off">
      <label class="btn btn-outline-primary px-4" for="btnradio4">課程</label>

      <input type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off">
      <label class="btn btn-outline-primary px-4" for="btnradio5">組合</label>

    </div>
    <Loading :active="isLoading" />
    <!-- 產品列表 -->
    <div class="container mx-auto">
      <div class="row mt-4 justify-content-center">

        <div class="col-md-3" v-for="item in products" :key="item.id">
          <div class="card border-0 mb-4 position-relative">
            <img :src="item.imageUrl" alt="產品圖片" style="width: 100%; height: 200px; object-fit: cover; 
            cursor: pointer;" 
            class="card-img-top rounded-2"
            @click="getProduct(item.id)">
            <div class="card-body p-0">
              <h5 class="mb-0 mt-3" 
                  style="cursor: pointer;"
                  @click="getProduct(item.id)">
                {{ item.title }}
              </h5>
              <!-- <p class="card-text text-muted mb-0">{{ item.description }}</p> -->
              <p class="text-muted mt-3" v-if="!item.price">NT${{ item.origin_price }} </p>
                <del class="text-muted mt-3" v-if="item.price">NT${{ item.origin_price }}</del>
                <h6 class="" v-if="item.price">特價 NT${{ item.price }}</h6>
              <button type="button" class="btn btn-primary btn-sm"
                      @click="addCart(item.id)"
                      :disabled="status.loadingItem === item.id">
                  <div v-if="status.loadingItem === item.id"
                  class="spinner-grow text-primary spinner-grow-sm" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                加到購物車
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const products = ref([]);
const product = ref({});
const status = ref({
        loadingItem: '',
      });

const isLoading = ref(false);

//所有產品
const getProducts = async() => {
    try{
        isLoading.value = true;
        const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/products/all`;
        const res = await axios.get(api);
        isLoading.value = false;
        products.value = res.data.products;
    }catch(error){
        console.error('Error during get products:', error);
    }
};
getProducts();

//單一產品
const getProduct = (id) => {
    router.push(`/user/product/${id}`);
};

//加入購物車
const addCart = async(id) => {
  try{
    status.value.loadingItem = id;
    const cart = {
      product_id : id,
      qty : 1
    }
    const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/cart`;
    const res = await axios.post(api, { data:cart });
    status.value.loadingItem = '';
    // console.log(res);
  }catch(error){
    console.error('Error during add to cart:', error);
  }
}

</script>