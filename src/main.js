import { createApp } from 'vue'
// import App from './App.vue'
import ConfigLocale from '@/ConfigLocale.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import AntVue from '@/utils/ant-vue'
import 'ant-design-vue/dist/antd.css'
import IconFont from "./utils/icon";

const app = createApp(ConfigLocale)
// 去掉console下面的警告信息
app.config.warnHandler = () => null
app.use(store)
app.use(router)
app.component('IconFont', IconFont);// 全局引用组件
AntVue(app)

app.mount('#app')
