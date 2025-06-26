<template>
  <div class="news-page">
    <div class="news-content">
      <!-- 页面标题 -->
      <div class="page-header">
        <h1 class="title">新闻列表</h1>
        <div class="breadcrumb">当前位置：首页 > 新闻列表</div>
      </div>

      <!-- 新增：搜索框 -->
      <div class="search-bar">
        <input v-model="searchKeyword" @keyup.enter="handleSearch" type="text" placeholder="请输入新闻标题关键词"
          class="search-input" />
        <button class="search-btn" @click="handleSearch">搜索</button>
      </div>

      <!-- 加载状态 -->
      <div v-if="loading" class="loading-container">
        <div class="loading-spinner"></div>
        <div>正在加载新闻...</div>
      </div>

      <!-- 新闻列表 -->
      <div class="news-container" v-if="!loading">
        <ul class="news-list">
          <li v-for="(item, index) in displayedNews" :key="index" class="news-item">
            <div class="news-info">
              <div class="news-title" @click="handleDetail(item)">{{ item.title }}</div>
              <div class="news-meta">
                <span class="news-source">{{ item.source }}</span>
                <span class="news-date">{{ formatDate(item.publishedAt) }}</span>
              </div>
              <p class="news-description">{{ item.description }}</p>
            </div>
          </li>
        </ul>

        <!-- 无数据提示 -->
        <div v-if="displayedNews.length === 0" class="no-data">
          没有找到相关新闻
        </div>
      </div>

      <!-- 分页组件 -->
      <div class="pagination" v-if="!loading && totalItems > 0">
        <div class="pagination-info">共{{ totalPages }}页 {{ totalItems }}条</div>
        <div class="pagination-controls">
          <button class="pagination-btn" :disabled="currentPage === 1" @click="goToPage(1)">首页</button>
          <button class="pagination-btn" :disabled="currentPage === 1" @click="goToPage(currentPage - 1)">上一页</button>

          <template v-for="page in visiblePages" :key="page">
            <button class="pagination-btn" :class="{ 'current': currentPage === page }" @click="goToPage(page)">
              {{ page }}
            </button>
          </template>

          <button class="pagination-btn" :disabled="currentPage === totalPages"
            @click="goToPage(currentPage + 1)">下一页</button>
          <button class="pagination-btn" :disabled="currentPage === totalPages"
            @click="goToPage(totalPages)">尾页</button>
        </div>
        <div class="pagination-jump">
          <span>转第</span>
          <input type="number" min="1" :max="totalPages" v-model.number="jumpPage" class="page-input"
            @keyup.enter="jumpToPage">
          <span>页</span>
          <button class="confirm-btn" @click="jumpToPage">确认</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref, computed, onMounted } from 'vue';

export default {
  name: 'NewsPage',
  setup() {
    const loading = ref(false);
    const newsData = ref([]);
    const searchKeyword = ref('');
    const currentPage = ref(1);
    const pageSize = 10;
    const jumpPage = ref(1);

    // NewsAPI 配置
    const API_KEY = '7ce5b1ee5a1d49aa987b794726d513e2'; // 请替换为您的 NewsAPI key
    const BASE_URL = 'https://newsapi.org/v2/top-headlines';

    // 获取新闻数据
    const fetchNews = async (keyword = '') => {
      loading.value = true;
      try {
        const params = {
          country: 'cn',
          apiKey: API_KEY,
          pageSize: 100, // 获取较多数据用于前端分页
          q: keyword
        };

        const response = await axios.get(BASE_URL, { params });
        newsData.value = response.data.articles.map(article => ({
          title: article.title,
          description: article.description,
          source: article.source.name,
          publishedAt: article.publishedAt,
          url: article.url
        }));
      } catch (error) {
        console.error('获取新闻失败:', error);
        newsData.value = [];
      } finally {
        loading.value = false;
      }
    };

    // 计算总页数和当前页显示的新闻
    const totalItems = computed(() => newsData.value.length);
    const totalPages = computed(() => Math.ceil(totalItems.value / pageSize));
    const displayedNews = computed(() => {
      const start = (currentPage.value - 1) * pageSize;
      const end = start + pageSize;
      return newsData.value.slice(start, end);
    });

    // 计算显示的页码
    const visiblePages = computed(() => {
      const pages = [];
      const maxVisiblePages = 5;
      let start = Math.max(1, currentPage.value - Math.floor(maxVisiblePages / 2));
      let end = Math.min(totalPages.value, start + maxVisiblePages - 1);

      if (end - start + 1 < maxVisiblePages) {
        start = Math.max(1, end - maxVisiblePages + 1);
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      return pages;
    });

    // 页面跳转
    const goToPage = (page) => {
      currentPage.value = page;
    };

    const jumpToPage = () => {
      if (jumpPage.value >= 1 && jumpPage.value <= totalPages.value) {
        currentPage.value = jumpPage.value;
      }
    };

    // 搜索处理
    const handleSearch = () => {
      currentPage.value = 1;
      fetchNews(searchKeyword.value);
    };

    // 格式化日期
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      });
    };

    // 新闻详情处理
    const handleDetail = (news) => {
      window.open(news.url, '_blank');
    };

    // 页面加载时获取新闻
    onMounted(() => {
      fetchNews();
    });

    return {
      loading,
      searchKeyword,
      displayedNews,
      currentPage,
      totalPages,
      totalItems,
      jumpPage,
      visiblePages,
      handleSearch,
      goToPage,
      jumpToPage,
      formatDate,
      handleDetail
    };
  }
}
</script>

<style lang="scss" scoped>
.news-page {
  padding: 20px;
  
  .news-content {
    max-width: 1200px;
    margin: 0 auto;
  }

  .page-header {
    margin-bottom: 20px;
    
    .title {
      font-size: 24px;
      margin-bottom: 10px;
    }

    .breadcrumb {
      color: #666;
      font-size: 14px;
    }
  }

  .search-bar {
    margin-bottom: 20px;
    display: flex;
    gap: 10px;

    .search-input {
      flex: 1;
      padding: 8px 12px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    .search-btn {
      padding: 8px 20px;
      background-color: #1890ff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background-color: #40a9ff;
      }
    }
  }

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

  .news-container {
    .news-list {
      list-style: none;
      padding: 0;
    }

    .news-item {
      padding: 20px;
      border-bottom: 1px solid #eee;
      
      &:hover {
        background-color: #f8f8f8;
      }

      .news-info {
        .news-title {
          font-size: 18px;
          color: #333;
          margin-bottom: 10px;
          cursor: pointer;

          &:hover {
            color: #1890ff;
          }
        }

        .news-meta {
          margin-bottom: 10px;
          font-size: 14px;
          color: #666;

          .news-source {
            margin-right: 15px;
          }
        }

        .news-description {
          color: #666;
          font-size: 14px;
          line-height: 1.5;
        }
      }
    }
  }

  .no-data {
    text-align: center;
    padding: 40px 0;
    color: #666;
  }

  .pagination {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .pagination-info {
      color: #666;
    }

    .pagination-controls {
      display: flex;
      gap: 5px;
    }

    .pagination-btn {
      padding: 5px 10px;
      border: 1px solid #ddd;
      background: white;
      cursor: pointer;

      &:hover:not(:disabled) {
        color: #1890ff;
        border-color: #1890ff;
      }

      &:disabled {
        cursor: not-allowed;
        color: #999;
      }

      &.current {
        background: #1890ff;
        color: white;
        border-color: #1890ff;
      }
    }

    .pagination-jump {
      display: flex;
      align-items: center;
      gap: 5px;

      .page-input {
        width: 50px;
        padding: 4px;
        border: 1px solid #ddd;
        border-radius: 4px;
      }

      .confirm-btn {
        padding: 5px 10px;
        background: #1890ff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
          background: #40a9ff;
        }
      }
    }
  }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style> 