<template>
  <!-- 最外层容器，占满视口宽度 -->
  <div class="announcement-container">
    <!-- 公告栏背景 -->
    <div class="notice-bg">
      <!-- 内容区域固定宽度 -->
      <div class="notice-content">
        <div class="notice-title">
          <img src="@/assets/img/notice-title.png" alt="公告">
        </div>
        <div class="notice-list">
          <div class="notice-item">
            <a href="#" target="_blank">国家博物馆关于施行预约账号实名认证预约制度的公告<span>2025/04/15</span></a>
          </div>
        </div>
        <div class="notice-more">
          <a href="#" target="_blank"></a>
        </div>
      </div>
    </div>

    <!-- 开放时间背景 -->
    <div class="opening-bg">
      <!-- 内容区域固定宽度 -->
      <div class="opening-content">
        <div class="time-info">
          <dl class="opening-time">
            <dt>
              <span>开馆时间</span>
              <span class="stop-entry">停止入馆</span>
              <span class="closing-time">闭馆时间</span>
            </dt>
            <dd class="time-display">
              <img src="@/assets/img/opening-hours.png" alt="09:00-16:30-17:30">
            </dd>
            <dd>
              <p>每周一例行闭馆，国家法定节假日除外</p>
            </dd>
          </dl>
        </div>
        <div class="nav-buttons">
          <a href="#" target="_blank">全景国博</a>
          <a href="#" target="_blank">参观预约</a>
          <a href="#" target="_blank">交通地理</a>
          <a href="#" target="_blank">正在展出</a>
          <a href="#" target="_blank">观众服务</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.announcement-container {
  width: 100%;
  min-width: 1200px;
  background: #8b2432;

  // 公告栏背景
  .notice-bg {
    width: 100%;
    height: 80px;
    background: #721b28;
    display: flex;
    justify-content: center;

    // 内容区域
    .notice-content {
      width: 1200px;
      height: 100%;
      display: flex;
      align-items: center;
      background: #721b28;

      .notice-title {
        width: 192px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: 1px solid rgba(255,255,255,0.2);

        img {
          height: 35px;
          margin-top: 7px;
          transform: scale(0.8);
          transform-origin: left center;
        }
      }

      .notice-list {
        flex: 1;
        padding-left: 20px;

        .notice-item {
          height: 28px;
          margin-top: 26px;

          a {
            font-size: 20px;
            color: #fff;
            text-decoration: none;
            background: url(@/assets/img/home-gbgg-list-style.png) no-repeat left center;
            padding-left: 15px;

            span {
              padding-left: 20px;
              color: #ef5a24;
            }
          }
        }
      }

      .notice-more {
        width: 108px;
        height: 100%;
        border-left: 1px solid rgba(255,255,255,0.2);

        a {
          display: block;
          width: 100%;
          height: 100%;
          position: relative;
          color: #fff;
          text-decoration: none;
          
          &::after {
            content: "更多";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 16px;
          }

          &:hover {
            background: rgba(255,255,255,0.1);
          }
        }
      }
    }
  }

  // 开放时间背景
  .opening-bg {
    width: 100%;
    background: #721b28;
    display: flex;
    justify-content: center;

    // 内容区域
    .opening-content {
      width: 1200px;
      padding: 80px 65px 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #fff;

      .time-info {
        .opening-time {
          dt {
            display: flex;
            gap: 80px;
            font-size: 16px;
            color: #707070;
            padding-right: 20px;
          }

          .time-display {
            margin: 10px 0;

            img {
              height: 35px;
            }
          }

          p {
            font-size: 16px;
            color: #7d1e1e;
          }
        }
      }

      .nav-buttons {
        display: flex;
        gap: 20px;
        padding-left: 40px;

        a {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 1px solid #7d1e1e;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #7d1e1e;
          text-decoration: none;
          font-size: 16px;
          transition: all 0.3s ease;

          &:hover {
            background: #7d1e1e;
            color: #fff;
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style> 