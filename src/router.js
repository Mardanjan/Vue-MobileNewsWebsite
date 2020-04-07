import VueRouter from 'vue-router'

//导入对应的路由组件
import homeContainer from './components/tabbar/homeContainer.vue'
import blogContainer from './components/tabbar/blogContainer.vue'
import searchContainer from './components/tabbar/searchContainer.vue'
import sicretContainer from './components/tabbar/sicretContainer.vue'
import newsList from './components/news/newsList.vue'
import newsInfo from './components/news/newsInfo.vue'


var router = new VueRouter({
    routes: [
       {path:'/' , component:homeContainer},
       //主页
       {path:'/home' ,component:homeContainer},
       {path:'/home/newsList' , component:newsList},
       {path:'/home/newsInfo/:id' , component:newsInfo},

        
           
       {path:'/blog' ,component:blogContainer},

       {path:'/search' ,component:searchContainer},

       {path:'/sicret' ,component:sicretContainer},

       

     
       
       
    
    ],
    linkActiveClass:'mui-active', //覆盖默认的类
})

//暴露路由对象
export default router