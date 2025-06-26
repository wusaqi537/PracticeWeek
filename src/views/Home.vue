<template>
  <div class="home-container">
    <Banner />
    <div class="main-content">
      <!-- 公告栏 -->
      <div class="announcement-wrapper">
        <Announcement />
      </div>
      <!-- 主内容区 -->
      <div class="content-wrapper">
        <div class="white-bg">
          <div class="nav-and-news">
            <div class="left-nav">
              <Navigation />
            </div>
            <div class="right-content">
              <HomeNews />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Banner from '@/views/Home/Banner.vue'
import Announcement from '@/views/Home/Announcement.vue'
import Navigation from '@/views/Home/Navigation.vue'
import HomeNews from '@/views/Home/News.vue'
</script>

<style lang="scss" scoped>
.home-container {
  width: 100%;
  min-width: 1200px;
  
  .main-content {
    width: 100%;
    background-color: #721b28;
    min-height: calc(100vh - 500px);

    .announcement-wrapper {
      width: 1200px;
      margin: 0 auto;
      position: relative;
      z-index: 2;
    }

    .content-wrapper {
      width: 1200px;
      margin: 0 auto;
      position: relative;
      z-index: 1;

      .white-bg {
        background-color: #fff;
        padding: 20px 0;

        .nav-and-news {
          width: 1200px;
          margin: 0 auto;
          display: flex;
          gap: 65px;
          padding: 0 65px;
          box-sizing: border-box;

          .left-nav {
            width: 110px;
            flex-shrink: 0;
          }

          .right-content {
            flex: 1;
          }
        }
      }
    }
  }
}
</style>
