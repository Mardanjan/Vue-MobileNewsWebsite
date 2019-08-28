<template>
    <div>

     <!-- 轮播图区 -->
        <mt-swipe :auto="4000">
            <!-- 在组件中使用v-for 一定要使用key -->
        <mt-swipe-item v-for="item in lunbotuList" :key="item.title">
            <img :src="item.img_url" alt="">
        </mt-swipe-item>
        
      </mt-swipe>

      <!-- 九宫格 6宫格的改造过程 -->
       <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu1.png" alt="" id="img">
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                      <img src="../../images/menu2.png" alt="" id="img">
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                      <img src="../../images/menu3.png" alt="" id="img">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                      <img src="../../images/menu4.png" alt="" id="img">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                      <img src="../../images/menu5.png" alt="" id="img">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                      <img src="../../images/menu6.png" alt="" id="img">
		                    <div class="mui-media-body">联系我</div></a></li>
		         
		</ul> 
    
      

    </div>
</template>

<script>
import {Toast } from 'mint-ui'
export default {
    data(){
        return {
            lunbotuList:[]
        };
    },
    created() {
            this.getLunbotu();
        },
    methods:{
        getLunbotu(){
            this.$http.get('http://www.liulongbin.top:3005/api/getnewslist').then(result =>{
               // console.log(result.body);
                //console.log("hihihihi");
                if(result.body.status === 0){
                    this.lunbotuList = result.body.message ;
                    Toast('加载轮播图OK')
                }else{
                    Toast('加载轮播图失败')
                }
            })
        }
    }
}
</script>

<style lang="css" scoped>
    .mint-swipe{
        height: 200px;
    }
    /* .mint-swipe-item:nth-child(1){
        background-color: red;
    }
      .mint-swipe-item:nth-child(2){
        background-color:blue;
    }
      .mint-swipe-item:nth-child(3){
        background-color: pink;
    } */
    img{
        height: 100%;
        width: 100%;
    }
    .mui-grid-view.mui-grid-9{
        background-color: white;
        border: none;
        
    
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: none;
    }
    #img{
         height: 60px;
        width: 60px;
    }
    
</style>