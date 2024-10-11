<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();


const email = ref('');
const password = ref('');
const loginData = ref({
  username: email,
  password: password,
});
const token = ref('');

const signIn = async () => {
  try {
    const api = `${import.meta.env.VITE_APP_API}admin/signin`;
    const res = await axios.post(api, loginData.value);
    token.value = res.data.token;
    const expired = new Date(res.data.expired);
    
    document.cookie = `loginToken=${token.value}; expires=${expired.toUTCString()}`; 
    router.push('/dashboard')
    
  } catch (error) {
    console.error('Error during sign in:', error);
  }
};

</script>
<template>
    <div class="container mt-5">
      <form class="row justify-content-center"
        @submit.prevent="signIn">
        <div class="col-md-6">
          <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
          <div class="mb-2">
            <label for="inputEmail" class="sr-only">Email address</label>
            <input
              type="email"
              id="inputEmail"
              class="form-control"
              placeholder="Email address"
              required
              autofocus
              v-model="email"
            />
          </div>
          <div class="mb-2">
            <label for="inputPassword" class="sr-only">Password</label>
            <input
              type="password"
              id="inputPassword"
              class="form-control"
              placeholder="Password"
              required
              v-model="password"
            />
          </div>
          <div class="text-end mt-4">
            <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
          </div>
        </div>
      </form>
    </div>
  </template>