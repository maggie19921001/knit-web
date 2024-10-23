<template>
  <!-- 購物車列表 -->
  <Loading :active="isLoading"></Loading>
  <div class="col-md-5">
    <div class="sticky-top">
      <table class="table align-middle">
        <thead>
          <tr>
            <th></th>
            <th>品名</th>
            <th style="width: 110px">數量</th>
            <th>單價</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for=" item in cart.carts" :key=" item.id ">
            <td>
              <button type="button" class="btn btn-outline-danger btn-sm">
                <i class="bi bi-x"></i>
              </button>
            </td>
            <td>
              {{ item.product.title }}
              <div class="text-success" v-if="item.coupon">
                已套用優惠券
              </div>
            </td>
            <td>
              <div class="input-group input-group-sm">
                <input type="number" class="form-control" v-model.number="item.qty">
                <div class="input-group-text">{{ item.product.unit }}</div>
              </div>
            </td>
            <td class="text-end">
              <small v-if="cart.final_total !== cart.total" class="text-success">折扣價：</small>
              {{ countStore.currency(item.final_total) }}
            </td>
          </tr>
        </tbody>
        <tfoot>
        <tr>
          <td colspan="3" class="text-end">總計</td>
          <td class="text-end">{{ countStore.currency(cart.total) }}</td>
        </tr>
        <tr v-if="cart.total !== cart.final_total">
          <td colspan="3" class="text-end text-success">折扣價</td>
          <td class="text-end text-success">{{ countStore.currency(cart.final_total)}}</td>
        </tr>
        </tfoot>
      </table>
      <div class="input-group mb-3 input-group-sm">
        <input type="text" class="form-control" placeholder="請輸入優惠碼">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button">
            套用優惠碼
          </button>
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

const isLoading = ref(false);
const cart = ref({});
const coupon_code = ref('');

const getCart = async() => {
  try{
    isLoading.value = true;
    const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/cart`;
    const res = await axios.get(api);
    isLoading.value = false;
    cart.value = res.data.data;
    console.log(res);
  }catch(error){
    console.error('Error during get cart:', error);
  }
}

onMounted(() => {
  getCart();
})
</script>