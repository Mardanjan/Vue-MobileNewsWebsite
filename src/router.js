import VueRouter from 'vue-router'

//导入对应的路由组件
import homeContainer from './components/tabbar/homeContainer.vue'
import blogContainer from './components/tabbar/blogContainer.vue'
import searchContainer from './components/tabbar/searchContainer.vue'
import sicretContainer from './components/tabbar/sicretContainer.vue'
import newsList from './components/news/newsList.vue'
import newsInfo from './components/news/newsInfo.vue'

import yule from './components/news/yule.vue'
import meinv from './components/news/meinv.vue'
import dongman from './components/news/dongman.vue'
import keji from './components/news/keji.vue'
import itNews from './components/news/itNews.vue'
import social from './components/news/social.vue'

var router = new VueRouter({
    routes: [
       {path:'/' , redirect:homeContainer},
       {path:'/home' ,component:homeContainer},
       {path:'/blog' ,component:blogContainer},
       {path:'/search' ,component:searchContainer},
       {path:'/sicret' ,component:sicretContainer},
       {path:'/home/newsList' , component:newsList},

     
       {path:'/home/meinv' , component:meinv},
       {path:'/home/dongman' , component:dongman},
       {path:'/home/yule' , component:yule},
       {path:'/home/keji' , component:keji},
       {path:'/home/itNews' , component:itNews},
       {path:'/home/social' , component:social},
       
       {path:'/home/newsinfo/:id' , component:newsInfo},
    
    ],
    linkActiveClass:'mui-active', //覆盖默认的类
})

//暴露路由对象
export default router