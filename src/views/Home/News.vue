<template>
  <div class="home-gbxw">
    <!-- 要闻部分 -->
    <div class="home-gbxw-lft" style="width: 573px; margin-left: -42px;">
      <div class="home-gbxw-head" style="width: 573px; padding: 31px 0 15px;">
        <span class="title">
          <img src="@/assets/img/zl2019_sdabiaoti1.png" alt="要闻">
        </span>
        <a target="_blank" class="more" href="/zx/xingnew/"></a>
      </div>
      <div class="home-gbxw-list">
        <ul class="teshuchuliuli" style="padding-top: 3px;">
          <li v-for="(item, index) in newsList" :key="index">
            <a target="_blank" :href="item.link" :title="item.title">{{ item.title }}</a>
            <span class="time" style="width: 60px;">{{ item.date }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 右侧图片部分 -->
    <div class="gbxw-banner" style="width: 355px; margin-top: 85px; position: absolute; right: 35px;">
        <a v-for="(item, index) in carouselItems" 
           :key="index"
           :href="item.link"
         :style="{
           display: 'block',
           marginTop: index === 0 ? '0px' : '10px'
         }"
           target="_blank">
        <img :src="item.imgSrc" :alt="item.title" :style="{ width: '355px', height: index === 2 ? '130px' : 'auto' }">
        </a>
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
    date: '22/7/9',
    title: '习近平给中国国家博物馆的老专家回信强调 推动文物活化利用推进文明',
    link: '#'
  },
  {
    id: 2,
    date: '23/10/9',
    title: '习近平文化思想首次提出',
    link: '#'
  },
  {
    id: 3,
    date: '24/7/21',
    title: '中共中央关于进一步全面深化改革 推进中国式现代化的决定',
    link: '#'
  },
  {
    id: 4,
    date: '24/8/7',
    title: '深化文化体制机制改革',
    link: '#'
  },
  {
    id: 5,
    date: '24/10/16',
    title: '深化文化和旅游领域改革 加快建设社会主义文化强国',
    link: '#'
  },
  {
    id: 6,
    date: '25/6/25',
    title: 'AI文物活化微短剧：小"盔"驹两岁从军',
    link: '#'
  },
  {
    id: 7,
    date: '25/6/25',
    title: '2025年国博青年干部培训班在浙江红船干部学院顺利举办',
    link: '#'
  },
  {
    id: 8,
    date: '25/6/25',
    title: '国博公共考古体验营开始报名',
    link: '#'
  },
  {
    id: 9,
    date: '25/6/24',
    title: '国博展讯 | "宇宙考古：时空探索"展览即将展出',
    link: '#'
  },
  {
    id: 10,
    date: '25/6/24',
    title: '购买正版国博凤冠冰箱贴，请认准这些官方渠道',
    link: '#'
  }
])

const carouselItems = ref([
  {
    imgSrc: zhutijiaoyu,
    title: '主题教育学习',
    link: '#'
  },
  {
    imgSrc: zhwmyz,
    title: '中华文明云展',
    link: '#'
  },
  {
    imgSrc: zhanlan,
    title: '展览预告',
    link: '#'
  }
])
</script>

<style lang="scss" scoped>
.home-gbxw {
  display: flex;
  background: #fff;
  width: 944px;
  margin: 0 auto;
  position: relative;

  .home-gbxw-lft {
    .home-gbxw-head {
      position: relative;
      border-bottom: 3px solid #8d343c;

      .title {
        display: block;
        img {
          height: 28px;
        }
      }

      .more {
        position: absolute;
        right: 0;
        bottom: 31px;
        height: 28px;
        z-index: 100;
        background: url('@/assets/img/home-gbxw-more-bg.png') no-repeat center bottom;
        padding-bottom: 3px;
        font-size: 16px;
        padding-left: 5px;
        float: right;
        text-align: right;
        color: #979797;
      }
    }

    .home-gbxw-list {
      .teshuchuliuli {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          border-bottom: 1px solid #e5e5e5;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;

          a {
            flex: 1;
            color: #333;
            text-decoration: none;
            font-size: 16px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding-right: 15px;
            line-height: 24px;

            &:hover {
              color: #721b28;
            }
          }

          .time {
            color: #999;
            font-size: 14px;
            text-align: right;
            line-height: 24px;
          }
        }
      }
    }
  }

  .gbxw-banner {
    img {
        display: block;
      max-width: 100%;
    }
  }
}
</style> 