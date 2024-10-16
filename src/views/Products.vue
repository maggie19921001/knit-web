<template>
  <div class="text-end">
    <button class="btn btn-primary" type="button" @click="openProductModal(true)">
      增加一個產品
    </button>
  </div>
  <table class="table mt-4">
    <thead>
        <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
        </tr>
    </thead>
  <tbody v-for="item in products" :key="item.id">
    <tr>
      <td>{{item.category}}</td>
      <td>{{item.title}}</td>
      <td class="text-right">
        {{item.origin_price}}
      </td>
      <td class="text-right">
        {{item.price}}
      </td>
      <td>
        <span class="text-success" v-if="item.is_enabled">啟用</span>
        <span class="text-muted" v-else>未啟用</span>
      </td>
      <td>
        <div class="btn-group">
          <button class="btn btn-outline-primary btn-sm" @click="openProductModal(false, item)">編輯</button>
          <button class="btn btn-outline-danger btn-sm" @click="openDelProductModal(item)">刪除</button>
        </div>
      </td>
    </tr>
  </tbody>
</table>
<ProductModal ref="productModal" v-bind:product="tempProduct" 
@update-product="updateProduct"/>
<DelModal :item="tempProduct" ref="delModal" @del-item="delProduct"/>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import ProductModal from '../components/ProductModal.vue';
import DelModal from '../components/DeleteModal.vue';

const products = ref([]);
const pagination = ref({});
const productModal = ref(null);
const delModal = ref(null);

const tempProduct = ref({});// 用於傳遞給子組件的臨時產品數據
const isNew = ref(false);

//取得產品列表
const getProducts = async()=>{
    try {
    const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/products`;
    const res = await axios.get(api);
    products.value =res.data.products;
    pagination.value =res.data.pagination;
    
  } catch (error) {
    console.error('Error during sign in:', error);
  }
};
getProducts();

// 開啟 Modal 時清空臨時產品數據
const openProductModal = ( newStatus, item ) => {
  if (newStatus) {
    tempProduct.value = {};
  } else {
    tempProduct.value = {...item};
  }
  isNew.value = newStatus;
  productModal.value.showModal()
}

// 接收子組件傳回的產品數據並更新
const updateProduct = async(item) => {
  try {
    let api = `${import.meta.env.VITE_APP_API}api/${import.meta.env. VITE_APP_PATH}/admin/product`;
    let httpMethod = 'post';  // 預設新增用 POST
    
    if(!isNew.value){
      api = `${import.meta.env.VITE_APP_API}api/${import.meta.env. VITE_APP_PATH}/admin/product/${item.id}`;
      httpMethod = 'put';
    }
    const res = await axios[httpMethod](api, { data: item });// 直接使用子組件傳回的數據

    // 如果成功，關閉 Modal 並重新獲取產品列表
    if(res.data.success) {
      productModal.value.hideModal();
      getProducts();
    }
  } catch (error) {
    console.error('Error during update product:', error);
  }
}

 // 開啟刪除 Modal
const openDelProductModal = (item) => {
  tempProduct.value = { ...item };
  delModal.value.showModal();
}

const delProduct = async() => {
  try {
    const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/product/${tempProduct.value.id}`;
    const res = await axios.delete(api);
    
    if(res.data.success) {
      delModal.value.hideModal();
      getProducts();
    }
  } catch (error) {
    console.error('Error during delete product:', error);
  }
};

</script>

<style>

</style>