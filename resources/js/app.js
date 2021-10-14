require('./bootstrap');

import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import router from './Router/index'
import store from './Store/index'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(ElementUI)

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
