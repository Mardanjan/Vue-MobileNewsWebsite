<template>
    <div>

    <header class="mui-bar mui-bar-nav">
			<router-link class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" to="/home"></router-link>
			<h1 class="mui-title">首页</h1>
	</header>
     <!-- 轮播图区 -->
        <!-- <mt-swipe :auto="4000"> -->
            <!-- 在组件中使用v-for 一定要使用key -->
        <!-- <mt-swipe-item v-for="item in lunbotuList" :key="item.title">
            <img :src="item.img_url" alt="">
        </mt-swipe-item> -->

<!--         
         <mt-swipe-item >
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567242926748&di=687f5acfadaf5efacd64d44f5c89760d&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F18%2F03%2F12%2Ff3a0805352c0a0e217baadd8008edb3a.jpg%2521%2Ffwfh%2F804x975%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue" alt="图片失效">
        </mt-swipe-item>

         <mt-swipe-item >
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567242828843&di=a166c4c25619f30cb2fe8144cfd528b0&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F3bdd2dc32eedec3fa0472ea32bafbbcecf0a18ae.gif" alt="图片失效">
        </mt-swipe-item>
        <mt-swipe-item >
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567243219377&di=6c751d913f7c2bb916c7d6dab55ba70e&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190216%2F023b2786aa5a40ddb61ae48c8cdcf70e.jpeg" alt="图片失效">
        </mt-swipe-item>
        
        <mt-swipe-item >
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567243328101&di=bbb090bf6562f63a3d7c4bf25c4fa07b&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2F01be78a1d626e62736b959cdff014ba1e9691a4b.jpg" alt="图片失效">
        </mt-swipe-item>
        

        <mt-swipe-item >
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567243395998&di=c9ad236043aa1de316ebbd00c758d771&imgtype=0&src=http%3A%2F%2Fattimg.dospy.com%2Fimg%2Fday_140323%2F20140323_fab3f5c79117a9a68a889z179gh71GO2.jpg" alt="图片失效">
        </mt-swipe-item>
      </mt-swipe> -->

      <!-- 九宫格 6宫格的改造过程 -->
       <ul class="mui-table-view mui-grid-view mui-grid-9">

            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newsList">
		            <img src="../../images/menu1.png" alt="" id="img">
		            <div class="mui-media-body">新闻资讯</div>
                </router-link>
             </li>

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
    methods:{
      
        }

    }
</script>

<style lang="css" scoped>
    .mint-swipe{
        /* height: 750px; */
        height: 300px;
    }
  
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