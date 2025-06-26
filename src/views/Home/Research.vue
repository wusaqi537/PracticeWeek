<template>
  <div class="research-container">
    <div class="research-content">
      <div class="research-header">
        <span class="title">
          <img :src="titleImage" alt="学术研究" />
        </span>
        <a target="_blank" class="more" href="/yj/"></a>
      </div>
      <div class="research-body">
        <ul class="research-list">
          <li v-for="(item, index) in researchItems" :key="index">
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
const titleImage = new URL('@/assets/img/zl2019_sdabiaoti4.png', import.meta.url).href

const researchItems = [
  {
    title: '专家学者',
    link: '/yj/zjxz/',
    image: new URL('@/assets/img/research/xlmtjs_home_2022_4_xg.png', import.meta.url).href
  },
  {
    title: '科研成果',
    link: '/yj/xscg/',
    image: new URL('@/assets/img/research/xlmtjs_home_2022_5_xg.png', import.meta.url).href
  },
  {
    title: '科研管理',
    link: '/yj/yjjg/',
    image: new URL('@/assets/img/research/xlmtjs_home_2022_6_xg.png', import.meta.url).href
  }
]
</script>

<style scoped>
.research-container {
  background: #721b28;
  padding: 0 0 40px;
}

.research-content {
  width: 1200px;
  margin: 0 auto;
  background: #ffffff;
  padding: 0 65px;
  overflow: hidden;
}

.research-header {
  position: relative;
  text-align: center;
  padding: 31px 0 15px;
}

.research-header .title {
  display: inline-block;
}

.research-header .more {
  position: absolute;
  right: 0;
  bottom: 31px;
  width: 58px;
  height: 22px;
}

.research-body {
  padding: 20px 0 40px;
}

.research-list {
  display: flex;
  justify-content: space-between;
  margin: 0 -10px;
  padding: 0;
  list-style: none;
}

.research-list li {
  width: 344px;
  height: 240px;
  margin: 0 10px;
  background-color: #efc8a8;
  overflow: hidden;
}

.research-list li img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.research-list li:hover img {
  transform: scale(1.05);
}
</style> 