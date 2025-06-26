<template>
  <div class="exhibition-container">
    <div class="exhibition-content">
      <div class="exhibition-header">
        <span class="title">
          <img :src="titleImage" alt="国博展览" />
        </span>
        <div class="exhibition-apply">
          <a href="/zl/zlsq/201901/t20190102_37011.shtml" target="_blank">展览申请</a>
        </div>
        <a target="_blank" class="more" href="/zl/zhanlanyugao/"></a>
      </div>
      
      <div class="exhibition-swiper">
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
            <div class="pic">
              <img :src="slide.image" :alt="slide.title">
              <a v-for="(link, idx) in slide.links" 
                 :key="idx"
                 :class="'syzllbt_tem0' + (idx + 1)"
                 :href="link.url"
                 target="_blank">
              </a>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <div class="exhibition-categories">
        <dl class="exhibition-category" v-for="(category, index) in categories" :key="index">
          <dt>
            <div class="category-swiper">
              <swiper
                :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
                :slides-per-view="1"
                :loop="true"
                :autoplay="{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                }"
                :pagination="{
                  clickable: true,
                  dynamicBullets: true
                }"
                :navigation="true"
              >
                <swiper-slide v-for="(item, idx) in category.items" :key="idx">
                  <a :href="item.link" target="_blank">
                    <img :src="item.image" :alt="item.title">
                  </a>
                </swiper-slide>
              </swiper>
            </div>
          </dt>
          <dd>
            <a :href="category.link" target="_blank">{{ category.title }}</a>
          </dd>
        </dl>
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

const titleImage = new URL('@/assets/img/zl2019_sdabiaoti5.png', import.meta.url).href

// 轮播图数据
const slides = [
  {
    image: new URL('@/assets/img/exhibition/2025homezhanlan_hz06-1.jpg', import.meta.url).href,
    title: '中国国家博物馆',
    links: [
      { url: 'https://www.chnmuseum.cn/zl/lszl/dywhxl/202506/t20250609_271879.shtml' },
      { url: 'https://www.chnmuseum.cn/portals/0/web/zt/202411mddy/' },
      { url: 'https://www.chnmuseum.cn/zl/lszl/lswhxl/202504/t20250430_271579.shtml' }
    ]
  }
]

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
      }
    ]
  },
  {
    title: '临时展览',
    link: '/zl/lszl/',
    items: [
      {
        title: '临时展览',
        link: '/zl/lszl/dywhxl/202506/t20250609_271879.shtml',
        image: new URL('@/assets/img/exhibition/P020250609314173212224.jpg', import.meta.url).href
      }
    ]
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
.exhibition-container {
  background: #721b28;
  padding: 0;
  margin: -1px 0 0;

  .exhibition-content {
    width: 1200px;
    margin: 0 auto;
    background: #ffffff;
    padding: 0 65px;
    overflow: hidden;

    .exhibition-header {
      position: relative;
      text-align: center;
      padding: 31px 0 15px;

      .title {
        display: inline-block;
      }

      .exhibition-apply {
        position: absolute;
        top: 32px;
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
        bottom: 31px;
        width: 58px;
        height: 28px;
        z-index: 100;
      }
    }

    .exhibition-swiper {
      :deep(.swiper) {
        width: 100%;
        height: 603px;
      }

      :deep(.swiper-slide) {
        .pic {
          position: relative;
          width: 100%;
          height: 100%;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          a {
            position: absolute;
            display: block;
            width: 100%;
            height: 33.33%;
            left: 0;
            z-index: 2;

            &.syzllbt_tem01 { top: 0; }
            &.syzllbt_tem02 { top: 33.33%; }
            &.syzllbt_tem03 { top: 66.66%; }
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
    }

    .exhibition-categories {
      display: flex;
      justify-content: space-between;
      padding: 20px 0 45px;
      margin: 0 -10px;

      .exhibition-category {
        flex: 1;
        margin: 0 10px;

        dt {
          .category-swiper {
            width: 340px;
            height: 320px;
            position: relative;
            overflow: hidden;

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
              width: 30px;
              height: 30px;
              background: rgba(0, 0, 0, 0.5);
              border-radius: 50%;
              
              &::after {
                font-size: 14px;
              }

              &:hover {
                background: rgba(0, 0, 0, 0.8);
              }
            }

            :deep(.swiper-pagination) {
              bottom: 10px !important;
              
              .swiper-pagination-bullet {
                width: 6px;
                height: 6px;
                background: rgba(255, 255, 255, 0.5);
                opacity: 0.7;
                margin: 0 4px !important;
                transition: all 0.3s ease;

                &-active {
                  opacity: 1;
                  background: #fff;
                  transform: scale(1.2);
                }
              }
            }
          }
        }

        dd {
          text-align: center;
          margin-top: 10px;

          a {
            color: #333;
            font-size: 16px;
            text-decoration: none;

            &:hover {
              color: #721b28;
            }
          }
        }
      }
    }
  }
}
</style> 