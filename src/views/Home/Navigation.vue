<template>
  <div class="navigation-container">
    <div class="menu-list">
      <dl class="menu-item">
        <dt>
          <span>全景国博</span>
          <b style="transform: rotate(45deg);"></b>
        </dt>
        <dd>
          <ul>
            <li><a href="/gbgk/gbjj/" target="_blank">国博简介</a></li>
            <li><a href="/gbgk/zndw/" target="_blank">职责定位</a></li>
            <li><a href="/gbgk/zzjg/" target="_blank">业务范围</a></li>
          </ul>
        </dd>
      </dl>
      <dl class="menu-item">
        <dt>
          <span>参观预约</span>
          <b style="transform: rotate(225deg);"></b>
        </dt>
        <dd>
          <ul>
            <li><a href="/cg/#jiaotongili" target="_blank">开放时间</a></li>
            <li><a href="https://pcticket.chnmuseum.cn/#/" target="_blank">预约入口</a></li>
            <li><a href="/cg/#visit-cgxz" target="_blank">参观须知</a></li>
            <li><a href="/cg/dlfw/" target="_blank">讲解导览</a></li>
          </ul>
        </dd>
      </dl>
      <dl class="menu-item">
        <dt>
          <span>观众服务</span>
          <b style="transform: rotate(45deg);"></b>
        </dt>
        <dd>
          <ul>
            <li><a href="/cg/cy/" target="_blank">餐饮休息</a></li>
            <li><a href="/cg/wcsm/" target="_blank">文创产品</a></li>
            <li><a href="/fw/hd/zxhd/" target="_blank">活动参与</a></li>
            <li><a href="/cg/rxdh/" target="_blank">热线电话</a></li>
          </ul>
        </dd>
      </dl>
      <dl class="menu-item">
        <dt>
          <span>新闻中心</span>
          <b style="transform: rotate(45deg);"></b>
        </dt>
        <dd>
          <ul>
            <li><router-link to="/news/list">新闻列表</router-link></li>
            <li><router-link to="/news/notice">通知公告</router-link></li>
            <li><router-link to="/news/media">媒体报道</router-link></li>
          </ul>
        </dd>
      </dl>
      <dl class="menu-item">
        <dt>
          <span><a href="https://www.chnmuseum.cn/shxg/yqlj/" target="_blank">友情链接</a></span>
        </dt>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  // 手风琴菜单效果
  const menuItems = document.querySelectorAll('.menu-item dt')
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const dd = item.nextElementSibling as HTMLElement
      const arrow = item.querySelector('b') as HTMLElement
      if (dd?.style.display === 'none') {
        dd.style.display = 'block'
        arrow.style.transform = 'rotate(225deg)'
      } else {
        dd.style.display = 'none'
        arrow.style.transform = 'rotate(45deg)'
      }
    })
  })
})
</script>

<style lang="scss" scoped>
.navigation-container {
  width: 110px;
  padding-top: 74px;

  .menu-item {
    dt {
      background-color: #a5343c;
      font-size: 16px;
      color: #fff;
      text-align: center;
      height: 45px;
      line-height: 45px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 10px;
      cursor: pointer;

      b {
        width: 7px;
        height: 7px;
        border: 2px solid #fff;
        border-top: none;
        border-left: none;
      }
    }

    dd {
      background-color: #ebebeb;
      display: none;

      ul li {
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #c5c5c5;

        a {
          font-size: 16px;
          color: #808080;
          display: block;
          text-indent: 22px;

          &:hover {
            background-color: #c5c5c5;
            color: #fff;
          }
        }
      }
    }
  }
}
</style> 