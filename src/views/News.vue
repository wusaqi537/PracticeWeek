<template>
  <div class="news">
    <div class="news-content">
      <!-- 错误提示 -->
      <div v-if="error" class="error-message">
        {{ error }}
      </div>

      <!-- 加载状态 -->
      <div v-if="loading" class="loading-container">
        <div class="loading-spinner"></div>
        <div>正在加载新闻...</div>
      </div>

      <!-- 新闻列表 -->
      <div v-else class="news-list">
        <div class="list-header">
          <h1>资讯</h1>
        </div>
        <ul class="list-content">
          <li v-for="news in displayedNews" 
              :key="news.title"
              class="list-item"
              @click="handleDetail(news)"
          >
            <div class="news-title">{{ news.title }}</div>
            <div class="news-date">{{ formatDate(news.publishedAt) }}</div>
          </li>
        </ul>
      </div>

      <!-- 无数据提示 -->
      <div v-if="!loading && newsList.length === 0" class="no-data">
        暂无新闻数据
      </div>

      <!-- 分页组件 -->
      <div class="pagination" v-if="!loading && totalItems > 0">
        <div class="pagination-nav">
          <a class="nav-item" @click="goToPage('first')" :class="{ disabled: currentPage === 1 }">返回首页</a>
          <a class="nav-item" @click="goToPage('prev')" :class="{ disabled: currentPage === 1 }">上一页</a>
          <template v-for="page in visiblePages" :key="page">
            <a class="nav-item" 
               :class="{ active: currentPage === page }"
               @click="goToPage(page)"
            >{{ page }}</a>
          </template>
          <a class="nav-item" @click="goToPage('next')" :class="{ disabled: currentPage === totalPages }">下一页</a>
          <a class="nav-item" @click="goToPage('last')" :class="{ disabled: currentPage === totalPages }">尾页</a>
          <span class="page-info">转第</span>
          <input 
            type="number" 
            v-model.number="jumpPage" 
            class="page-input"
            min="1"
            :max="totalPages"
            @keyup.enter="handleJump"
          >
          <span class="page-info">页</span>
          <button class="jump-btn" @click="handleJump">确定</button>
          <span class="total-info">共{{ totalPages }}页 {{ totalItems }}条</span>
        </div>
      </div>
    </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const loading = ref(false)
const newsList = ref<any[]>([])
const error = ref('')

// 分页相关
const currentPage = ref(1)
const pageSize = ref(10)
const jumpPage = ref(1)

// 计算总页数和总条数
const totalItems = computed(() => newsList.value.length)
const totalPages = computed(() => Math.ceil(totalItems.value / pageSize.value))

// 计算当前页显示的新闻
const displayedNews = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return newsList.value.slice(start, end)
})

// 计算显示的页码范围
const visiblePages = computed(() => {
  const delta = 2 // 当前页前后显示的页码数
  const range: number[] = []
  const rangeWithDots: number[] = []
  let l: number

  for (let i = 1; i <= totalPages.value; i++) {
    if (
      i === 1 ||
      i === totalPages.value ||
      i >= currentPage.value - delta &&
      i <= currentPage.value + delta
    ) {
      range.push(i)
    }
  }

  range.forEach(i => {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1)
      } else if (i - l !== 1) {
        rangeWithDots.push(-1) // 用-1表示省略号
      }
    }
    rangeWithDots.push(i)
    l = i
  })

  return rangeWithDots
})

// 页面跳转
const goToPage = (target: number | string) => {
  let newPage = currentPage.value

  switch (target) {
    case 'first':
      newPage = 1
      break
    case 'prev':
      newPage = Math.max(1, currentPage.value - 1)
      break
    case 'next':
      newPage = Math.min(totalPages.value, currentPage.value + 1)
      break
    case 'last':
      newPage = totalPages.value
      break
    default:
      if (typeof target === 'number' && target !== -1) {
        newPage = target
      }
  }

  if (newPage !== currentPage.value && newPage >= 1 && newPage <= totalPages.value) {
    currentPage.value = newPage
    jumpPage.value = newPage
    // 滚动到页面顶部
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}

// 处理跳转
const handleJump = () => {
  if (jumpPage.value >= 1 && jumpPage.value <= totalPages.value) {
    currentPage.value = jumpPage.value
  } else {
    jumpPage.value = currentPage.value
  }
}

// 聚合数据 API 配置
const API_KEY = '51c1c06d90fd13f829556bb4c27c7f0a'
const BASE_URL = '/api'

// 缓存相关的常量
const CACHE_KEY = 'newsListCache'
const CACHE_EXPIRY = 60 * 60 * 1000 // 1小时的毫秒数

// 检查缓存是否有效
const isValidCache = (cache: any) => {
  return (
    cache &&
    cache.timestamp &&
    Date.now() - cache.timestamp < CACHE_EXPIRY &&
    Array.isArray(cache.data) &&
    cache.data.length > 0
  )
}

// 从缓存获取数据
const getFromCache = () => {
  try {
    const cache = JSON.parse(localStorage.getItem(CACHE_KEY) || '{}')
    if (isValidCache(cache)) {
      return cache.data
    }
  } catch (err) {
    console.error('读取缓存失败:', err)
  }
  return null
}

// 保存数据到缓存
const saveToCache = (data: any[]) => {
  try {
    const cache = {
      data,
      timestamp: Date.now()
    }
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache))
  } catch (err) {
    console.error('保存缓存失败:', err)
  }
}

// 获取新闻详情
const fetchNewsDetail = async (uniquekey: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/news/content`, {
      params: {
        key: API_KEY,
        uniquekey
      }
    })
    
    if (response.data.error_code === 0 && response.data.result) {
      return response.data.result.content
    }
    return null
  } catch (err) {
    console.error('获取新闻详情失败:', err)
    return null
  }
}

// 获取新闻列表
const getNewsList = async () => {
  loading.value = true
  error.value = ''
  
  // 先尝试从缓存获取数据
  const cachedData = getFromCache()
  if (cachedData) {
    newsList.value = cachedData
    loading.value = false
    return
  }
  
  try {
    const response = await axios.get(`${BASE_URL}/news`, {
      params: {
        type: 'top',
        key: API_KEY
      },
      timeout: 10000
    })
    
    if (response.data.error_code === 0 && response.data.result?.data) {
      // 处理新闻列表数据
      const newsPromises = response.data.result.data.map(async (article: any) => {
        // 获取新闻详情
        const content = await fetchNewsDetail(article.uniquekey)
        
        // 处理多图片
        const images = [
          article.thumbnail_pic_s,
          article.thumbnail_pic_s02,
          article.thumbnail_pic_s03
        ].filter(Boolean)

        return {
          title: article.title || '无标题',
          description: article.category || '暂无描述',
          publishedAt: article.date || new Date().toISOString(),
          source: article.author_name || '未知来源',
          url: article.url || '#',
          content: content || article.title || '暂无内容',
          imageUrl: article.thumbnail_pic_s || null,
          images: images.length > 0 ? images : null,
          uniquekey: article.uniquekey
        }
      })

      // 等待所有新闻详情获取完成
      const processedData = await Promise.all(newsPromises)
      newsList.value = processedData
      // 保存到缓存
      saveToCache(processedData)
    } else {
      throw new Error(response.data.reason || '获取新闻失败')
    }
  } catch (err: any) {
    console.error('获取新闻失败:', err)
    error.value = err.message || '获取新闻数据失败，请稍后重试'
    
    // 如果 API 调用失败，使用备用数据
    if (newsList.value.length === 0) {
      const backupData = [
        {
          title: '科技创新推动经济发展',
          description: '科技',
          publishedAt: new Date().toISOString(),
          source: '科技日报',
          url: 'https://example.com/tech-news-1',
          content: '详细报道科技创新如何推动经济发展...\n\n近年来，我国科技创新能力显著提升，在人工智能、量子计算、航天科技等领域取得重大突破。创新驱动发展战略的实施，正在为经济高质量发展注入强劲动力。\n\n多项关键技术实现突破，带动产业升级转型，为经济发展开辟新路径。科技创新不仅推动了传统产业的改造升级，还催生了新产业、新业态、新模式，为经济发展提供了新的增长点。',
          imageUrl: 'https://picsum.photos/800/400',
          uniquekey: 'backup1'
        },
        {
          title: '环保行动取得重要进展',
          description: '环境',
          publishedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
          source: '环境报道',
          url: 'https://example.com/environment-news-1',
          content: '报道各地环保行动的具体措施和成效...\n\n全国各地积极开展环境保护行动，推进生态文明建设，取得显著成效。通过实施一系列环保措施，空气质量持续改善，水环境质量稳步提升，生态系统不断恢复。\n\n各地区通过产业结构调整、能源结构优化、污染治理等多措并举，推动绿色发展。同时，公众环保意识不断增强，参与环保行动的积极性显著提高。',
          imageUrl: 'https://picsum.photos/800/401',
          uniquekey: 'backup2'
        },
        {
          title: '教育改革新政策出台',
          description: '教育',
          publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
          source: '教育时报',
          url: 'https://example.com/education-news-1',
          content: '详细解读教育改革新政策的主要内容...\n\n教育部近日发布新政策，旨在深化教育改革，促进教育公平，提高教育质量。新政策围绕减轻学生课业负担、提升教师队伍建设、完善教育评价体系等方面作出具体部署。\n\n政策强调要坚持立德树人，推进素质教育，培养德智体美劳全面发展的社会主义建设者和接班人。同时，要加强教师队伍建设，提高教师待遇，营造尊师重教的良好氛围。',
          imageUrl: 'https://picsum.photos/800/402',
          uniquekey: 'backup3'
        }
      ]
      newsList.value = backupData
      // 也将备用数据保存到缓存
      saveToCache(backupData)
      error.value = '使用备用数据显示'
    }
  } finally {
    loading.value = false
  }
}

// 格式化日期
const formatDate = (dateString: string) => {
  try {
    if (!dateString.includes('T')) {
      return dateString
    }
    const date = new Date(dateString)
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\//g, '-')
  } catch (err) {
    return dateString || '日期格式错误'
  }
}

// 跳转到详情页
const handleDetail = (news: any) => {
  router.push({
    path: '/news/detail',
    query: {
      title: news.title,
      content: news.content,
      source: news.source,
      publishedAt: news.publishedAt,
      description: news.description,
      url: news.url
    }
  })
}

onMounted(() => {
  getNewsList()
})
</script>

<style lang="scss" scoped>
.news {
  padding: 20px 40px;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 144px;

  .loading-container {
    text-align: center;
    padding: 40px 0;

    .loading-spinner {
      border: 4px solid #f3f3f3;
      border-top: 4px solid #1890ff;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      animation: spin 1s linear infinite;
      margin: 0 auto 20px;
    }
  }

  .news-list {
    background: white;
    border-radius: 4px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);

    .list-header {
      padding: 20px;
      border-bottom: 1px solid #eee;

      h1 {
        font-size: 24px;
        color: #333;
        margin: 0;
      }
    }

    .list-content {
      list-style: none;
      padding: 0;
      margin: 0;

      .list-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 20px;
        border-bottom: 1px solid #eee;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
          background-color: #f5f5f5;
        }

        .news-title {
          flex: 1;
          font-size: 16px;
          color: #333;
          margin-right: 20px;
          // 超出部分显示省略号
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .news-date {
          color: #999;
          font-size: 14px;
          white-space: nowrap;
        }
      }
    }
  }

  .no-data {
    text-align: center;
    padding: 40px 0;
    color: #666;
  }

  .error-message {
    background-color: #fff2f0;
    border: 1px solid #ffccc7;
    padding: 12px 20px;
    border-radius: 4px;
    color: #ff4d4f;
    margin-bottom: 20px;
    text-align: center;
  }

  .pagination {
    margin-top: 20px;
    padding: 20px;
    background: white;
    border-radius: 4px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);

    .pagination-nav {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      .nav-item {
        padding: 6px 12px;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        cursor: pointer;
        color: #666;
        transition: all 0.3s;

        &:hover:not(.disabled) {
          color: #1890ff;
          border-color: #1890ff;
        }

        &.active {
          background: #1890ff;
          color: white;
          border-color: #1890ff;
        }

        &.disabled {
          cursor: not-allowed;
          color: #d9d9d9;
          background: #f5f5f5;
        }
      }

      .page-info {
        color: #666;
        margin: 0 4px;
      }

      .page-input {
        width: 50px;
        height: 32px;
        text-align: center;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        margin: 0 4px;

        &:focus {
          outline: none;
          border-color: #1890ff;
        }
      }

      .jump-btn {
        padding: 6px 12px;
        background: #1890ff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
          background: #40a9ff;
        }
      }

      .total-info {
        margin-left: 16px;
        color: #666;
      }
    }
  }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>