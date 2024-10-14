<template>
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
          <button class="btn btn-outline-primary btn-sm">編輯</button>
          <button class="btn btn-outline-danger btn-sm">刪除</button>
        </div>
      </td>
    </tr>
  </tbody>
</table>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

const products = ref([]);
const pagination = ref({});

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
</script>

<style>

</style>