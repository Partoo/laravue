import Vue from 'vue'
import Vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueRouter from 'vue-router'
import router from './Router/index'
import store from './Store/index'
import App from './App.vue'

Vue.use(VueRouter)

const app = new Vue({
    el: '#app',
    router,
    store,
    vuetify: Vuetify,
    render: h => h(App)
})
