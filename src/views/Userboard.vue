<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/user/shop">用戶端範例</router-link>
      </div>
    </nav>
    <div class="container-fluid mt-3 position-relative">
      <ToastMessages />
      <RouterView />
    </div>
</template>

<script setup>
import { provide } from "vue";
import emitter from "@/methods/emitter";
import ToastMessages from "@/components/ToastMessages.vue";

provide('emitter', emitter);
</script>