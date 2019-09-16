import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//px 转 rem
import '@/assets/js/pxToRem'

import '@/assets/iconfont/iconfont.css'
import '@/assets/font/font.css'
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')