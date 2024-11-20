import axios from "axios";
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cartStore', () => {

    const isLoading = ref(false);
    const cart = ref({});
    const coupon_code = ref('');
    const status = ref({
        loadingItem: '',
    });
    
    // getters (computed)
    const cartTotal = computed(() => {
        // 檢查cart.value.carts是否存在
        if (!cart.value.carts) return 0
        
        // 計算所有商品數量總和
        return cart.value.carts.reduce((sum, item) => sum + item.qty, 0)
    })

    // actions
    const getCart = async() => {
        try{
            isLoading.value = true;
            const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/cart`;
            const res = await axios.get(api);
            isLoading.value = false;
            cart.value = res.data.data;
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
            
            // 更新購物車
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
                code:coupon_code.value
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

    return {
        // state
        cart,
        isLoading,
        status,
        cartTotal,
        coupon_code,
        // actions
        addToCart,
        updateCart,
        getCart,
        removeFromCart,
        addCouponCode
    }
})