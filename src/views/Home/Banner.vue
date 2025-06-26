<template>
  <div class="banner-container">
    <swiper
      :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation, SwiperEffect]"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      :creative-effect="{
        prev: {
          scale: 0.8,
          translate: ['-100%', 0, 0],
        },
        next: {
          scale: 0.8,
          translate: ['100%', 0, 0],
        },
      }"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }"
      :pagination="{
        clickable: true,
        dynamicBullets: true
      }"
      :navigation="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="slide-content">
          <img :src="slide.image" >
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation, EffectCreative } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-creative'

// 导入图片
import banner1 from '@/assets/img/banner/1.jpg'
import banner2 from '@/assets/img/banner/2.jpg'
import banner3 from '@/assets/img/banner/3.jpg'
import banner4 from '@/assets/img/banner/4.jpg'

// Swiper模块
const SwiperAutoplay = Autoplay
const SwiperPagination = Pagination
const SwiperNavigation = Navigation
const SwiperEffect = EffectCreative

// 轮播图数据
const slides = [
  {
    image: banner1,
  },
  {
    image: banner2,
  },
  {
    image: banner3,
  },
  {
    image: banner4,
  }
]

const onSwiper = (swiper: any) => {
  console.log(swiper)
}

const onSlideChange = () => {
  console.log('slide change')
}
</script>

<style lang="scss" scoped>
.banner-container {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;

  :deep(.swiper) {
    width: 100%;
    height: 100%;
  }

  :deep(.swiper-slide) {
    .slide-content {
      position: relative;
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.8s ease;
      }
    }

    &.swiper-slide-active {
      img {
        transform: scale(1.1);
      }
    }
  }

  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    color: #333;
    transition: all 0.3s ease;
    top: auto;
    bottom: 40px;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    margin-top: 0;
    
    &::after {
      font-size: 16px;
    }

    &:hover {
      background-color: #fff;
      color: var(--primary-color);
    }
  }

  :deep(.swiper-button-prev) {
    left: calc(50% - 100px);
  }

  :deep(.swiper-button-next) {
    right: calc(50% - 100px);
  }

  :deep(.swiper-pagination) {
    bottom: 50px !important;
    width: auto !important;
    left: 50% !important;
    transform: translateX(-50%);
    
    .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
      background-color: rgba(255, 255, 255, 0.8);
      opacity: 0.7;
      margin: 0 6px !important;
      transition: all 0.3s ease;

      &-active {
        opacity: 1;
        background-color: #fff;
        transform: scale(1.2);
      }
    }
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
