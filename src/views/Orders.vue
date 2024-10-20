<template>
  <Loading :active="isLoading"></Loading>
  <table class="table mt-4">
    <thead>
    <tr>
      <th>購買時間</th>
      <th>Email</th>
      <th>購買款項</th>
      <th>應付金額</th>
      <th>是否付款</th>
      <th>編輯</th>
    </tr>
    </thead>
    <tbody>
      <template v-for="(item, key) in orders" :key="key">
        <tr v-if="orders.length"
            :class="{'text-secondary': !item.is_paid}">
          <td>{{ $filters.date(item.create_at) }}</td>
          <td><span v-text="item.user.email" v-if="item.user"></span></td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} 數量：{{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-right">{{ item.total }}</td>
          <td>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" :id="`paidSwitch${item.id}`"
                     v-model="item.is_paid"
                     @change="updatePaid(item)">
              <label class="form-check-label" :for="`paidSwitch${item.id}`">
                <span v-if="item.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm"
                      @click="openModal(false, item)">檢視</button>
              <button class="btn btn-outline-danger btn-sm"
                      @click="openDelOrderModal(item)"
              >刪除</button>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
  <OrderModal :order="tempOrder"
              ref="orderModal" @update-paid="updatePaid"></OrderModal>
  <DelModal :item="tempOrder" ref="delModal" @del-item="delOrder"></DelModal>
  <Pagination :pages="pagination" @emit-pages="getOrders"></Pagination>
</template>

<script setup>
import axios from "axios";
import { ref, inject } from "vue";
import DelModal from '../components/DeleteModal.vue';
import OrderModal from '../components/OrderModal.vue';
import Pagination from '../components/Pagination.vue';
import { useCounterStore } from "@/stores/counter";
const  countStore = useCounterStore();

const orders = ref({});
const isNew = ref(false);
const pagination = ref({});
const isLoading = ref(false);
const tempOrder = ref({});
const currentPageRef = ref(1);
const orderModel = ref(null);
const delModal = ref(null);

//取得訂單列表
const getOrders = async(currentPage = 1) => {
    try {
    isLoading.value = true;
    currentPageRef.value = currentPage;
    const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/orders?page=${currentPage}`;
    const res = await axios.get(api);
    isLoading.value = false;
    orders.value =res.data.orders;
    pagination.value =res.data.pagination;
    console.log(res);
  } catch (error) {
    console.error('Error during get orders:', error);
  }
};

const openModal = ( newStatus, item ) => {
  tempOrder.value = {...item};
  isNew.value = newStatus;
  orderModel.value.showModal();
}

const openDelOrderModal = ( item ) => {
  tempOrder.value = {...item};
  orderModel.value.showModal();
}

const updatePaid = async( item ) => {
  isLoading.value = true;
  const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/order/${item.id}`;
  const paid = {
        is_paid: item.is_paid,
      };
  const res = await axios.put(api, { paid });
  console.log("is paid", res);
  getOrders(currentPageRef);
  //未更新付款狀態
}

const delOrder = async() =>{
  isLoading.value = true;
  const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/order/${item.id}`;
  const res = await axios.delete(api);
  console.log("delOrder",res);
  delModal.value.hideModal();
  getOrders(currentPageRef);
}
</script>

