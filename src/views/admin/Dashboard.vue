<template>
<Navbar />
<div class="container-fluid position-relative">
    <ToastMessages />
    <RouterView />
</div>
    
</template>

<script setup>
import emitter from "@/methods/emitter";
import ToastMessages from "@/components/function/ToastMessages.vue";
import Navbar from "../../components/block/Navbar.vue"
import axios from "axios";
import { ref, provide } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

provide('emitter', emitter);

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