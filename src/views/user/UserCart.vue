<template>
  <!-- 購物車列表 -->
  <Loading :active="isLoading"></Loading>
  <div class="container">
    <div class="row mt-4">
      <div class="col-md-7">
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
                    <input type="number" class="form-control" min="1" 
                    v-model.number="item.qty"
                    :disabled="status.loadingItem === item.id"
                    @change="updateCart(item)">
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
            <input type="text" class="form-control" placeholder="請輸入優惠碼" v-model="coupon_code">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
                套用優惠碼
              </button>
            </div>
          </div>
        </div>
      </div>
      <Form class="col-md-5" v-slot="{ errors }"
            @submit="createOrder">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <Field 
            id="email" 
            name="email" 
            type="email" 
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email" 
            rules="email|required"
            v-model="form.user.email">
          </Field>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <Field 
            id="name" 
            name="姓名" 
            type="text" 
            class="form-control"
            :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="請輸入姓名" 
            rules="required"
            v-model="form.user.name">
          </Field>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <Field 
            id="tel" 
            name="電話" 
            type="tel" 
            class="form-control"
            :class="{ 'is-invalid': errors['電話'] }"
            placeholder="請輸入電話" 
            rules="required"
            v-model="form.user.tel">
          </Field>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <Field 
            id="address" 
            name="地址" 
            type="text" 
            class="form-control"
            :class="{ 'is-invalid': errors['地址'] }"
            placeholder="請輸入地址" 
            rules="required"
            v-model="form.user.address">
          </Field>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea 
            name="" 
            id="message" 
            class="form-control" 
            cols="30" 
            rows="10"
            v-model="form.message">
          </textarea>
        </div>
        <div class="text-end">
          <button class="btn btn-danger">送出訂單</button>
        </div>
      </Form>
  
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
const status = ref({
        loadingItem: '',
      });
const form = ref({
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
})

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

const updateCart = async(item) => {
  try{
    status.value.loadingItem = item.id;
    isLoading.value = true;
    const cart = {
      product_id: item.product_id,
      qty: item.qty
    }
    const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/cart/${item.id}`;
    const res = await axios.put(api, { data:cart });
    isLoading.value = false;
    status.value.loadingItem = '';
    console.log(res);
    getCart();
  }catch(error){
    console.error('Error during update cart:', error);
  }
}

const addCouponCode = async() => {
  try{
    isLoading.value = true;
    const coupon = {
      code:coupon_code.value
    }
    console.log(coupon);
    const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/coupon`;
    const res = await axios.post(api, { data:coupon });
    isLoading.value = false;
    getCart();
    countStore.pushMessageState(res, '套用優惠券');
  }catch(error){
    console.error('Error during add coupon code:', error);
  }
}

const createOrder = async() => {
  try{
    const order = form.value;
    const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/order`;
    const res = await axios.post(api, { data:order });
    console.log(res);
    
  }catch(error){
    console.error('Error during create order:', error);
  }
}

onMounted(() => {
  getCart();
})
</script>