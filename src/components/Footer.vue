<template>
  <footer class="footer">
    <div class="main">
      <div class="footer-txt">
        <a href="" title="融媒矩阵">中国国家博物馆融媒矩阵</a>：
      </div>
      <ul class="footerUl">
        <li v-for="(qrcode, index) in qrcodes" :key="index">
          <img :src="qrcode.img" :alt="qrcode.title" />
          <p v-html="qrcode.text"></p>
        </li>
      </ul>
      <div class="footer-link">
        <a v-for="(link, index) in links" 
           :key="index" 
           :href="link.url" 
           :title="link.title"
           :style="index === links.length - 1 ? { background: 'none', paddingRight: '0px' } : {}"
        >{{ link.title }}</a>
      </div>

      <div class="footer-txt">
        <p>
          <span style="padding-left: 0">中国国家博物馆版权所有</span>|
          <a href="https://beian.miit.gov.cn" target="_blank"><span>京ICP备05008885号</span></a>|
          <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010102003012" target="_blank">
            <span>京公网安备11010102003012号</span>
          </a>|
          <span style="padding-right: 0px">EMAIL：service@chnmuseum.cn</span>
        </p>
        <p>
          <span style="padding-left: 0">内容运维：新闻传播处</span>|
          <span>技术保障：信息技术部&nbsp;&nbsp;&nbsp;
            <a href="http://www.trs.com.cn/" target="_blank">北京拓尔思信息技术股份有限公司</a>
          </span>
        </p>
        <div class="public-log">
          <a href="//bszs.conac.cn/sitename?method=show&amp;id=30E0CF203BE827D8E053022819AC57DB" target="_blank">
            <img src="@/assets/img/footer/blue.png" />
          </a>
        </div>
      </div>
    </div>
    <div class="footer-logo">
      <img src="@/assets/img/footer/footer-logo.png" title="国家博物馆" alt="国家博物馆" />
    </div>
  </footer>
</template>

<script setup lang="ts">
import wx1Ewm from '@/assets/img/footer/wx1Ewm20200314.png'
import gjenfwh from '@/assets/img/footer/gjenfwh20200801.jpg'
import wx2Ewm from '@/assets/img/footer/wx2Ewm20200314.png'
import gjbwgapp from '@/assets/img/footer/gjbwgapp20220221.jpg'
import wbEwm from '@/assets/img/footer/wbEwm20200314.png'
import dyEwm from '@/assets/img/footer/dyEwm20200314.png'

interface QRCode {
  img: string
  title: string
  text: string
}

interface Link {
  url: string
  title: string
}

const qrcodes: QRCode[] = [
  {
    img: wx1Ewm,
    title: '国家博物馆微信服务号',
    text: '国家博物馆<br />微信服务号'
  },
  {
    img: gjenfwh,
    title: '国家博物馆英文版微信服务号',
    text: '国家博物馆英文版<br />微信服务号'
  },
  {
    img: wx2Ewm,
    title: '国博君微信订阅号',
    text: '国博君<br />微信订阅号'
  },
  {
    img: gjbwgapp,
    title: '国家博物馆APP',
    text: '国家博物馆<br />APP'
  },
  {
    img: wbEwm,
    title: '国家博物馆官方微博',
    text: '官方微博'
  },
  {
    img: dyEwm,
    title: '国家博物馆官方抖音',
    text: '官方抖音'
  }
]

const links: Link[] = [
  { url: 'sitemap.html', title: '网站地图' },
  { url: 'yqlj.html', title: '友情链接' },
  { url: 'lybd.html', title: '留言板' },
  { url: 'lxwm.html', title: '联系我们' },
  { url: 'bqsm.html', title: '版权声明' },
  { url: 'yszc.html', title: '隐私安全声明' }
]
</script>

<style lang="scss" scoped>
.footer {
  background: url('@/assets/img/footer/footer-bg.png') repeat-x left center #333333;
  width: 100%;
  padding: 40px 0;
  color: #cacaca;

  .main {
    width: 1060px;
    margin: 0 auto;
  }

  .footerUl {
    overflow: hidden;
    border-bottom: 1px solid #adadad;

    li {
      width: 112px;
      margin-left: 77px;
      float: left;

      &:first-child {
        margin-left: 0;
      }

      img {
        width: 100%;
      }

      p {
        font-size: 14px;
        color: #cacaca;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 25px;
      }
    }
  }

  .footer-link {
    display: flex;
    text-align: center;
    border-bottom: 1px solid #adadad;
    width: 100%;
    padding: 15px 0;

    a {
      display: flex;
      padding: 0 57px 0 52px;
      font-size: 14px;
      color: #cacaca;
      background: url('@/assets/img/footer/footer-link-bg.png') no-repeat right center;
      text-align: left;
      cursor: pointer;
    }
  }

  .footer-txt {
    position: relative;
    width: 100%;
    padding: 15px 0;
    text-align: left;

    a {
      color: #cacaca;
    }

    p {
      width: 100%;
      color: #8d7357;
      font-size: 12px;
      line-height: 34px;
      height: 34px;

      span {
        color: #cacaca;
        font-size: 14px;
        padding: 0 28px;
      }
    }
  }

  .public-log {
    display: inline-block;
    margin-left: 40px;
    position: absolute;
    right: 0;
    top: 20px;
  }

  .footer-logo {
    display: flex;
    justify-content: center;

    img {
      width: 126px;
      height: 45px;
    }
  }
}
</style>
