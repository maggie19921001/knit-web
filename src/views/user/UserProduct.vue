<template>
  <Loading :active="productStore.isLoading || cartStore.isLoading"></Loading>
  <div class="container">
    <div class="row justify-content-center align-items-center mt-5">
      <!--商品圖-->
      <div class="col-md-6">
        <img :src="product.imageUrl" 
        :alt="product.title" 
        style="width: 100%; height: 500px; object-fit: cover;" 
        class="img-fluid mb-3 rounded">
      </div>
      <!--內容-->
      <div class="col-md-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-white px-0 mb-0 py-3">
            <li class="breadcrumb-item"><router-link to="/user/shop">Shop</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
          </ol>
        </nav>
        <h2 class="fw-bold h1 mb-1">{{ product.title }}</h2>

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
                        :disabled="cartStore.isLoading"
                        @click="quantity > 1 ? quantity-- : quantity">
                  <i class="bi bi-dash-lg"></i>
                </button>
              </div>
              <input type="text" 
              v-model.number="quantity"
              :disabled="cartStore.isLoading"
              class="form-control border-0 text-center my-auto shadow-none bg-light">
              <div class="input-group-append">
                <button class="btn btn-outline-dark border-0 py-2" 
                        type="button" 
                        id="button-addon2"
                        :disabled="cartStore.isLoading"
                        @click="quantity++">
                  <i class="bi bi-plus-lg"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="col-6">
            <button type="button" 
                    class="text-nowrap btn btn-dark w-100 py-2"
                    :disabled="cartStore.isLoading"
                    @click="handleAddToCart(product.id)">
              {{ cartStore.status.loadingItem === product.id ? '加入中...' : '加入購物車' }}
            </button>
          </div>
        </div>
      </div>
      <!-- 手風琴資訊 -->
      <div class="accordion col-md-11 my-5" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              # 產品特性
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <code>因螢幕顯示不同，實物顏色可能與照片略有差異。</code>
              <br>
              <strong>材質說明：</strong> 列出產品的編織材料（如毛線材質、厚度、觸感），並提醒購買者該材質的特性，例如是否容易起毛球、變形等。
              <br>
              <strong>尺寸測量方式：</strong>說明如何正確測量商品的尺寸，如帽子的周長或圍巾的長寬，並提供穿搭建議。
              <br>
              <strong>適用場合與季節：</strong>建議商品適合的季節或場合（例如冬季或休閒場合）。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              # 使用與保養
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>清洗方式：</strong> 提供清洗和保養建議，避免損壞編織產品，例如毛線商品通常需手洗或低溫洗滌。
              <br>
              <strong>特殊編織工法：</strong>介紹商品是否使用特殊編織技術，並提醒在使用或保養時需注意的細節。
              <br>
              <strong>過敏提醒：</strong>材料包含容易引起過敏的成分（如羊毛），提醒敏感膚質的購買者注意。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              # 購買與售後服務
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>手工製作時間：</strong> 若為手工製作，提供大約的製作時間，並說明每件商品可能有些微差異。
              <br>
              <strong>保固及維修：</strong> 說明是否提供保固或維修服務，以及聯繫方式。
              <br>
              <strong>退換貨政策：</strong> 說明是否接受退換貨及其條件，例如需保持原包裝、未使用等。
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useCounterStore } from "@/stores/counter";
import { useProductStore } from "@/stores/productStore";
import { useCartStore } from "@/stores/cartStore";

const router = useRouter();
const route = useRoute();
const counterStore = useCounterStore();
const productStore = useProductStore();
const cartStore = useCartStore();

const product = ref({});
const quantity = ref(1);

// 取得單一產品資訊
const getProduct = async () => {
  try {
      const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/product/${route.params.productId}`;
      const res = await axios.get(api);
      product.value = res.data.product;
  } catch(error) {
      console.error('Error fetching product:', error);
      counterStore.pushMessageState({
          data: { message: '無法取得產品資訊' },
          success: false
      });
  }
}

// 處理加入購物車
const handleAddToCart = async (productId) => {
try {
  await cartStore.addToCart(productId, 1);
} catch (error) {
  console.error('Error adding to cart:', error);
}
};

onMounted(() => {
  getProduct();
});
</script>