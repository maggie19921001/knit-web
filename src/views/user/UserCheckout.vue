<template>
<div class="my-5 row justify-content-center">
    <form class="col-md-6" @submit.prevent="payOrder">
      <table class="table align-middle">
        <thead>
          <tr>
            <th>品名</th>
            <th>數量</th>
            <th>原價</th>
            <th>優惠價</th>
          </tr>
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
      <div class="text-start" v-if="order.is_paid === false">
        <p class="mt-4 mb-2">付款方式</p>
        <div class="form-check mb-2">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
          <label class="form-check-label text-muted" for="gridRadios1">WebATM
          </label>
        </div>
        <div class="form-check mb-2">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
          <label class="form-check-label text-muted" for="gridRadios2">ATM
          </label>
        </div>
        <div class="form-check mb-5">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3">
          <label class="form-check-label text-muted" for="gridRadios3">ApplePay
          </label>
        </div>
        <button class="btn btn-dark py-3 px-7 rounded-0">確認付款去</button>
      </div>
      <div class="text-start" v-else-if="order.is_paid === true">
        <button class="btn btn-dark py-3 px-7 rounded-0 disabled">付款完成</button>
      </div>
  </form>
</div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

import { useCartStore } from '@/stores/cartStore';
const cartStore = useCartStore();

const orderId = ref(route.params.orderId);
// 使用 store 中的訂單數據
const order = computed(() => cartStore.orderData);

// 修改付款方法
const payOrder = async() => {
    try {
        await cartStore.payOrder(orderId.value);
    } catch(error) {
        console.error('Error during pay order:', error);
    }
}

onMounted(() => {
    cartStore.getOrder(orderId.value);
});

</script>