import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 样式导入
import 'modern-normalize/modern-normalize.css'
import 'reset-css/reset.css'
import './styles/index.scss'

const app = createApp(App)
app.use(router)
app.mount('#app')
