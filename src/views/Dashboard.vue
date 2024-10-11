<template>
    Dashboard
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const token = ref(document.cookie.replace(/(?:(?:^|.*;\s*)loginToken\s*=\s*([^;]*).*$)|^.*$/, '$1'));
axios.defaults.headers.common.Authorization = token.value;

const api = `${import.meta.env.VITE_APP_API}api/user/check`;

const checkOut = async()=>{
    try{
        if(!res.data.success){
            router.push('/login')
        }
    }catch{
        console.error('Error during sign in:', error);
    }
}

</script>