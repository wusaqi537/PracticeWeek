<template>
  <div class="creative-container">
    <div class="creative-content">
      <div class="creative-header">
        <span class="title">
          <img :src="titleImage" alt="国博文创" />
        </span>
        <a target="_blank" class="more" href="/wc/"></a>
      </div>
      <div class="creative-body">
        <ul class="creative-list">
          <li v-for="(item, index) in creativeItems" :key="index">
            <a :href="item.link" target="_blank">
              <img :src="item.image" :alt="item.title" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const titleImage = new URL('@/assets/img/sy_cz_2019_title2.png', import.meta.url).href

const creativeItems = [
  {
    title: '文创设计',
    link: 'https://mall.jd.com/index-11676078.html',
    image: new URL('@/assets/img/creative/xlmtjs_home_2022_10.jpg', import.meta.url).href
  },
  {
    title: '饮食文化',
    link: '/wc/yswh/201903/t20190331_97465.shtml',
    image: new URL('@/assets/img/creative/xlmtjs_home_2022_11.jpg', import.meta.url).href
  },
  {
    title: '展览制作',
    link: '/wc/whsy/201903/t20190331_97464.shtml',
    image: new URL('@/assets/img/creative/xlmtjs_home_2022_12.jpg', import.meta.url).href
  }
]
</script>

<style scoped>
.creative-container {
  background: #721b28;
  padding: 0;
}

.creative-content {
  width: 1200px;
  margin: 0 auto;
  background: #ffffff; /* 使用白色背景 */
  padding: 0 65px;
  overflow: hidden;
}

.creative-header {
  position: relative;
  text-align: center;
  padding: 31px 0 15px;
}

.creative-header .title {
  display: inline-block;
}

.creative-header .more {
  position: absolute;
  right: 0;
  bottom: 31px;
  width: 58px;
  height: 22px;
  text-decoration: none;
  color: #979797;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.creative-header .more::after {
  content: "更多";
}

.creative-header .more:hover {
  color: #721b28;
}

.creative-body {
  padding: 20px 0 40px;
}

.creative-list {
  display: flex;
  justify-content: space-between;
  margin: 0 -10px;
  padding: 0;
  list-style: none;
}

.creative-list li {
  width: 344px;
  height: 240px;
  margin: 0 10px;
  overflow: hidden;
}

.creative-list li img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.creative-list li:hover img {
  transform: scale(1.05);
}
</style> 