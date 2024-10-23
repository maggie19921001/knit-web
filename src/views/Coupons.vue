<template>
  <div>
    <Loading :active="isLoading"></Loading>
    <div class="text-end mt-4">
      <button class="btn btn-primary" @click="openCouponModal(true)">
        建立新的優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
      <tr>
        <th>名稱</th>
        <th>折扣百分比</th>
        <th>到期日</th>
        <th>是否啟用</th>
        <th>編輯</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, key) in coupons" :key="key">
        <td>{{ item.title }}</td>
        <td>{{ item.percent }}%</td>
        <td>{{ countStore.date(item.due_date) }}</td>
        <td>
          <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
          <span v-else class="text-muted">未起用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm"
                    @click="openCouponModal(false, item)"
            >編輯</button>
            <button class="btn btn-outline-danger btn-sm"
                    @click="openDelCouponModal(item)"
            >刪除</button>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <CouponModal :coupon="tempCoupon" ref="couponModal"
    @update-coupon="updateCoupon"/>
    <DelModal :item="tempCoupon" ref="delModal" @del-item="delCoupon"/>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import DelModal from '../components/DeleteModal.vue';
import CouponModal from '../components/CouponModal.vue'
import { useCounterStore } from "@/stores/counter";
const  countStore = useCounterStore();

const coupons = ref({});
const couponModal = ref(null);
const delModal = ref(null);
const tempCoupon = ref({});
const isNew = ref(false);
const isLoading = ref(false);

const openCouponModal = ( newStatus, item ) => {
  isNew.value = newStatus;
  if(isNew.value){
    tempCoupon.value = {
          due_date: new Date().getTime() / 1000,
        };
  }else{
    tempCoupon.value = {...item}
  }
  couponModal.value.showModal();
}

const openDelCouponModal = ( item ) => {
  tempCoupon.value = {...item};
  delModal.value.showModal();
}

const getCoupons = async() => {
  try{
    isLoading.value = true;
    const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/coupons`;
    const res = await axios.get(api);
    coupons.value = res.data.coupons;
    isLoading.value = false;
  }catch(error){
    console.error('Error during get coupons:', error);
  }
};

const updateCoupon = async( tempCoupon ) => {
  try{
    if( isNew.value ){
      const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/coupon`;
      const res = await axios.post(api, { data:tempCoupon });
      countStore.pushMessageState(res, '新增優惠券');
      getCoupons();
      couponModal.value.hideModal();
    }else{
      const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/coupon/${tempCoupon.id}`;
      const res = await axios.put(api, { data:tempCoupon });
      countStore.pushMessageState(res, '更新優惠券');
      getCoupons();
      couponModal.value.hideModal();
    }
  }catch(error){
    console.error('Error during update coupons:', error); 
  }
}

const delCoupon = async() =>{
  try{
    isLoading.value = true;
    const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/admin/coupon/${tempCoupon.value.id}`;
    const res = await axios.delete(api);
    delModal.value.hideModal();
    getCoupons();

  }catch(error){
    console.error('Error during delete coupon:', error);
  }
}

onMounted(()=>{
  getCoupons();
})
</script>