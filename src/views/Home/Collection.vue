<template>
  <div class="collection-section">
    <!-- 标题和公告部分 -->
    <div class="djxx-zxhd-box" style="background:#f9f9f9; padding:0px 65px 0 65px;">
      <div class="home-cgyy-head" style="text-align: left;">
        <span class="title">
          <img :src="titleImg" alt="国博征集">
        </span>
        <a class="more" href="/zj/"></a>
        <div class="announcement">
          <a href="/zj/zjgg/201812/t20181225_36715.shtml" target="_blank">
            中国国家博物馆关于征集文物藏品的公告
          </a>
        </div>
      </div>
    </div>

    <!-- 三个图片链接部分 -->
    <div class="collection-content" style="padding:10px 63px 25px 63px; background-color: #f9f9f9;">
      <ul class="shjy_hm_kuai28 shjy_hm_kuai28zj">
        <li>
          <a target="_blank" href="/zj/cpzj/">
            <img :src="img1" alt="征集项目">
          </a>
        </li>
        <li>
          <a target="_blank" href="/zj/gsww/">
            <img :src="img2" alt="国史文物">
          </a>
        </li>
        <li>
          <a target="_blank" href="http://donate2.chnmuseum.cn/#/pcRegister">
            <img :src="img3" alt="我要捐赠">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Collection'
})

import titleImg from '@/assets/img/zl2019_sdabiaoti2.png'
import img1 from '@/assets/img/zl2019_chuangkou1.png'
import img2 from '@/assets/img/zl2019_chuangkou2.png'
import img3 from '@/assets/img/zl2019_chuangkou3.png'
</script>

<style lang="scss" scoped>
.collection-section {
  width: 1200px;
  margin: 0 auto;
  background: #fff;

  .home-cgyy-head {
    position: relative;
    padding: 31px 0 15px;

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
      padding-bottom: 3px;
      font-size: 16px;
      padding-left: 5px;
      float: right;
      text-align: right;
      color: #979797;
      text-decoration: none;
      
      &::after {
        content: "更多";
      }

      &:hover {
        color: #721b28;
      }
    }

    .announcement {
      position: absolute;
      top: 32px;
      right: 70px;
      border-radius: 5px;
      font-size: 22px;
      background-color: #8d343c;
      padding: 6px 12px;

      a {
        color: #fff;
        font-size: 22px;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .collection-content {
    overflow: hidden;

    .shjy_hm_kuai28 {
      display: flex;
      justify-content: space-between;
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        width: 32%;

        a {
          display: block;
          
          img {
            width: 100%;
            height: auto;
            transition: transform 0.3s ease;

            &:hover {
              transform: scale(1.02);
            }
          }
        }
      }
    }
  }
}
</style> 