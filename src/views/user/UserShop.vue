<template>
  <!-- 產品分類 Tab -->
  <div class="d-flex gap-3 justify-content-center my-5" role="group" aria-label="Basic radio toggle button group">
    <template v-for="(label, index) in tabOptions" :key="index">
      <input :id="'btnradio' + (index + 1)" type="radio" class="btn-check" name="btnradio" autocomplete="off" :checked="index === 0">
      <label class="btn btn-outline-primary px-4" 
             :for="'btnradio' + (index + 1)"
             @click="changeTab(label)" 
             :class="{'active': tabID === label}">
        {{ label }}
      </label>
    </template>
  </div>

  <Loading :active="productStore.isLoading || cartStore.isLoading" />
  
  <!-- 產品列表 -->
  <div class="container mx-auto">
    <div class="row mt-4">
      <div class="col-md-4 col-sm-6" 
           v-for="item in paginatedProducts" 
           :key="item.id">
        <div class="card border-0 mb-4 position-relative">
          <img :src="item.imageUrl" 
               alt="產品圖片" 
               class="card-img-top rounded-2"
               style="width: 100%; height: 300px; object-fit: cover; cursor: pointer;" 
               @click="goToProduct(item.id)">
          <div class="card-body p-0">
            <h5 class="mb-0 mt-3" 
                style="cursor: pointer;"
                @click="goToProduct(item.id)">
              {{ item.title }}
            </h5>
            <p class="text-muted mt-3" v-if="!item.price">NT${{ item.origin_price }} </p>
            <del class="text-muted mt-3" v-if="item.price">NT${{ item.origin_price }}</del>
            <h6 class="" v-if="item.price">特價 NT${{ item.price }}</h6>
            <button type="button" 
                    class="btn btn-primary btn-sm"
                    @click="handleAddToCart(item.id)"
                    :disabled="cartStore.status.loadingItem === item.id">
              <div v-if="cartStore.status.loadingItem === item.id"
                   class="spinner-border text-primary spinner-border-sm text-light" 
                   role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 分頁導航 -->
  <div v-if="filterProducts.length > 0" class="d-flex justify-content-center mt-4">
    <nav aria-label="Product pagination">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <button class="btn page-link rounded-0 rounded-start-2" 
                  @click="changePage(currentPage - 1)" 
                  :disabled="currentPage === 1">
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        
        <li v-for="page in totalPages" 
            :key="page" 
            class="page-item"
            :class="{ active: page === currentPage }">
          <button class="btn page-link rounded-0" @click="changePage(page)">
            {{ page }}
          </button>
        </li>
        
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <button class="btn page-link rounded-0 rounded-end-2" 
                  @click="changePage(currentPage + 1)" 
                  :disabled="currentPage === totalPages">
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  </div>

  <div v-if="filterProducts.length === 0" class="text-center mt-5">
    <p class="text-muted">該分類下目前沒有產品。</p>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useProductStore } from '@/stores/productStore';
import { useCartStore } from '@/stores/cartStore';

const router = useRouter();
const productStore = useProductStore();
const cartStore = useCartStore();

// Tab 相關
const tabOptions = ['全部', '工具', '毛線', '課程', '組合'];
const tabID = ref('全部');
const changeTab = (id) => {
tabID.value = id;
};

// 產品導航
const goToProduct = (id) => {
router.push(`/user/product/${id}`);
};

// 加入購物車
const handleAddToCart = async (productId) => {
try {
  await cartStore.addToCart(productId, 1);
} catch (error) {
  console.error('Error adding to cart:', error);
}
};

// 產品過濾
const filterProducts = computed(() => {
if (tabID.value === '全部') {
  return productStore.products;
}
return productStore.products.filter(
  (product) => product.category.includes(tabID.value)
);
});

// 分頁相關
const currentPage = ref(1);
const itemsPerPage = ref(9);

const paginatedProducts = computed(() => {
const startIndex = (currentPage.value - 1) * itemsPerPage.value;
const endIndex = startIndex + itemsPerPage.value;
return filterProducts.value.slice(startIndex, endIndex);
});

const totalPages = computed(() => {
return Math.ceil(filterProducts.value.length / itemsPerPage.value);
});

const changePage = (page) => {
if (page >= 1 && page <= totalPages.value) {
  currentPage.value = page;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
};

// 監聽分類變化，重置頁碼
watch(tabID, () => {
currentPage.value = 1;
});

// 初始化
onMounted(() => {
productStore.getProducts();
});
</script>

<style scoped>
.page-item.active .page-link {
background-color: #3F6B96;
border-color: #3F6B96;
color: white;
}

.page-link:focus {
box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.page-item.disabled .page-link {
color: #6c757d;
pointer-events: none;
background-color: #fff;
border-color: #dee2e6;
}
</style>