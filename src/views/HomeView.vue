<script setup>
import HomeNavbar from '@/components/block/HomeNavbar.vue';
import CommentSwiper from '@/components/block/CommentSwiper.vue';
import AllFooter from '@/components/block/AllFooter.vue';
</script>

<template>
<HomeNavbar />
<!-- 首圖 -->
<section class="explore">
  <div class="container d-flex flex-column justify-content-center gap-5 mx-auto mt-4" style="min-height: 100vh;">
    <div class="home-title text-center text-white">
    <div class="noto-serif-tc-regular fs-1 ">編織溫暖時光，連結每顆真摯的心</div>
    <div class="dancing-script-regular fs-2">Crafting Time, Weaving Souls.</div>
    </div>
    <div class="d-flex justify-content-center">
      <router-link class="nav-link" to="/user/shop">
        <button type="button" class="btn btn-primary rounded-3 dm-sans-regular fs-4 px-5">開始探索</button>
      </router-link>
    </div>
  </div>
</section>
<!-- 簡介 -->
<section class="intro position-relative">
  <div class="container mx-auto p-5">
    <div class="row justify-content-center align-items-center gap-5">
      <div class="col-md-4">
        <img src="https://github.com/maggie19921001/knit-web/blob/main/images/home_intro_1.png?raw=true" alt="" class="img-fluid">
      </div>
      <div class="col-md-4 text-start">
        <h4 class="dancing-script-regular fs-1">Imagination</h4>
        <h4 class="fw-bold fs-2">找想法</h4>
        <p class="fs-5 mt-3">好想動手做，卻又不知該從何開始嗎？
        <br>
        <br>
        讓我們來手把手帶你入門，從工具、材料選購，基本針法教學，帶你開始製作你的第一個作品！
        </p>
      </div>
    </div>
    <div class="row flex-row-reverse justify-content-center align-items-center gap-5">
      <div class="col-md-4">
        <img src="https://github.com/maggie19921001/knit-web/blob/main/images/home_intro_2.png?raw=true" alt="" class="img-fluid">
      </div>
      <div class="col-md-4 text-start">
        <h4 class="dancing-script-regular fs-1">Inspiration</h4>
        <h4 class="fw-bold fs-2">找靈感</h4>
        <p class="fs-5 mt-3">已經會編織技巧了，但不知道下一個作品該做什麼嗎？
        <br>
        <br>
        快來看看各式各樣的織圖以及作品範本！
        </p>
      </div>
    </div>
    <div class="row justify-content-center align-items-center gap-5">
      <div class="col-md-4">
        <img src="https://github.com/maggie19921001/knit-web/blob/main/images/home_intro_3.png?raw=true" alt="" class="img-fluid">
      </div>
      <div class="col-md-4 text-start">
        <h4 class="dancing-script-regular fs-1">Companion</h4>
        <h4 class="fw-bold fs-2">找同伴</h4>
        <p class="fs-5 mt-3">迫不及待想分享完成作品的喜悅卻找不到同好嗎？ 
        <br>
        <br>
        我們有完整的討論社群，無論是想詢問問題，或是分享完成的作品、看看大家都在做什麼，快來一起討論！
        </p>
      </div>
    </div>
    <div class="row"></div>
  </div>
  <div class="pattern-1 position-absolute z-1">
    <img src="https://github.com/maggie19921001/knit-web/blob/main/images/element/P8.png?raw=true" alt="">
  </div>
  <div class="pattern-2 position-absolute z-1">
    <img src="https://github.com/maggie19921001/knit-web/blob/main/images/element/P4.png?raw=true" alt="">
  </div>
  <div class="pattern-3 position-absolute z-1">
    <img src="https://github.com/maggie19921001/knit-web/blob/main/images/element/P2.png?raw=true" alt="">
  </div>
  <div class="pattern-4 position-absolute z-1">
    <img src="https://github.com/maggie19921001/knit-web/blob/main/images/element/P5.png?raw=true" alt="">
  </div>
</section>
<!-- 作品展示 -->
<section class="create">
  <div class="container p-5">
    <div class="title px-5 mb-5">
      <h4 class="dancing-script-regular fs-1 text-white">Creation</h4>
      <h4 class="fw-bold fs-1 text-white">看看大家的創作</h4>
      <p class="fs-5 text-white">在這裡，你可以盡情與他人分享與討論最新作品</p>
    </div>
    <div class="row justify-content-center align-items-center gap-5 mt-0">
<!-- 作品列1 -->
      <div class="col-12 col-md-6 col-lg-3">
        <div class="card-1 rounded overflow-hidden position-relative" style="width: 20rem; height: 20rem;">
          <div class="card-bg" style="background-image: url('https://github.com/maggie19921001/knit-web/blob/main/images/home_create/home_create_1.png?raw=true')"></div>
          <div class="card-overlay"></div>
          <div class="card-content position-absolute w-100 h-100">
            <!-- 收藏按鈕 -->
            <div class="bookmark-icon position-absolute">
              <a href="#" class="card-link">
                <i class="bi bi-bookmark fs-2 text-white"></i>
              </a>
            </div>
            <!-- 底部資訊 -->
            <div class="bottom-info position-absolute d-flex justify-content-between w-100 px-4">
              <div>
                <p class="card-subtitle mb-1 text-white">Wendy</p>
                <h5 class="card-title text-white mb-0">圍巾小兔</h5>
              </div>
              <a href="#" class="card-link align-self-center">
                <i class="bi bi-heart fs-2 text-white"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-3">
        <div class="card-1 rounded overflow-hidden position-relative" style="width: 20rem; height: 20rem;">
          <div class="card-bg" style="background-image: url('https://github.com/maggie19921001/knit-web/blob/main/images/home_create/home_create_2.png?raw=true')"></div>
          <div class="card-overlay"></div>
          <div class="card-content position-absolute w-100 h-100">
            <!-- 收藏按鈕 -->
            <div class="bookmark-icon position-absolute">
              <a href="#" class="card-link">
                <i class="bi bi-bookmark fs-2 text-white"></i>
              </a>
            </div>
            <!-- 底部資訊 -->
            <div class="bottom-info position-absolute d-flex justify-content-between w-100 px-4">
              <div>
                <p class="card-subtitle mb-1 text-white">Mia</p>
                <h5 class="card-title text-white mb-0">舒適手帕</h5>
              </div>
              <a href="#" class="card-link align-self-center">
                <i class="bi bi-heart fs-2 text-white"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-3">
        <div class="card-1 rounded overflow-hidden position-relative" style="width: 20rem; height: 20rem;">
          <div class="card-bg" style="background-image: url('https://github.com/maggie19921001/knit-web/blob/main/images/home_create/home_create_3.png?raw=true')"></div>
          <div class="card-overlay"></div>
          <div class="card-content position-absolute w-100 h-100">
            <!-- 收藏按鈕 -->
            <div class="bookmark-icon position-absolute">
              <a href="#" class="card-link">
                <i class="bi bi-bookmark fs-2 text-white"></i>
              </a>
            </div>
            <!-- 底部資訊 -->
            <div class="bottom-info position-absolute d-flex justify-content-between w-100 px-4">
              <div>
                <p class="card-subtitle mb-1 text-white">Amy</p>
                <h5 class="card-title text-white mb-0">冬日暖襪</h5>
              </div>
              <a href="#" class="card-link align-self-center">
                <i class="bi bi-heart fs-2 text-white"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
<!-- 作品列2 -->
      <div class="col-12 col-md-6 col-lg-3">
        <div class="card-1 rounded overflow-hidden position-relative" style="width: 20rem; height: 20rem;">
          <div class="card-bg" style="background-image: url('https://github.com/maggie19921001/knit-web/blob/main/images/home_create/home_create_4.png?raw=true')"></div>
          <div class="card-overlay"></div>
          <div class="card-content position-absolute w-100 h-100">
            <!-- 收藏按鈕 -->
            <div class="bookmark-icon position-absolute">
              <a href="#" class="card-link">
                <i class="bi bi-bookmark fs-2 text-white"></i>
              </a>
            </div>
            <!-- 底部資訊 -->
            <div class="bottom-info position-absolute d-flex justify-content-between w-100 px-4">
              <div>
                <p class="card-subtitle mb-1 text-white">Jackie</p>
                <h5 class="card-title text-white mb-0">小仙人掌</h5>
              </div>
              <a href="#" class="card-link align-self-center">
                <i class="bi bi-heart fs-2 text-white"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-3">
        <div class="card-1 rounded overflow-hidden position-relative" style="width: 20rem; height: 20rem;">
          <div class="card-bg" style="background-image: url('https://github.com/maggie19921001/knit-web/blob/main/images/home_create/home_create_5.png?raw=true')"></div>
          <div class="card-overlay"></div>
          <div class="card-content position-absolute w-100 h-100">
            <!-- 收藏按鈕 -->
            <div class="bookmark-icon position-absolute">
              <a href="#" class="card-link">
                <i class="bi bi-bookmark fs-2 text-white"></i>
              </a>
            </div>
            <!-- 底部資訊 -->
            <div class="bottom-info position-absolute d-flex justify-content-between w-100 px-4">
              <div>
                <p class="card-subtitle mb-1 text-white">Lily</p>
                <h5 class="card-title text-white mb-0">日系手提袋</h5>
              </div>
              <a href="#" class="card-link align-self-center">
                <i class="bi bi-heart fs-2 text-white"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-3">
        <div class="card-1 rounded overflow-hidden position-relative" style="width: 20rem; height: 20rem;">
          <div class="card-bg" style="background-image: url('https://github.com/maggie19921001/knit-web/blob/main/images/home_create/home_create_6.png?raw=true')"></div>
          <div class="card-overlay"></div>
          <div class="card-content position-absolute w-100 h-100">
            <!-- 收藏按鈕 -->
            <div class="bookmark-icon position-absolute">
              <a href="#" class="card-link">
                <i class="bi bi-bookmark fs-2 text-white"></i>
              </a>
            </div>
            <!-- 底部資訊 -->
            <div class="bottom-info position-absolute d-flex justify-content-between w-100 px-4">
              <div>
                <p class="card-subtitle mb-1 text-white">Emma</p>
                <h5 class="card-title text-white mb-0">森林蘑菇</h5>
              </div>
              <a href="#" class="card-link align-self-center">
                <i class="bi bi-heart fs-2 text-white"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
<!-- 作品列3 -->
      <div class="col-12 col-md-6 col-lg-3">
        <div class="card-1 rounded overflow-hidden position-relative" style="width: 20rem; height: 20rem;">
          <div class="card-bg" style="background-image: url('https://github.com/maggie19921001/knit-web/blob/main/images/home_create/home_create_7.png?raw=true')"></div>
          <div class="card-overlay"></div>
          <div class="card-content position-absolute w-100 h-100">
            <!-- 收藏按鈕 -->
            <div class="bookmark-icon position-absolute">
              <a href="#" class="card-link">
                <i class="bi bi-bookmark fs-2 text-white"></i>
              </a>
            </div>
            <!-- 底部資訊 -->
            <div class="bottom-info position-absolute d-flex justify-content-between w-100 px-4">
              <div>
                <p class="card-subtitle mb-1 text-white">Sophia</p>
                <h5 class="card-title text-white mb-0">編織手套</h5>
              </div>
              <a href="#" class="card-link align-self-center">
                <i class="bi bi-heart fs-2 text-white"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-3">
        <div class="card-1 rounded overflow-hidden position-relative" style="width: 20rem; height: 20rem;">
          <div class="card-bg" style="background-image: url('https://github.com/maggie19921001/knit-web/blob/main/images/home_create/home_create_8.png?raw=true')"></div>
          <div class="card-overlay"></div>
          <div class="card-content position-absolute w-100 h-100">
            <!-- 收藏按鈕 -->
            <div class="bookmark-icon position-absolute">
              <a href="#" class="card-link">
                <i class="bi bi-bookmark fs-2 text-white"></i>
              </a>
            </div>
            <!-- 底部資訊 -->
            <div class="bottom-info position-absolute d-flex justify-content-between w-100 px-4">
              <div>
                <p class="card-subtitle mb-1 text-white">Chloe</p>
                <h5 class="card-title text-white mb-0">度假草編包</h5>
              </div>
              <a href="#" class="card-link align-self-center">
                <i class="bi bi-heart fs-2 text-white"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 col-lg-3">
        <div class="card-1 rounded overflow-hidden position-relative" style="width: 20rem; height: 20rem;">
          <div class="card-bg" style="background-image: url('https://github.com/maggie19921001/knit-web/blob/main/images/home_create/home_create_9.png?raw=true')"></div>
          <div class="card-overlay"></div>
          <div class="card-content position-absolute w-100 h-100">
            <!-- 收藏按鈕 -->
            <div class="bookmark-icon position-absolute">
              <a href="#" class="card-link">
                <i class="bi bi-bookmark fs-2 text-white"></i>
              </a>
            </div>
            <!-- 底部資訊 -->
            <div class="bottom-info position-absolute d-flex justify-content-between w-100 px-4">
              <div>
                <p class="card-subtitle mb-1 text-white">Rachel</p>
                <h5 class="card-title text-white mb-0">鄉村編織袋</h5>
              </div>
              <a href="#" class="card-link align-self-center">
                <i class="bi bi-heart fs-2 text-white"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
<!-- 分享 -->
<section class="comment">
  <div class="container text-center mb-5 pb-5">
    <div class="pic-group position-relative">
      <img src="https://github.com/maggie19921001/knit-web/blob/main/images/element/comment_talk/Layer_1-6.png?raw=true" alt="" class="pic-1">
      <img src="https://github.com/maggie19921001/knit-web/blob/main/images/element/comment_talk/Layer_1-4.png?raw=true" alt="" class="pic-2">
      <img src="https://github.com/maggie19921001/knit-web/blob/main/images/element/comment_talk/Layer_1-7.png?raw=true" alt="" class="pic-3">
      <img src="https://github.com/maggie19921001/knit-web/blob/main/images/element/comment_talk/Layer_1-1.png?raw=true" alt="" class="pic-4">
      <img src="https://github.com/maggie19921001/knit-web/blob/main/images/element/comment_talk/Layer_1-8.png?raw=true" alt="" class="pic-5">
      <img src="https://github.com/maggie19921001/knit-web/blob/main/images/element/comment_talk/Layer_1-3.png?raw=true" alt="" class="pic-6">
      <img src="https://github.com/maggie19921001/knit-web/blob/main/images/element/comment_talk/Layer_1-2.png?raw=true" alt="" class="pic-7">
      <img src="https://github.com/maggie19921001/knit-web/blob/main/images/element/comment_talk/Layer_1-9.png?raw=true" alt="" class="pic-8">
      <img src="https://github.com/maggie19921001/knit-web/blob/main/images/element/comment_talk/Layer_1-5.png?raw=true" alt="" class="pic-9">
    </div>
    <!--主圖-->
    <img src="https://github.com/maggie19921001/knit-web/blob/main/images/element/comment_talk/Layer_1.png?raw=true" alt="" class="mb-5 main-pic">
    <div class="fs-1">
      <p class="fw-bold mb-0">集合所有編織所需</p>
      <p class="fw-bold mb-5">共創編織最大交流平台</p>
    </div>
    <div class="d-flex justify-content-center">
      <router-link class="nav-link" to="/user/shop">
          <button type="button" class="btn btn-primary rounded-3 dm-sans-regular fs-4 px-5 " style="width: 500px;">開始探索</button>
      </router-link>
    </div>
  </div>
</section>
<section class="comment-card mb-5">
  <CommentSwiper />
</section>

<AllFooter />
</template>

<style scoped>
.explore{
    background-image: url(/images/home_bg.png);
    background-position: center center; 
    background-repeat: no-repeat;
    object-fit: fill;
    background-size: cover;
}
.home-title{
  text-shadow: rgb(56, 56, 56) 0.2em 0.2em 0.2em;
  
}
.intro{
  background-image: url(https://github.com/maggie19921001/knit-web/blob/main/images/home_intro_bg.png?raw=true);
  padding: 3rem;
}
.row{
  margin-top: 6rem;
}

/* 通用的容器樣式 */
.pattern-1,
.pattern-2,
.pattern-3,
.pattern-4 {
  height: 20%;
  max-width: 150px;
}

/* 每個容器的位置 */
.pattern-1 {
  top: 0%;
  right: 0;
  max-width: 250px;
}

.pattern-2 {
  top: 25%;
  left: 0;
}

.pattern-3 {
  bottom: 20%;
  right: 0;
}

.pattern-4 {
  bottom: 0;
  left: 0;
}

/* 所有 pattern 內的圖片樣式 */
.pattern-1 img,
.pattern-2 img,
.pattern-3 img,
.pattern-4 img {
  width: 100%;
  height: auto;
  /* opacity: 80%; */
}

.create {
  background-color: #B9C0C7; 
}

.card-1 {
  position: relative;
  cursor: pointer;
}

.card-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: all 0.3s ease;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  transition: all 0.3s ease;
}

.card-content {
  opacity: 0;
  z-index: 2;
}

/* 收藏按鈕定位 */
.bookmark-icon {
  top: 1rem;
  right: 1rem;
}

/* 底部資訊定位 */
.bottom-info {
  bottom: 1rem;
  left: 0;
}

/* Hover 效果 */
.card-1:hover .card-overlay {
  background: rgba(0, 0, 0, 0.5);
}
.card-1:hover .card-content {
  opacity: 1;
}

/* icon 樣式 */
.card-link {
  text-decoration: none;
}

.card-link:hover {
  opacity: 0.8;
}

/* 文字樣式 */
.card-subtitle {
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
}

.card-title {
  font-size: 1.1rem;
}

.main-pic{
  width: 15%;
}

.pic-group {
  position: relative;
  width: 100%;
  height: 10rem;
  margin: 4rem 0;
}

/* 設置每張圖片的基本樣式 */
.pic-group img {
  position: absolute;
  object-fit: contain;
  animation: float 3s ease-in-out infinite;

}

/* 為每張圖片設置精確位置 */
.pic-group img:nth-child(1) {
  top: 80%;
  left: 35%;
  animation-delay: 0s;
}

.pic-group img:nth-child(2) {
  top: 50%;
  right: 25%;
  animation-delay: 0.2s;
}

.pic-group img:nth-child(3) {
  bottom: -120%;
  left: 20%;
  animation-delay: 0.4s;
}

.pic-group img:nth-child(4) {
  bottom: -100%;
  left: 28%;
  animation-delay: 0.6s;
}

.pic-group img:nth-child(5) {
  bottom: -20%;
  right: 20%;
  animation-delay: 0.8s;
}

.pic-group img:nth-child(6) {
  bottom: -40%;
  left: 20%;
  animation-delay: 1s;
}

.pic-group img:nth-child(7) {
  top: 90%;
  right: 35%;
  animation-delay: 1.2s;
}

.pic-group img:nth-child(8) {
  top: 50%;
  left: 55%;
  animation-delay: 1.4s;
}

.pic-group img:nth-child(9) {
  bottom: -100%;
  left: 65%;
  animation-delay: 1.6s;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

/* 主圖樣式 */
.comment > .container > img:first-child {
  height: auto;
  margin-bottom: 2rem;
}

/* 按鈕樣式 */
.comment .btn-primary {
  padding: 0.8rem 2rem;
  font-size: 1.25rem;
  border: none;
  transition: all 0.3s ease;
}

.comment .btn-primary:hover {
  transform: translateY(-2px);
}

/* RWD 調整 */
@media (max-width: 768px) {
  .main-pic{
  width: 25%;
}

  /* 在手機版調整圖片位置 */
  .pic-group img:nth-child(1) { left: 33%;    width: 8%;}
  .pic-group img:nth-child(2) { left: 70%;    width: 8%;   display: none;}
  .pic-group img:nth-child(3) { left: 27%;    width: 6%;}
  .pic-group img:nth-child(4) { left: 13%;    width: 13%;}
  .pic-group img:nth-child(5) { left: 85%;    width: 6%;}
  .pic-group img:nth-child(6) { left: 5%;     width: 9%;}
  .pic-group img:nth-child(7) { left: 60%;    width: 13%;}
  .pic-group img:nth-child(8) { left: 55%;    width: 5%;  display: none;}
  .pic-group img:nth-child(9) { left: 75%;    width: 10%;}
}

</style>
