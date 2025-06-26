<!-- 示例：src/views/Exhibition3D.vue -->
<template>
  <div class="exhibition-page">
    <div class="exhibition-content">
      <!-- 轮播图部分 -->
      <swiper :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }" :loop="true" :spaceBetween="10" :navigation="true" :modules="[FreeMode, Navigation, Thumbs]" class="mySwiper2"
        @slideChange="onSlideChange">
        <swiper-slide v-for="(item, index) in wwData" :key="index" class="img" @click="handleDetail(item)">
          <img :src="item.img" />
          <!-- 收藏按钮 -->
          <button class="favorite-btn" @click.stop="togglefavorite(item)">
            <span v-if="isFav(item)">★</span>
            <span v-else>☆</span>
          </button>
        </swiper-slide>
      </swiper>

      <!-- 展品介绍部分 -->
      <div class="exhibit-info">
        <h2 class="title">{{ wwData[currentIndex].title }}</h2>
        <div class="detail">{{ wwData[currentIndex].detail }}</div>
      </div>
    </div>
  </div>
  <!-- 全屏弹窗 -->
  <div v-if="showDialog" class="dialog-mask" @click.self="showDialog = false">
    <div class="dialog-content">
      <div class="dialog-close" @click="showDialog = false">×</div>
      <h2 class="dialog-title">{{ dialogItem?.title }}</h2>
      <div class="model-container">
        <ModelViewer v-if="dialogItem" :modelPath="dialogItem.model" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import wwData from '@/data/ww';
import ModelViewer from '@/components/ModelViewer.vue';

interface ExhibitionItem {
  title: string;
  img: string;
  model: string;
  detail: string;
}

const showDialog = ref(false);
const dialogItem = ref<ExhibitionItem | null>(null);
const currentIndex = ref(0);

const handleDetail = (item: ExhibitionItem) => {
  dialogItem.value = item;
  showDialog.value = true;
};

const fav = ref<string[]>(JSON.parse(localStorage.getItem('fav') || '[]'));

const isFav = (item: ExhibitionItem) => {
  return fav.value.includes(item.title);
};

const togglefavorite = (item: ExhibitionItem) => {
  const idx = fav.value.indexOf(item.title);
  if (idx > -1) {
    fav.value.splice(idx, 1);
  } else {
    fav.value.push(item.title);
  }
  localStorage.setItem('fav', JSON.stringify(fav.value));
};

const onSlideChange = (swiper: any) => {
  currentIndex.value = swiper.realIndex;
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
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        display: block;
        width: auto;
        height: 100%;
        max-height: 500px;
        object-fit: contain;
      }
    }

    .mySwiper2 {
      height: 500px;
      width: 100%;

      .img {
        cursor: pointer;
      }
    }

    .exhibit-info {
      margin-top: 20px;
      padding: 20px;
      background: #f8f8f8;
      border-radius: 8px;

      .title {
        font-size: 24px;
        font-weight: bold;
        color: #8d7357;
        margin-bottom: 16px;
        text-align: center;
      }

      .detail {
        font-size: 16px;
        line-height: 1.8;
        color: #666;
        text-align: justify;
        white-space: pre-wrap;
        
        p {
          margin-bottom: 16px;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}

.dialog-mask {
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  .dialog-content {
    background: #fff;
    border-radius: 12px;
    padding: 32px;
    width: 90%;
    max-width: 1000px;
    height: 90vh;
    position: relative;
    overflow: hidden;

    .dialog-title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 16px;
      color: #333;
      padding-right: 40px;
    }

    .model-container {
      width: 100%;
      height: calc(100% - 60px);
      background: #000;
      border-radius: 8px;
      overflow: hidden;
    }

    .dialog-close {
      position: absolute;
      right: 16px;
      top: 16px;
      font-size: 28px;
      color: #888;
      cursor: pointer;
      width: 32px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      z-index: 10;

      &:hover {
        background: rgba(255, 255, 255, 0.2);
        color: #333;
      }
    }
  }
}
</style>