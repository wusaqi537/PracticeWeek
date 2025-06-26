<template>
  <div class="news-container">
    <div class="news-header">
      <h2 class="title">咨询</h2>
      <div class="search-wrapper" @click="showSearch">
        <img class="search-icon" :src="searchIcon" alt="搜索" />
        <span class="search-text">搜索</span>
        <div class="search-panel" v-if="isSearchVisible">
          <div class="search-box" :style="{ backgroundImage: `url(${searchBg})` }">
            <input 
              type="text" 
              v-model="searchKeyword"
              @keyup.enter="handleSearch"
              placeholder="请输入关键词"
            />
            <button @click="handleSearch">搜索</button>
          </div>
        </div>
      </div>
    </div>
    
    <div class="news-list">
      <div v-for="(news, index) in filteredNewsList" 
           :key="index" 
           class="news-item"
           @click="handleDetail(news)">
        <span class="date">{{ news.date }}</span>
        <span class="title">{{ news.title }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

interface NewsItem {
  date: string
  title: string
  content: string
}

const router = useRouter()
const newsList = ref<NewsItem[]>([])
const searchKeyword = ref('')
const isSearchVisible = ref(false)

const searchIcon = new URL('@/assets/img/header-search-icon.png', import.meta.url).href
const searchBg = new URL('@/assets/img/header-search-bg0331.png', import.meta.url).href

const filteredNewsList = computed(() => {
  if (!searchKeyword.value) return newsList.value
  return newsList.value.filter(news => 
    news.title.toLowerCase().includes(searchKeyword.value.toLowerCase()) ||
    news.content.toLowerCase().includes(searchKeyword.value.toLowerCase())
  )
})

const getNewsList = () => {
  newsList.value = [
    {
      date: '2024-03-02',
      title: '新闻标题2',
      content: '新闻内容2'
    }
  ]
}

const showSearch = () => {
  isSearchVisible.value = !isSearchVisible.value
}

const handleSearch = () => {
  // 搜索逻辑已通过computed实现
  isSearchVisible.value = false
}

const handleDetail = (newsItem: NewsItem) => {
  router.push({
    path: '/news/detail',
    query: {
      newsItem: JSON.stringify(newsItem)
    }
  })
}

onMounted(() => {
  getNewsList()
})
</script>

<style lang="scss" scoped>
.news-container {
  width: 100%;
  
  .news-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    border-bottom: 1px solid #eee;

    .title {
      font-size: 18px;
      font-weight: bold;
      margin: 0;
    }

    .search-wrapper {
      position: relative;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;

      .search-icon {
        width: 20px;
        height: 20px;
        filter: brightness(0);
        vertical-align: middle;
      }

      .search-text {
        font-size: 14px;
        color: #333;
      }

      .search-panel {
        position: absolute;
        top: 100%;
        right: 0;
        padding-top: 10px;
        z-index: 1000;

        .search-box {
          background-repeat: no-repeat;
          background-size: cover;
          padding: 20px;
          border-radius: 4px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

          input {
            width: 200px;
            padding: 8px 12px;
            border: 1px solid #ddd;
            border-radius: 4px;
            margin-right: 10px;
          }

          button {
            padding: 8px 16px;
            background: #8d343c;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;

            &:hover {
              background: #721b28;
            }
          }
        }
      }
    }
  }

  .news-list {
    padding: 20px;

    .news-item {
      display: flex;
      align-items: center;
      padding: 10px 0;
      cursor: pointer;
      border-bottom: 1px solid #eee;

      &:hover {
        background: #f9f9f9;
      }

      .date {
        color: #666;
        margin-right: 20px;
        font-size: 14px;
      }

      .title {
        flex: 1;
        font-size: 16px;
      }
    }
  }
}
</style>
