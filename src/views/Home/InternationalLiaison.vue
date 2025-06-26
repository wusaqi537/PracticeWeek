<template>
  <div class="liaison-container">
    <div class="liaison-content">
      <div class="liaison-header">
        <span class="title">
          <img :src="titleImage" alt="国际联络" />
        </span>
      </div>
      <div class="liaison-body">
        <ul class="liaison-list">
          <li v-for="(item, index) in liaisonItems" :key="index">
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
const titleImage = new URL('@/assets/img/nxue_home_pic4.png', import.meta.url).href

const liaisonItems = [
  {
    title: '文化客厅',
    link: '/shxg/gjll/whkt/',
    image: new URL('@/assets/img/liaison/bmfw_20240611.jpg', import.meta.url).href
  },
  {
    title: '多边合作',
    link: '/shxg/gjll/gjzz/',
    image: new URL('@/assets/img/liaison/bmfw_201904026.jpg', import.meta.url).href
  },
  {
    title: '交流展览',
    link: '/shxg/gjll/jlzl/',
    image: new URL('@/assets/img/liaison/bmfw_201904028.jpg', import.meta.url).href
  }
]
</script>

<style scoped>
.liaison-container {
  background: #721b28;
  padding: 0;
}

.liaison-content {
  width: 1200px;
  margin: 0 auto;
  background: #ececec; /* 修改为浅灰色背景 */
  padding: 0 65px;
  overflow: hidden;
}

.liaison-header {
  position: relative;
  text-align: center;
  padding: 31px 0 15px;
}

.liaison-header .title {
  display: inline-block;
}

.liaison-body {
  padding: 20px 0 40px;
}

.liaison-list {
  display: flex;
  justify-content: space-between;
  margin: 0 -10px;
  padding: 0;
  list-style: none;
}

.liaison-list li {
  width: 344px;
  height: 240px;
  margin: 0 10px;
  overflow: hidden;
}

.liaison-list li img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.liaison-list li:hover img {
  transform: scale(1.05);
}
</style> 