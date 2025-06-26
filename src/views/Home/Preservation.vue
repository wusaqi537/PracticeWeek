<template>
  <div class="preservation-container">
    <!-- 标题和公告部分 -->
    <div class="djxx-zxhd-box" style="background:#ffffff; padding:0px 65px 0 65px;">
      <div class="home-cgyy-head" style="text-align: center;">
        <span class="title">
          <img src="@/assets/img/zl2019_sdabiaoti3.png" alt="国博保管">
        </span>
        <a class="more" href="/zp/"></a>
        <div class="collection-catalog">
          <a href="http://www.chnmuseum.cn/portals/0/web/zt/cangpin/colletionlist.html" target="_blank">藏品总目</a>
        </div>
      </div>
    </div>

    <!-- Swiper轮播图部分 -->
    <div class="preservation-content" style="background-color: #ffffff; padding: 20px 63px 40px 63px;">
      <div class="preservation-swiper">
        <swiper
          :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
          :slides-per-view="1"
          :loop="true"
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
            <a :href="slide.link" target="_blank" :title="slide.title">
              <img :src="slide.image" :alt="slide.title">
            </a>
          </swiper-slide>
        </swiper>
        <a class="collection-more" href="/zp/#znjdlsj" target="_blank">点击欣赏更多馆藏精品</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Swiper模块
const SwiperAutoplay = Autoplay
const SwiperPagination = Pagination
const SwiperNavigation = Navigation

// 轮播图数据
const slides = [
  {
    image: new URL('@/assets/img/preservation/W020220721376938122860.jpg', import.meta.url).href,
    title: '鹰形陶鼎',
    link: '//www.chnmuseum.cn/zp/zpml/kgfjp/202008/t20200824_247248.shtml'
  },
  {
    image: new URL('@/assets/img/preservation/W020221026559113804110.jpg', import.meta.url).href,
    title: '鹳鱼石斧图彩绘陶缸',
    link: 'https://www.chnmuseum.cn/zp/zpml/kgfjp/202008/t20200824_247232.shtml'
  },
  {
    image: new URL('@/assets/img/preservation/W020220701324482617325.jpg', import.meta.url).href,
    title: '仰韶文化 船形彩陶壶',
    link: 'https://www.chnmuseum.cn/zp/zpml/kgfjp/202008/t20200824_247229.shtml'
  },
  {
    image: new URL('@/assets/img/preservation/W020240603327502434048.jpg', import.meta.url).href,
    title: '玉龙',
    link: 'https://www.chnmuseum.cn/zp/zpml/kgfjp/202107/t20210722_250793.shtml'
  },
  {
    image: new URL('@/assets/img/preservation/W020220701324594038285.jpg', import.meta.url).href,
    title: '"后母戊"青铜方鼎',
    link: 'https://www.chnmuseum.cn/zp/zpml/kgfjp/202008/t20200824_247255.shtml'
  }
]

const titleImage = new URL('@/assets/img/zl2019_sdabiaoti3.png', import.meta.url).href
const moreLink = '/zp/'

const onSwiper = (swiper: any) => {
  console.log(swiper)
}

const onSlideChange = () => {
  console.log('slide change')
}
</script>

<style lang="scss" scoped>
.preservation-container {
  background: #721b28;
  margin: -20px 0 0;
  padding: 0;

  .djxx-zxhd-box {
    width: 1200px;
    margin: 0 auto;

    .home-cgyy-head {
      position: relative;
      padding: 31px 0 15px;

      .title {
        display: inline-block;
      }

      .more {
        position: absolute;
        right: 0;
        bottom: 31px;
        width: 58px;
        height: 28px;
        z-index: 100;
      }

      .collection-catalog {
        position: absolute;
        top: 32px;
        right: 70px;
        border-radius: 5px;
        font-size: 22px;
        background-color: #8d343c;
        padding: 6px 12px;

        a {
          color: #fff;
          font-size: 22px;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .preservation-content {
    width: 1200px;
    margin: 0 auto;
    background: #ffffff;
    padding: 0 65px;
    overflow: hidden;

    .preservation-swiper {
      position: relative;
      width: 100%;
      height: 603px;

      :deep(.swiper) {
        width: 100%;
        height: 100%;
      }

      :deep(.swiper-slide) {
        a {
          display: block;
          width: 100%;
          height: 100%;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }

      :deep(.swiper-button-next),
      :deep(.swiper-button-prev) {
        color: #fff;
        transition: all 0.3s ease;
        width: 40px;
        height: 40px;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        
        &::after {
          font-size: 16px;
        }

        &:hover {
          background: rgba(0, 0, 0, 0.8);
        }
      }

      :deep(.swiper-pagination) {
        bottom: 20px !important;
        
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 0.7;
          margin: 0 6px !important;
          transition: all 0.3s ease;

          &-active {
            opacity: 1;
            background: #fff;
            transform: scale(1.2);
          }
        }
      }

      .collection-more {
        position: absolute;
        bottom: 20px;
        right: 20px;
        z-index: 10;
        color: #fff;
        font-size: 16px;
        text-decoration: none;
        background: rgba(0, 0, 0, 0.5);
        padding: 8px 15px;
        border-radius: 20px;
        transition: all 0.3s ease;

        &:hover {
          background: rgba(0, 0, 0, 0.8);
        }
      }
    }
  }
}
</style> 