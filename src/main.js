//入口文件


import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

//导入根组件


import './lib/css/mui.min.css';

import { Header , Swipe, SwipeItem  , Button} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.use(VueRouter)
Vue.use(VueResource)

//设置请求的根路径
Vue.http.options.root = 'http://localhost:80';

//定义全局的过滤器
import moment from 'moment'
Vue.filter('dateFormat',function(data,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(data).format(pattern)
})



//导入自己的router.js
import router from './router.js'

import app from './App.vue'
var vm = new Vue({
    el:'#app',
    render: c =>c(app),
    router
})
