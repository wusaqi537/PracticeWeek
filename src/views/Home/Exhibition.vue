<template>
  <div class="exhibition-container">
    <div class="exhibition-content">
      <!-- 标题部分 -->
      <div class="exhibition-header">
        <div class="home-cgyy-head">
          <span class="title">
            <img :src="titleImage" alt="国博展览">
          </span>
          <div class="exhibition-apply">
            <a href="/zl/zlsq/201901/t20190102_37011.shtml" target="_blank">展览申请</a>
          </div>
          <a target="_blank" class="more" href="/zl/zhanlanyugao/"></a>
        </div>
      </div>

      <!-- 主展览图片部分 -->
      <div class="main-exhibition">
        <div class="main-image">
          <img :src="mainImage" alt="国博展览">
          <div class="exhibition-links">
            <a href="https://www.chnmuseum.cn/zl/lszl/dywhxl/202506/t20250609_271879.shtml" target="_blank" class="link-1"></a>
            <a href="https://www.chnmuseum.cn/portals/0/web/zt/202411mddy/" target="_blank" class="link-2"></a>
            <a href="https://www.chnmuseum.cn/zl/lszl/lswhxl/202504/t20250430_271579.shtml" target="_blank" class="link-3"></a>
          </div>
        </div>
      </div>

      <!-- 展览分类部分 -->
      <div class="exhibition-categories">
        <div v-for="(category, index) in categories" :key="index" class="category-item">
          <swiper
            :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
            :slides-per-view="1"
            :loop="true"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }"
            :pagination="{
              clickable: true,
              el: '.swiper-pagination',
              type: 'bullets'
            }"
            :navigation="{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              hideOnClick: true
            }"
            :speed="800"
            class="category-swiper"
          >
            <swiper-slide v-for="(item, idx) in category.items" :key="idx">
              <a :href="item.link" target="_blank">
                <img :src="item.image" :alt="item.title">
              </a>
            </swiper-slide>
          </swiper>
          <div class="category-title">
            <a :href="category.link" target="_blank">{{ category.title }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const SwiperAutoplay = Autoplay
const SwiperPagination = Pagination
const SwiperNavigation = Navigation

const titleImage = new URL('@/assets/img/zl2019_sdabiaoti5.png', import.meta.url).href
const mainImage = new URL('@/assets/img/exhibition/2025homezhanlan_hz06-1.jpg', import.meta.url).href

// 展览分类数据
const categories = [
  {
    title: '基本陈列',
    link: '/zl/jbcl/',
    items: [
      {
        title: '古代中国',
        link: 'http://www.chnmuseum.cn/portals/0/web/zt/gudai/default.html',
        image: new URL('@/assets/img/exhibition/W020190324793434153186.jpg', import.meta.url).href
      },
      {
        title: '复兴之路',
        link: '/zl/jbcl/fxzl/',
        image: new URL('@/assets/img/exhibition/P020250609314173212224.jpg', import.meta.url).href
      },
      {
        title: '中华文明展',
        link: '/zl/jbcl/zhwmz/',
        image: new URL('@/assets/img/exhibition/P020230718295777453037.jpg', import.meta.url).href
      }
    ]
  },
  {
    title: '专题展览',
    link: '/zl/ztcl/',
    items: [
      {
        title: '书画展览',
        link: '/zl/ztcl/202501/t20250107_270853.shtml',
        image: new URL('@/assets/img/exhibition/P020250107402529120883.jpg', import.meta.url).href
      },
      {
        title: '红色经典文物展',
        link: '/zl/ztcl/hswhzl/',
        image: new URL('@/assets/img/exhibition/P020230529382557358162.jpg', import.meta.url).href
      },
      {
        title: '馆藏精品展',
        link: '/zl/ztcl/gcjpz/',
        image: new URL('@/assets/img/exhibition/P020230818453966648181.jpg', import.meta.url).href
      }
    ]
  },
  {
    title: '临时展览',
    link: '/zl/lszl/',
    items: [
      {
        title: '临时展览1',
        link: '/zl/lszl/dywhxl/202506/t20250609_271879.shtml',
        image: new URL('@/assets/img/exhibition/P020250609314173212224.jpg', import.meta.url).href
      },
      {
        title: '临时展览2',
        link: '/zl/lszl/202501/',
        image: new URL('@/assets/img/exhibition/P020240108358607204827.jpg', import.meta.url).href
      },
      {
        title: '临时展览3',
        link: '/zl/lszl/202502/',
        image: new URL('@/assets/img/exhibition/P020250107402529120883.jpg', import.meta.url).href
      }
    ]
  }
]
</script>

<style lang="scss" scoped>
.exhibition-container {
  background: #721b28;
  padding: 0;
  margin: 0;

  .exhibition-content {
    width: 1200px;
    margin: 0 auto;
    background: #ffffff;

    .exhibition-header {
      background: #ffffff;
      text-align: center;
      padding: 0 65px;
      margin-bottom: 20px;

      .home-cgyy-head {
        position: relative;
        padding: 10px 0;

        .title {
          display: inline-block;
          
          img {
            height: 28px;
          }
        }

        .exhibition-apply {
          position: absolute;
          top: 8px;
          right: 70px;
          border-radius: 5px;
          background-color: #8d343c;
          padding: 6px 12px;

          a {
            color: #fff;
            font-size: 22px;
            text-decoration: none;

            &:hover {
              opacity: 0.9;
            }
          }
        }

        .more {
          position: absolute;
          right: 0;
          bottom: 5px;
          width: 58px;
          height: 28px;
          text-decoration: none;
          color: #8d343c;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          
          &::after {
            content: "更多";
          }

          &:hover {
            color: #721b28;
          }
        }
      }
    }

    .main-exhibition {
      padding: 0;
      margin-bottom: 70px;

      .main-image {
        position: relative;
        width: 1200px;
        height: auto;

        img {
          width: 100%;
          height: auto;
          display: block;
        }

        .exhibition-links {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;

          a {
            position: absolute;
            display: block;
            width: 33.33%;
            height: 100%;
            cursor: pointer;

            &.link-1 { left: 0; }
            &.link-2 { left: 33.33%; }
            &.link-3 { left: 66.66%; }
          }
        }
      }
    }

    .exhibition-categories {
      display: flex;
      justify-content: space-between;
      padding: 0 65px 20px;
      gap: 15px;

      .category-item {
        flex: 1;
        text-align: center;

        .category-swiper {
          width: 340px;
          height: 320px;

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }

        .category-title {
          text-align: center;
          margin-top: 8px;
          font-size: 18px;
          font-weight: bold;

          a {
            color: #333;
            text-decoration: none;

            &:hover {
              color: #8d343c;
            }
          }
        }
      }
    }
  }
}

:deep(.swiper) {
  width: 100%;
  height: 100%;
  position: relative;
}

:deep(.swiper-pagination) {
  bottom: 5px !important;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #fff;
  background: rgba(0, 0, 0, 0.3);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  
  &::after {
    font-size: 16px;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
}

:deep(.swiper-pagination-bullet) {
  background: #fff;
  opacity: 0.5;
  margin: 0 4px;
}

:deep(.swiper-pagination-bullet-active) {
  background: #fff;
  opacity: 1;
}
</style> 