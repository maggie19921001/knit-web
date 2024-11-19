<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <div class="d-flex gap-1 align-items-center">
            <img src="/images/Knit &Soul_transparent-.png" alt="Logo" width="40" height="36" class="d-inline-block align-text-top">
            <div class="libre-baskerville-bold fs-5">Knit & Soul</div>
          </div>
        </router-link>
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
            class="btn-close btn-close-white" 
            data-bs-dismiss="offcanvas" 
            aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 gap-3">
                <li class="nav-item">
                  <router-link class="nav-link" to="/">
                    <i class="bi bi-house-door-fill" style="font-size: 1.3rem"></i>
                    <span class="nav-word d-lg-none p-3">回首頁</span>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/user/shop">
                    <i class="bi bi-shop" style="font-size: 1.3rem"></i>
                    <span class="nav-word d-lg-none p-3">購買材料</span>
                  </router-link>
                </li>
                <li class="nav-item position-relative">
                  <!-- <span class="position-absolute top-0 start-0 translate-middle badge round-pill bg-danger border border-light">66</span> -->
                  <router-link class="nav-link" to="/user/cart">
                    <i class="bi bi-bag-fill " style="font-size: 1.3rem"></i>
                    
                    <span class="position-absolute top-0 start-50  badge rounded-pill bg-danger border border-light d-sm-none d-md-none d-lg-block">88</span><!-- translate-middle -->
                    <span class="nav-word d-lg-none p-3">購物車</span>
                    <span class="badge rounded-pill bg-danger border border-light d-lg-none">65</span>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/login">
                    <i class="bi bi-person-circle" style="font-size: 1.3rem"></i>
                    <span class="nav-word d-lg-none p-3">個人頁面</span>
                  </router-link>
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
    <AllFooter />
</template>

<script setup>
import AllFooter from '@/components/block/AllFooter.vue';
import { provide, onMounted, inject } from "vue";
import emitter from "@/methods/emitter";
provide('emitter', emitter);

import ToastMessages from "@/components/function/ToastMessages.vue";
import bootstrap from "bootstrap/dist/js/bootstrap"
import Swal from 'sweetalert2';
const swal = inject('$swal')

const couponAlert = () => {
  Swal.fire({
  title: "【暖暖優惠碼：KS50】",
  text: "恭喜您獲得冬季快閃！全站5折優惠券",
  imageUrl: "https://github.com/maggie19921001/knit-web/blob/main/images/winter_coupon.png?raw=true",
  imageWidth: 530,
  imageHeight: 250,
  imageAlt: "折價券",
  width: 600,
  padding: "1em",
  color: "white",
  background: "#1B344B",
  confirmButtonText: `
  <i class="bi bi-hand-thumbs-up-fill"></i> 太棒了！
  `,
  confirmButtonAriaLabel: "Thumbs up, great!",
  confirmButtonColor: "#DD5E48",

});
}

onMounted(() => {
      const offcanvasElement = document.getElementById('offcanvasNavbar');
      const offcanvas = new bootstrap.Offcanvas(offcanvasElement, {
        backdrop: true
      });
      couponAlert();
    });

</script>