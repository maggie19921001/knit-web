<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid px-5">
        <a href="#" class="text-white text-decoration-none">
          <div class="d-flex gap-1 align-items-center">
            <img src="/images/Knit &Soul_transparent-.png" alt="Logo" width="40" height="36" class="d-inline-block align-text-top">
            <div class="libre-baskerville-bold fs-5 ">Knit & Soul</div>
          </div>
        </a>
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
          <div class="offcanvas-header px-4 pb-0">
            <h5 class="offcanvas-title dm-sans-bold fs-6" id="offcanvasNavbarLabel">Knit & Share</h5>
            <button 
            type="button" 
            class="btn-close btn-close-white" 
            data-bs-dismiss="offcanvas" 
            aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body p-4 pt-0 p-lg-0">
            <hr class="d-lg-none">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3  gap-3">
                <li class="nav-item">
                  <router-link class="nav-link" to="/user/shop">
                    <i class="bi bi-shop" style="font-size: 1.3rem"></i>
                    <span class="nav-word d-lg-none p-3">購買材料</span>
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
</template>

<style scoped>

</style>