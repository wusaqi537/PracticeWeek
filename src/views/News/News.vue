<scrpit lang="ts" setup>
    const router =useRouter()
    const newsList = ref<NewsItem[]>([])
    const getNewsList = () => {
        newsList.value = [
            {
                date: '2024-03-02',
                title: '新闻标题2',
                content: '新闻内容2'
            }
        ]   
    }
    onMounted(() => {
        getNewsList()
    })
    const handleDetail = (newsItem: NewsItem) => {
        router.push({
            path: '/news/detail',
            query: {
                newsItem: JSON.stringify(newsItem)
            }
        })
    }
    const getNewsData = async () => {
        const res = await getNewsList()
        newsList.value = res.data
    }
</script>
