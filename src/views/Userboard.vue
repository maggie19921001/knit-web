<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/user/shop">
          <img src="/images/K&S-logo-02.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
          Knit & Share shop</router-link>
          <button 
            class="navbar-toggler" 
            type="button" 
            data-bs-toggle="offcanvas" 
            data-bs-target="#offcanvasNavbar" 
            aria-controls="offcanvasNavbar"
          >
        <span class="navbar-toggler-icon"></span>
      </button>
          <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Knit & Share</h5>
            <button 
            type="button" 
            class="btn-close" 
            data-bs-dismiss="offcanvas" 
            aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <router-link class="nav-link" to="/user/shop"><i class="bi bi-house-door-fill"></i></router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/user/cart"><i class="bi bi-bag-fill"></i></router-link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><i class="bi bi-person-circle"></i></a>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </nav>
    <div class="container-fluid mt-3 position-relative">
      <ToastMessages />
      <RouterView />
    </div>
</template>

<script setup>
import { provide, onMounted } from "vue";
import emitter from "@/methods/emitter";
provide('emitter', emitter);

import ToastMessages from "@/components/ToastMessages.vue";
import bootstrap from "bootstrap/dist/js/bootstrap"

onMounted(() => {
      const offcanvasElement = document.getElementById('offcanvasNavbar');
      const offcanvas = new bootstrap.Offcanvas(offcanvasElement, {
        backdrop: true
      });
    });

</script>