import axios from "axios";
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('productStore', () => {
    const products = ref([]);
    const isLoading = ref(false);
    
    // 取得所有產品
    const getProducts = async() => {
        try {
            isLoading.value = true;
            const api = `${import.meta.env.VITE_APP_API}api/${import.meta.env.VITE_APP_PATH}/products/all`;
            const res = await axios.get(api);
            products.value = res.data.products;
            isLoading.value = false;
        } catch(error) {
            console.error('Error during get products:', error);
            isLoading.value = false;
        }
    };

    return {
        // state
        products,
        isLoading,
        // actions
        getProducts,
    }
})