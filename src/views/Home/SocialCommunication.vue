<template>
  <div class="social-container">
    <div class="social-content">
      <div class="social-header">
        <span class="title">
          <img :src="titleImage" alt="社教传播" />
        </span>
        <a target="_blank" class="more" href="/fw/"></a>
      </div>
      <div class="social-body">
        <ul class="social-list">
          <li v-for="(item, index) in socialItems" :key="index">
            <a :href="item.link" target="_blank">
              <img :src="item.image" :alt="item.title" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const titleImage = new URL('@/assets/img/shejiaochuanbo202112.png', import.meta.url).href

const socialItems = [
  {
    title: '社会讲解',
    link: '/fw/ggjy/wzgbjww/shjj/',
    image: new URL('@/assets/img/social/xlmtjs_home_2022_7.jpg', import.meta.url).href
  },
  {
    title: '馆校合作',
    link: '/fw/hd/zxhd/gxhzhd/',
    image: new URL('@/assets/img/social/xlmtjs_home_2022_8.jpg', import.meta.url).href
  },
  {
    title: '让文物活起来',
    link: 'http://www.chnmuseum.cn/shxg/rwwhql/',
    image: new URL('@/assets/img/social/xlmtjs_home_2022_9.jpg', import.meta.url).href
  }
]
</script>

<style lang="scss" scoped>
.social-container {
  background: #721b28;
  padding: 0;
}

.social-content {
  width: 1200px;
  margin: 0 auto;
  background: #ffffff;
  padding: 0 65px;
  overflow: hidden;
}

.social-header {
  position: relative;
  text-align: center;
  padding: 31px 0 15px;
}

.social-header .title {
  display: inline-block;
}

.social-header .more {
  position: absolute;
  right: 0;
  bottom: 31px;
  width: 58px;
  height: 22px;
  background: url('@/assets/img/home-dmgb.png') no-repeat center;
}

.social-body {
  padding: 20px 0 40px;
}

.social-list {
  display: flex;
  justify-content: space-between;
  margin: 0 -10px;
  padding: 0;
  list-style: none;
}

.social-list li {
  width: 344px;
  height: 240px;
  margin: 0 10px;
  background-color: #efc8a8;
  overflow: hidden;
}

.social-list li img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.social-list li:hover img {
  transform: scale(1.05);
}
</style> 