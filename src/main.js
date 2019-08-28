//入口文件


import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

//导入根组件


import './lib/css/mui.min.css'
import { Header } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.component(Header.name, Header);
Vue.use(VueRouter)
Vue.use(VueResource)



//导入自己的router.js
import router from './router.js'

import app from './App.vue'
var vm = new Vue({
    el:'#app',
    render: c =>c(app),
    router
})
