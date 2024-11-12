<template>
    <!-- 產品分類 Tab -->
    <div class="d-flex gap-3 justify-content-center " role="group" aria-label="Basic radio toggle button group">
      <input type="radio" class="btn-check " name="btnradio" id="btnradio1" autocomplete="off" checked>
      <label class="btn btn-outline-primary px-4" for="btnradio1"
      @click="changeTab('全部')" :class="{'active': tabID=='全部'}">全部</label>

      <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
      <label class="btn btn-outline-primary px-4" for="btnradio2"
      @click="changeTab('工具')" :class="{'active': tabID=='工具'}">工具</label>

      <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
      <label class="btn btn-outline-primary px-4" for="btnradio3"
      @click="changeTab('毛線')" :class="{'active': tabID=='毛線'}">毛線</label>

      <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off">
      <label class="btn btn-outline-primary px-4" for="btnradio4"
      @click="changeTab('課程')" :class="{'active': tabID=='課程'}">課程</label>

      <input type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off">
      <label class="btn btn-outline-primary px-4" for="btnradio5"
      @click="changeTab('組合')" :class="{'active': tabID=='組合'}">組合</label>

    </div>
    <Loading :active="isLoading" />
    <!-- 產品列表 -->
    <div class="container mx-auto">
      <div class="row mt-4">
        <div class="col-md-3" v-for="item in filterProducts" :key="item.id">
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
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const products = ref([]);
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
        // console.log(res);
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

// //tab class切換
const tabID = ref('全部');
const changeTab = ((id)=>{
  tabID.value = id;
})

//監控所有待辦狀態變化，並依照分類顯示
const filterProducts = computed(()=>{
  if(tabID.value ==='工具'){
    return products.value.filter((product)=> /工具/.test(product.category) );
  }else if(tabID.value ==='毛線'){
    return products.value.filter((product)=> /毛線/.test(product.category));
  }else if(tabID.value ==='課程'){
    return products.value.filter((product)=> /課程/.test(product.category));
  }else if(tabID.value ==='組合'){
    return products.value.filter((product)=> /組合/.test(product.category));
  }else{
    return products.value.filter((product)=> /工具|毛線|課程|組合/.test(product.category));
  }
})

</script>