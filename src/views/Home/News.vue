<template>
  <div class="home-gbxw">
    <!-- 要闻部分 -->
    <div class="home-gbxw-lft">
      <div class="home-gbxw-head">
        <span class="title">
          <img src="@/assets/img/zl2019_sdabiaoti1.png" alt="要闻">
        </span>
        <a target="_blank" class="more" href="/zx/xingnew/"></a>
      </div>
      <div class="home-gbxw-list">
        <ul class="teshuchuliuli">
          <li v-for="(item, index) in newsList" :key="index">
            <a target="_blank" :href="item.link" :title="item.title">{{ item.title }}</a>
            <span class="time">{{ item.date }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 轮播图展示部分 -->
    <div class="home-gbxw-right">
      <div class="news-images">
        <a v-for="(item, index) in carouselItems" 
           :key="index"
           :href="item.link"
           class="image-item"
           target="_blank">
          <img :src="item.imgSrc" :alt="item.title">
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'HomeNews'
})

import { ref } from 'vue'
import zhutijiaoyu from '@/assets/img/zhutijiaoyu-xuexi202310.png'
import zhwmyz from '@/assets/img/zhwmyz-bar2025into.png'
import zhanlan from '@/assets/img/202506home_zx.png'

const newsList = ref([
  {
    id: 1,
    date: '2024-03-20',
    title: '主题教育学习成果展',
    link: '/news/detail/1'
  },
  {
    id: 2,
    date: '2024-03-19',
    title: '中华文明云展启动',
    link: '/news/detail/2'
  },
  {
    id: 3,
    date: '2024-03-18',
    title: '2025年展览预告',
    link: '/news/detail/3'
  }
])

const carouselItems = ref([
  {
    imgSrc: zhutijiaoyu,
    title: '主题教育学习',
    link: '/news/detail/1'
  },
  {
    imgSrc: zhwmyz,
    title: '中华文明云展',
    link: '/news/detail/2'
  },
  {
    imgSrc: zhanlan,
    title: '展览预告',
    link: '/news/detail/3'
  }
])
</script>

<style lang="scss" scoped>
.home-gbxw {
  display: flex;
  justify-content: space-between;
  background: #fff;
  margin-top: 20px;

  .home-gbxw-lft {
    width: 573px;
    
    .home-gbxw-head {
      padding: 31px 0 15px;
      position: relative;
      border-bottom: 1px solid #e5e5e5;

      .title img {
        height: 30px;
      }

      .more {
        position: absolute;
        right: 0;
        bottom: 20px;
        width: 20px;
        height: 20px;
        background: url('@/assets/img/more.png') no-repeat center;
      }
    }

    .home-gbxw-list {
      .teshuchuliuli {
        padding-top: 15px;

        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;

          a {
            width: 512px;
            color: #333;
            text-decoration: none;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 14px;

            &:hover {
              color: #8B1F23;
            }
          }

          .time {
            color: #999;
            font-size: 14px;
            width: 60px;
            text-align: right;
          }
        }
      }
    }
  }

  .home-gbxw-right {
    width: 355px;
    margin-top: 31px;

    .news-images {
      display: flex;
      flex-direction: column;
      gap: 15px;

      .image-item {
        display: block;
        width: 100%;
        height: 130px;
        overflow: hidden;
        border-radius: 4px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        &:hover img {
          transform: scale(1.05);
        }
      }
    }
  }
}
</style> 