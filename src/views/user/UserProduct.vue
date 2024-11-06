<template>
    <!-- 商品詳細頁 -->
    <Loading :active="isLoading"></Loading>
    <div class="container">
      <div class="row justify-content-center align-items-center mt-5">
        <!--商品圖-->
        <div class="col-md-6">
          <img :src="product.imageUrl" 
          alt="產品圖片" 
          style="width: 100%; height: 500px; object-fit: cover;" 
          class="img-fluid mb-3">
        </div>
        <!--內容-->
        <div class="col-md-5">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-white px-0 mb-0 py-3">
              <li class="breadcrumb-item"><router-link to="/user/shop">Cart</router-link></li>
              <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
            </ol>
          </nav>
          <h2 class="fw-bold h1 mb-1">{{  product.title }}</h2>

          <p>{{ product.content }}</p>
          <p class="text-muted">{{ product.description }}</p>

          <p class="h4 fw-bold text-end" v-if="!product.price">NT${{ product.origin_price }} </p>
          <p class="mb-0 text-muted text-end" v-if="product.price"><del>NT${{ product.origin_price }} </del></p>
          <p class="h4 fw-bold text-end" v-if="product.price">NT${{ product.price }}</p>

          <div class="row align-items-center">
            <div class="col-6">
              <div class="input-group my-3 bg-light rounded">
                <div class="input-group-prepend">

                  <button class="btn btn-outline-dark border-0 py-2" 
                          type="button" 
                          id="button-addon1"
                          @click="quantity > 1 ? quantity-- : quantity">
                    <i class="bi bi-dash-lg"></i>
                  </button>

                </div>
                <input type="text" 
                v-model="quantity"
                class="form-control border-0 text-center my-auto shadow-none bg-light" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value="1">
                <div class="input-group-append">

                  <button class="btn btn-outline-dark border-0 py-2" 
                          type="button" 
                          id="button-addon2"
                          @click="quantity++">
                    <i class="bi bi-plus-lg"></i>
                  </button>

                </div>
              </div>
            </div>
            <div class="col-6">
              <button type="button" class="text-nowrap btn btn-dark w-100 py-2"
              @click="addToCart(product.id,quantity)"
              >加入購物車</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useCounterStore } from "@/stores/counter";
const  countStore = useCounterStore();
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

const product = ref({});
const id = ref('');
const isLoading = ref(false);

const quantity = ref(1);

const getProduct = async() => {
    try{
        isLoading.value = true;
        const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/product/${id.value}`;
        const res = await axios.get(api);
        isLoading.value = false;
        product.value = res.data.product;
    }catch(error){
        console.error('Error during get product:', error);
    }
}


const addToCart = async(id, qty) => {
    try{
        isLoading.value = true;
        const cart = {
            product_id: id,
            qty,
        };
        const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/cart`;
        const res = await axios.post(api, { data:cart });
        isLoading.value = false;
        countStore.pushMessageState(res, '加入購物車');
        router.push('/user/shop');
    }catch(error){
        console.error('Error during add to cart:', error);
    }

}

const swiperOptions = {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: { clickable: true },
  navigation: true,
  loop: true,
};

onMounted(() => {
    id.value = route.params.productId; // 從路由參數中獲取 productId
    getProduct(); // 取得產品資訊
});

</script>