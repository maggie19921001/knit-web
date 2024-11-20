<template>
    <div class="pt-5 pb-7">
        
        <div class="container">
            
            <div class="row justify-content-center flex-md-row flex-column">
                <!--左訂單資訊-->
                <div class="col-md-4">
                    <router-link  to="/user/cart" class="text-dark mb-3">
                        <i class="bi bi-caret-left-fill"></i>上一頁</router-link>
                <div class="border p-4 mb-4 mt-2">
                    <h4 class="mb-4">訂單資訊</h4>

                    <div class="d-flex mt-2" v-for=" item in cart.carts" :key=" item.id ">
                    <img :src="item.product.imageUrl" alt="" class="me-2" style="width: 48px; height: 48px; object-fit: cover">
                    <div class="w-100">
                        <div class="d-flex justify-content-between fw-bold">
                        <p class="mb-0">{{ item.product.title }}</p>
                        <p class="mb-0">x{{ item.qty }}</p>
                        </div>
                        <div class="d-flex justify-content-between">

                        <div v-if="item.product.price===item.final_total">
                            <p class="text-muted mb-0"><small>原價${{ item.product.price }}</small></p>
                        </div>
                        <div v-else>
                            <p class="text-muted mb-0"><small>優惠價${{ item.final_total }}</small></p>
                        </div>
                        <p class="mb-0">${{ item.final_total }}</p>
                        </div>
                    </div>
                    </div>
                    <hr>
                    <div class="d-flex justify-content-between mt-4">
                    <p class="mb-0 h4 fw-bold">總價</p>
                    <p class="mb-0 h4 fw-bold">NT${{ countStore.currency(cart.final_total) }}</p>
                    </div>
                </div>
                </div>
                <!--右側填寫資料-->
                <div class="col-md-6">
                    <div class="bg-white p-4 mt-2">
                        <h4 class="fw-bold">1. 聯絡資訊</h4>
                        <p class="mt-1">Contact information</p>
                        <Form v-slot="{ errors }"
                            @submit="createOrder">
                            <div class="mb-2">
                                <label for="email" class="text-muted mb-0 form-label">Email</label>
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
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input rounded-0" id="ContactLorem">
                                <label class="form-check-label" for="ContactLorem">記住我的email</label>
                            </div>
                            <div class="mb-2">
                                <label for="name" class="text-muted mb-0 form-label">收件人姓名</label>
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
                            <div class="mb-5">
                                <label for="tel" class="text-muted mb-0 form-label">收件人電話</label>
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
                    
                            <h4 class="fw-bold">2. 送貨地點</h4>
                            <p class="mt-1 mb-3">Shipping address</p>
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
                            <div class="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100">
                                <button type="submit" class="btn btn-dark py-3 px-7 rounded-0">前往付款</button>
                            </div>
                        
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useCounterStore } from "@/stores/counter";
const  countStore = useCounterStore();
import { useCartStore } from '@/stores/cartStore';
const cartStore = useCartStore();
import { useRouter } from "vue-router";
const router = useRouter();

const isLoading = ref(false);
const cart = computed(() => cartStore.cart);
const form = ref({
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
})

const createOrder = async() => {
  try{
    const orderId = await cartStore.createOrder(form.value);
    router.push(`/user/checkout/${orderId}`);
  }catch(error){
    console.error('Error during create order:', error);
  }
}

onMounted(() => {
    cartStore.getCart();
})
</script>