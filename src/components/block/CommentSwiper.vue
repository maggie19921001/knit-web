<template>
    <swiper
        :loop="true"
        :slidesPerView="3"
        :spaceBetween="20"
        :freeMode="true"
        :navigation="false"
        :autoplay="{delay: 3000, disableOnInteraction: false}"
        :modules="modules"
        :breakpoints="{
            320: { slidesPerView: 1 }, 
            768: { slidesPerView: 2 }, 
            1024: { slidesPerView: 3 } 
        }"
        class="mySwiper"
    >
        <swiper-slide>
            <div class="card" style="width: 23rem;">
                <div class="card-body">
                <div class="card-top d-flex justify-content-start gap-2">
                    <img src="https://github.com/maggie19921001/knit-web/blob/main/images/element/comment_head.png?raw=true" alt="" class="align-self-start">
                    <div class="comment-name mt-3">
                    <h5 class="card-title">小敏</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                    </h6>
                    <p class="card-text">作為完全的初學者，我在這裡找到了非常詳細的教學影片，還有齊全的材料購買推薦。我完成了自己的作品，真的太感謝這個網站了！</p>
                    </div>
                </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>  
            <div class="card" style="width: 23rem;">
                <div class="card-body">
                <div class="card-top d-flex justify-content-start gap-2">
                    <img src="https://github.com/maggie19921001/knit-web/blob/main/images/element/comment_head.png?raw=true" alt="" class="align-self-start">
                    <div class="comment-name mt-3">
                    <h5 class="card-title">阿威</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                    </h6>
                    <p class="card-text">平台上的作品交流和學習資源非常豐富，甚至能夠學到一些國外的編織技法。每次來這裡都有新發現，讓我更愛編織了！</p>
                    </div>
                </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="card" style="width: 23rem;">
                <div class="card-body">
                <div class="card-top d-flex justify-content-start gap-2">
                    <img src="https://github.com/maggie19921001/knit-web/blob/main/images/element/comment_head.png?raw=true" alt="" class="align-self-start">
                    <div class="comment-name mt-3">
                    <h5 class="card-title">芷柔</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-half"></i>
                    </h6>
                    <p class="card-text">我是鉤針新手，這裡有很多高手分享的作品和編織圖，我可以參考不同作品，嘗試更多樣的創作，真的非常實用！</p>
                    </div>
                </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="card" style="width: 23rem;">
                <div class="card-body">
                <div class="card-top d-flex justify-content-start gap-2">
                    <img src="https://github.com/maggie19921001/knit-web/blob/main/images/element/comment_head.png?raw=true" alt="" class="align-self-start">
                    <div class="comment-name mt-3">
                    <h5 class="card-title">小宇</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                    </h6>
                    <p class="card-text">對於編織初學者來說，這裡就是寶庫！無論是入門教學還是材料購買，應有盡有。我可以輕鬆找到開始編織所需的一切，非常推薦！</p>
                    </div>
                </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="card" style="width: 23rem;">
                <div class="card-body">
                <div class="card-top d-flex justify-content-start gap-2">
                    <img src="https://github.com/maggie19921001/knit-web/blob/main/images/element/comment_head.png?raw=true" alt="" class="align-self-start">
                    <div class="comment-name mt-3">
                    <h5 class="card-title">Eric Chen</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-half"></i>
                    </h6>
                    <p class="card-text">這個網站不僅提供線上資源，還舉辦各種線上和實體活動。認識到很多志同道合的朋友，大家一起學習和分享，真的讓編織變得更有趣了！</p>
                    </div>
                </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="card" style="width: 23rem;">
                <div class="card-body">
                <div class="card-top d-flex justify-content-start gap-2">
                    <img src="https://github.com/maggie19921001/knit-web/blob/main/images/element/comment_head.png?raw=true" alt="" class="align-self-start">
                    <div class="comment-name mt-3">
                    <h5 class="card-title">琬琬</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                    </h6>
                    <p class="card-text">平台的儲存功能讓我可以記錄每個作品的進度，並且和其他人互相討論。這樣讓我在創作過程中更加有條理，也能從其他作品中學到新技巧！</p>
                    </div>
                </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="card" style="width: 23rem;">
                <div class="card-body">
                <div class="card-top d-flex justify-content-start gap-2">
                    <img src="https://github.com/maggie19921001/knit-web/blob/main/images/element/comment_head.png?raw=true" alt="" class="align-self-start">
                    <div class="comment-name mt-3">
                    <h5 class="card-title">Emilly</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                    </h6>
                    <p class="card-text">以前總是為了找合適的毛線跑遍各大手工藝店，現在在這裡就能找到各式毛線，還能直接連結到商家購買，節省時間又方便！推薦給每一位編織愛好者！</p>
                    </div>
                </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="card" style="width: 23rem;">
                <div class="card-body">
                <div class="card-top d-flex justify-content-start gap-2">
                    <img src="https://github.com/maggie19921001/knit-web/blob/main/images/element/comment_head.png?raw=true" alt="" class="align-self-start">
                    <div class="comment-name mt-3">
                    <h5 class="card-title">小白</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-half"></i>
                    </h6>
                    <p class="card-text">遇到卡關的時候在這裡問問題，大家都超級熱心解答，像是編織界的大家庭，有人一起學一起玩真好！</p>
                    </div>
                </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="card" style="width: 23rem;">
                <div class="card-body">
                <div class="card-top d-flex justify-content-start gap-2">
                    <img src="https://github.com/maggie19921001/knit-web/blob/main/images/element/comment_head.png?raw=true" alt="" class="align-self-start">
                    <div class="comment-name mt-3">
                    <h5 class="card-title">Eric Chen</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                    </h6>
                    <p class="card-text">作為完全的初學者，我在這裡找到了非常詳細的教學影片，還有齊全的材料購買推薦。我完成了自己的作品，真的太感謝這個網站了！</p>
                    </div>
                </div>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>
<script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/free-mode';
    import 'swiper/css/navigation';
  
    // import required modules
    import { FreeMode, Navigation, Autoplay } from 'swiper/modules';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      setup() {
        return {
          modules: [FreeMode, Navigation, Autoplay],
        };
      },
    };
</script>
<style scoped>
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

/* body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
} */

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: left;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>  