<template>
    <Loading :active="isLoading" />
    <div class="container">
      <div class="row mt-4">
        <div class="col-md-7">
          <table class="table align-middle">
            <thead>
            <tr>
              <th>圖片</th>
              <th>商品名稱</th>
              <th>價格</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in products" :key="item.id">
              <td style="width: 200px">
                <div style="height: 100px; background-size: cover; background-position: center"
                     :style="{backgroundImage: `url(${item.imageUrl})`}"></div>
              </td>
              <td><a href="#" class="text-dark">{{ item.title }}</a></td>
              <td>
                <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
                <del class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</del>
                <div class="h5" v-if="item.price">現在只要 {{ item.price }} 元</div>
              </td>
              <td>
                <div class="btn-group btn-group-sm">
                  <button type="button" class="btn btn-outline-secondary"
                          @click="getProduct(item.id)">
                    查看更多
                  </button>
                  <button type="button" class="btn btn-outline-danger"
                          >
                    加到購物車
                  </button>
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <!-- 購物車列表 -->
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
const status = {
        loadingItem: '',
      };

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
const getProduct = (id) =>{
    router.push(`/user/product/${id}`);
};


</script>