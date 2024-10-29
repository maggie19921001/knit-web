<template>
<div class="my-5 row justify-content-center">
    <form class="col-md-6" @submit.prevent="payOrder">
      <table class="table align-middle">
        <thead>
        <th>品名</th>
        <th>數量</th>
        <th>原價</th>
        <th>優惠價</th>
        </thead>
        <tbody>
        <tr v-for="item in order.products" :key="item.id">
          <td>{{ item.product.title }}</td>
          <td>{{ item.qty }} / {{ item.product.unit }}</td>
          <td>{{ item.total }}</td>
          <td>{{ item.final_total }}</td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
          <td colspan="3" class="text-end">總計</td>
          <td >{{ order.total }}</td>
        </tr>
        </tfoot>
      </table>
      <table class="table">
      <tbody>
      <tr>
        <th width="100">Email</th>
        <td>{{order.user.email}}</td>
      </tr>
      <tr>
        <th>姓名</th>
        <td>{{ order.user.name }}</td>
      </tr>
      <tr>
        <th>收件人電話</th>
        <td>{{ order.user.tel }}</td>
      </tr>
      <tr>
        <th>收件人地址</th>
        <td>{{order.user.address}}</td>
      </tr>
      <tr>
        <th>付款狀態</th>
        <td>
          <span v-if="!order.is_paid">尚未付款</span>
          <span v-else class="text-success">付款完成</span>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="text-end" v-if="order.is_paid === false">
      <button class="btn btn-danger">確認付款去</button>
    </div>
  </form>
</div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

const order = ref({
  user:{},
});
const orderId = ref('');
const isLoading = ref(false);

const getOrder = async() => {
  try{
    isLoading.value = true;
    const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/order/${orderId.value}`;
    const res = await axios.get(api);
    isLoading.value = false;
    order.value = res.data.order;
  }catch(error){
    console.error('Error during get order:', error);
  }
}

const payOrder = async() => {
  try{
    isLoading.value = true;
    const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/pay/${orderId.value}`;
    const res = await axios.post(api);
    isLoading.value = false;
    console.log(res);
  }catch(error){
    console.error('Error during pay order:', error);
  }
}

onMounted(() => {
  orderId.value = route.params.orderId;
  getOrder();
});

</script>