//入口文件


import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

//导入根组件


import './lib/css/mui.min.css';

import { InfiniteScroll } from 'mint-ui';



import { Header , Swipe, SwipeItem  , Button} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
//使用路由
Vue.use(VueRouter)
//ajax
Vue.use(VueResource)
Vue.use(InfiniteScroll);
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.js'
// import '../node_modules/bootstrap/dist/css/bootstrap.css'

//设置请求的根路径
Vue.http.options.root = 'http://kujijiku.com:80';


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
