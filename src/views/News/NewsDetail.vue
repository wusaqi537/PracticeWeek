<template>
    <div class="news-detail">
        <div class="news-container">
            <div class="news-header">
                <h1 class="title">{{ route.query.title || '' }}</h1>
                <div class="meta">
                    <span class="date">{{ formatDate(String(route.query.publishedAt || '')) }}</span>
                    <span class="source">来源：{{ route.query.source || '' }}</span>
                </div>
            </div>
            <div class="content">
                <p>{{ route.query.description || '' }}</p>
                <p>{{ route.query.content || '' }}</p>
            </div>
            <div class="actions">
                <a :href="String(route.query.url || '')" target="_blank" class="read-more">阅读原文</a>
                <button class="back-btn" @click="goBack">返回列表</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// 格式化日期
const formatDate = (dateString: string) => {
    try {
        if (!dateString || !dateString.includes('T')) {
            return dateString
        }
        const date = new Date(dateString)
        return date.toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        })
    } catch (error) {
        console.error('日期格式化失败:', error)
        return dateString || '日期格式错误'
    }
}

// 返回列表
const goBack = () => {
    router.back()
}
</script>

<style lang="scss" scoped>
.news-detail {
    padding: 40px;
    margin-top: 144px;

    .news-container {
        max-width: 800px;
        margin: 0 auto;
        background: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
        padding: 30px;

        .news-header {
            margin-bottom: 30px;
            
            .title {
                font-size: 24px;
                color: #333;
                margin-bottom: 15px;
                line-height: 1.4;
            }

            .meta {
                color: #666;
                font-size: 14px;

                .date {
                    margin-right: 20px;
                }

                .source {
                    color: #1890ff;
                }
            }
        }

        .content {
            color: #333;
            line-height: 1.8;
            font-size: 16px;

            p {
                margin-bottom: 20px;
            }
        }

        .actions {
            margin-top: 30px;
            display: flex;
            gap: 20px;
            justify-content: center;

            .read-more, .back-btn {
                padding: 10px 20px;
                border-radius: 4px;
                cursor: pointer;
                font-size: 16px;
                transition: all 0.3s ease;
            }

            .read-more {
                background-color: #1890ff;
                color: white;
                text-decoration: none;

                &:hover {
                    background-color: #40a9ff;
                }
            }

            .back-btn {
                background-color: #f0f0f0;
                border: none;
                color: #666;

                &:hover {
                    background-color: #e0e0e0;
                }
            }
        }
    }
}
</style>
