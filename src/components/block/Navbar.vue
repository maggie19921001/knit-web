<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Knit & Share</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="navbar-nav me-auto">
          <router-link to="/dashboard/products" class="nav-link">產品</router-link>
          <router-link to="/dashboard/orders" class="nav-link">訂單</router-link>
          <router-link to="/dashboard/coupons" class="nav-link">優惠券</router-link>
        </div>
        <a href="#" @click.prevent="logout" class="nav-link mx-3">登出</a>
    </div>
  </div>
</nav>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();
//登出
const logout = async () => {
  try {
    const api = `${import.meta.env.VITE_APP_API}logout`;
    const res = await axios.post(api);
    // 刪除 token cookie
    document.cookie = "loginToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push('/login')
    
  } catch (error) {
    console.error('Error during log out:', error);
  }
};

</script>