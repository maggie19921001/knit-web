import axios from "axios";
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cartStore', () => {
    // 現有的 state
    const isLoading = ref(false);
    const cart = ref({});
    const coupon_code = ref('');
    const status = ref({
        loadingItem: '',
    });
    
    // 新增訂單相關的 state
    const currentOrder = ref(null);

    // 現有的 getters
    const cartTotal = computed(() => {
        if (!cart.value.carts) return 0
        return cart.value.carts.reduce((sum, item) => sum + item.qty, 0)
    })

    // 新增訂單相關的 getters
    const orderData = computed(() => currentOrder.value)
    const finalTotal = computed(() => cart.value.final_total || cart.value.total)

    // 現有的 actions
    const getCart = async() => {
        try{
            isLoading.value = true;
            const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/cart`;
            const res = await axios.get(api);
            isLoading.value = false;
            cart.value = res.data.data;
            console.log(cart.value);
        }catch(error){
            console.error('Error during get cart:', error);
        }
    }

    async function addToCart(productId, qty = 1){
        try {
            status.value.loadingItem = productId;
            isLoading.value = true;
            
            const data = {
                product_id: productId,
                qty: qty
            };
            
            const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/cart`;
            const res = await axios.post(api, { data:data });
            
            isLoading.value = false;
            status.value.loadingItem = '';
            
            getCart();
            
            return res.data;
        } catch(error) {
            console.error('Error during add to cart:', error);
            isLoading.value = false;
            status.value.loadingItem = '';
            throw error;
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
            getCart();
        }catch(error){
            console.error('Error during update cart:', error);
        }
    }

    const removeFromCart = async(item) =>{
        try{
            isLoading.value = true;
            const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/cart/${item.id}`;
            const res = await axios.delete(api);
            isLoading.value = false;
            getCart();
        }catch(error){
            console.error('Error during remove from cart:', error);
        }
    }

    const addCouponCode = async() => {
        try{
            isLoading.value = true;
            const coupon = {
                code: coupon_code.value
            }
            const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/coupon`;
            const res = await axios.post(api, { data:coupon });
            isLoading.value = false;
            getCart();
            countStore.pushMessageState(res, '套用優惠券');
        }catch(error){
            console.error('Error during add coupon code:', error);
        }
    }

    // 新增訂單相關的 actions
    const createOrder = async(orderData) => {
        try {
            isLoading.value = true;
            const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/order`;
            const res = await axios.post(api, { data: orderData });
            currentOrder.value = orderData;
            isLoading.value = false;
            return res.data.orderId;
        } catch(error) {
            console.error('Error during create order:', error);
            isLoading.value = false;
            throw error;
        }
    }

    const getOrder = async(orderId) => {
        try {
            isLoading.value = true;
            const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/order/${orderId}`;
            const res = await axios.get(api);
            currentOrder.value = res.data.order;
            isLoading.value = false;
        } catch(error) {
            console.error('Error during get order:', error);
            isLoading.value = false;
        }
    }

    const payOrder = async(orderId) => {
        try {
            isLoading.value = true;
            const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/pay/${orderId}`;
            const res = await axios.post(api);
            await getOrder(orderId);
            isLoading.value = false;
            return res;
        } catch(error) {
            console.error('Error during pay order:', error);
            isLoading.value = false;
            throw error;
        }
    }

    const clearOrder = () => {
        currentOrder.value = null;
    }

    return {
        // state
        cart,
        isLoading,
        status,
        coupon_code,
        currentOrder,
        // getters
        cartTotal,
        orderData,
        finalTotal,
        // actions
        addToCart,
        updateCart,
        getCart,
        removeFromCart,
        addCouponCode,
        createOrder,
        getOrder,
        payOrder,
        clearOrder
    }
})