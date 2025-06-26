<template>
  <div class="exhibition-page">
    <div class="exhibition-content">
      <swiper :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }" :loop="true" :spaceBetween="10" :navigation="true" :modules="[FreeMode, Navigation, Thumbs]" class="mySwiper2"
        @slideChange="onSlideChange" ref="mainSwiperRef">
        <swiper-slide v-for="item in wwData" class="img">
          <img :src="item.img" />
          <!-- 收藏按钮 -->
          <button class="favorite-btn">
            <span v-if="true">★</span>
            <span v-else>☆</span>
          </button>
        </swiper-slide>
      </swiper>
      <!-- 你可以在这里添加 3D 模型展示的组件或代码 -->
    </div>
  </div>
</template>

<script setup lang="ts">
interface Item {
  title: string;
  img: string;
  detail: string;
}
import { ref, computed } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import wwData from '@/data/ww.ts';

const currentIndex = ref(0);

// Swiper切换时更新索引
const onSlideChange = (params: any) => {
  currentIndex.value = params.realIndex
};

</script>

<style lang="scss" scoped>
.exhibition-page {
  background-color: #721b28;
  padding-top: 144px;

  .exhibition-content {
    width: 1200px;
    padding: 20px;
    min-height: calc(100vh - 200px);
    background: #fff;
    margin: 0 auto;

    .favorite-btn {
      position: absolute;
      top: 16px;
      right: 16px;
      background: rgba(255, 255, 255, 0.8);
      border: none;
      border-radius: 50%;
      width: 36px;
      height: 36px;
      font-size: 22px;
      color: #bf272d;
      cursor: pointer;
      z-index: 2;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

      &.active {
        color: #ffb400;
        background: #fffbe6;
      }

      &:hover {
        background: #fff3cd;
      }
    }

    .swiper {
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #444;

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

    body {
      background: #000;
      color: #000;
    }

    .swiper {
      width: 100%;
      height: 300px;
      margin-left: auto;
      margin-right: auto;
    }

    .swiper-slide {
      background-size: cover;
      background-position: center;
    }

    .mySwiper2 {
      height: 800px;
      width: 100%;

      .img {
        cursor: pointer;
      }
    }
  }
}
</style>
