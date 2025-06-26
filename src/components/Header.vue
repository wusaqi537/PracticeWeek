<template>
    <header class="header">
        <div class="tonglan_main">
            <div class="menu-box">
                <div class="logo">
                    <router-link to="/">
                        <img src="@/assets/img/header-logo.png" alt="logo">
                    </router-link>
                </div>
                <nav class="menu">
                    <router-link 
                        v-for="item in navItems" 
                        :key="item.path"
                        :to="item.path"
                        class="nav-item"
                        :exact="item.path === '/'"
                    >
                        {{ item.name }}
                    </router-link>
                </nav>
                <div class="menu-rgt">
                    <a href="#" class="en">EN</a>
                    <span class="header-search">
                        <img src="@/assets/img/search_20200220.png" alt="搜索">
                    </span>
                </div>
            </div>
        </div>
    </header>
</template>


<script setup lang="ts">
import { ref } from 'vue'

const navItems = ref([
    { name: "首页", path: '/' },
    { name: "新闻", path: '/news' },
    { name: "3D展厅", path: '/exhibition' }
])
</script>


<style lang="scss" scoped>
.header {
    height: 144px;
    background: linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0));
    width: 100%;
    z-index: 1000;
    position: absolute;

    .tonglan_main {
        max-width: 1200px;
        margin: 0 auto;
        height: 100%;
    }

    .menu-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        padding: 0 10px;
        position: relative;
    }

    .logo {
        position: absolute;
        left: 10px;
        
        img {
            height: 60px;
            width: auto;
        }
    }

    .menu {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 40px;

        .nav-item {
            color: #fff;
            font-size: 18px;
            text-decoration: none;
            line-height: 80px;
            position: relative;

            &.router-link-active {
                color: var(--primary-color);

                &::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 20px;
                    height: 2px;
                    background-color: var(--primary-color);
                }
            }
        }
    }

    .menu-rgt {
        position: absolute;
        right: 20px;
        display: flex;
        align-items: center;
        gap: 20px;

        a {
            color: #fff;
            text-decoration: none;
            font-size: 16px;

            &:hover {
                color: var(--primary-color);
            }
        }

        .header-search {
            cursor: pointer;
            
            img {
                width: 20px;
                height: 20px;
                filter: brightness(0) invert(1); // 使图标变白
            }

            &:hover img {
                opacity: 0.8;
            }
        }
    }
}
</style>

