<template>
  <div class="collection">
    <div class="collection-links">
      <ul class="link-list">
        <li>
          <a target="_blank" href="https://www.chnmuseum.cn/zj/cpzj/">
            <img src="../中国国家博物馆官方网站_files/zl2019_chuangkou2.png" alt="征集项目">
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.chnmuseum.cn/zj/gsww/">
            <img src="../中国国家博物馆官方网站_files/zl2019_chuangkou1.png" alt="国史文物">
          </a>
        </li>
        <li>
          <a target="_blank" href="http://donate2.chnmuseum.cn/#/pcRegister">
            <img src="../中国国家博物馆官方网站_files/zl2019_chuangkou3.png" alt="我要捐赠">
          </a>
        </li>
      </ul>
    </div>
    
    <div class="collection-header">
      <div class="title">
        <img src="../中国国家博物馆官方网站_files/zl2019_sdabiaoti2.png" alt="征集">
      </div>
      <a class="more" href="https://www.chnmuseum.cn/zj/"></a>
      <div class="announcement">
        <a href="https://www.chnmuseum.cn/zj/zjgg/201812/t20181225_36715.shtml" target="_blank">
          中国国家博物馆关于征集文物藏品的公告
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.collection {
  background: #f9f9f9;
  width: 100%;
  
  .collection-links {
    padding: 10px 63px 0;
    overflow: hidden;

    .link-list {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      list-style: none;
      padding: 0;
      margin: 0 0 25px;

      li {
        flex: 1;
        
        a {
          display: block;
          
          img {
            width: 100%;
            height: auto;
          }
        }
      }
    }
  }

  .collection-header {
    padding: 0 65px;
    position: relative;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    height: 80px;

    .title {
      text-align: left;
      
      img {
        height: 30px;
      }
    }

    .more {
      width: 54px;
      height: 22px;
      display: block;
      background: url('../中国国家博物馆官方网站_files/home-dmgb.png') no-repeat center;
      margin-right: 200px;
    }

    .announcement {
      position: absolute;
      top: 32px;
      right: 70px;
      border-radius: 5px;
      background-color: #8d343c;
      padding: 6px 12px;

      a {
        color: #fff;
        font-size: 22px;
        text-decoration: none;

        &:hover {
          opacity: 0.9;
        }
      }
    }
  }
}
</style> 