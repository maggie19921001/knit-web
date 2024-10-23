<template>
    <Loading :active="isLoading"></Loading>
    <div class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/user/shop">Cart</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
        </ol>
      </nav>
      <div class="row justify-content-center">
        <article class="col-8">
          <h2>{{ product.title }}</h2>
          <div>{{ product.content }}</div>
          <div>{{ product.description }}</div>
          <img :src="product.imageUrl" alt="" class="img-fluid mb-3">
        </article>
        <div class="col-4">
          <div class="h5" v-if="!product.price">{{ product.origin_price }} 元</div>
          <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
          <div class="h5" v-if="product.price">現在只要 {{ product.price }} 元</div>
          <hr>
          <button type="button" class="btn btn-outline-danger"
                  @click="addToCart(product.id)">
            加到購物車
          </button>
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


const addToCart = async(id, qty = 1) => {
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
        console.log(res);
        router.push('/user/shop');
    }catch(error){
        console.error('Error during add to cart:', error);
    }

}

onMounted(() => {
    id.value = route.params.productId; // 從路由參數中獲取 productId
    getProduct(); // 取得產品資訊
});

</script>