<template>
   <div class="container">
      
    <header class="mui-bar mui-bar-nav">
			<router-link class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" to="/home"></router-link>
			<h1 class="mui-title">新闻资讯</h1>
	</header> 

   
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
					<router-link  :to="'/home/newsInfo/'+item.id" >
						<img class="mui-media-object mui-pull-left"  :src="item.picUrl">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                                <span class="span_left">发表时间:{{item.ctime | dateFormat}}</span>
                                <span class="span_right">来源:{{item.author}}</span>
                            </p>
						</div>
					</router-link>
				</li>
		</ul>
   <transition>
            <p>
             
                    <button type="button" class="btn btn-primary" id="last" @click="last()">上一页</button>
                    <button type="button" class="btn btn-lg">{{dangqian}}/{{zonggong}}</button>
                   <button class="btn btn-primary" @click="next()">上一页</button>
                   
            </p>
    </transition>
    </div> 
   
</template>

<script>
//import mui from '../../lib/js/mui.min.js'
import {Toast} from 'mint-ui'  
import 'bootstrap'

// mui('.mui-scroll-wrapper').scroll({
//     deceleration:0.0005
// })

export default {
    data(){
        return{
            newsList:[],
            maxPage:'',
            index:1,
            zonggong:"",
            dangqian:''
        }
    },
    created(){
         this.getNewsList(1);
         
    },
    methods:{
        getNewsList(page){
         this.$http.get("api/news/getNewsList?page="+page).then(result =>{
             if(result.body.code === 200){
               console.log(result.body)
                this.newsList = result.body.data
                this.zonggong = result.body.num/10
                this.dangqian = page
             }else{
               
             }
         })
        },
        next(){
            if(this.dangqian<this.zonggong){
                this.dangqian++
                this.getNewsList(this.dangqian)
            }else if(this.dangqian===this.zonggong){
                Toast("这是最后一页不能再往后")
            }else if(this.dangqian===1){
                document.getElementById("last").setAttribute("class","btn btn-primary danger")
            }
        },
        last(){
            if(this.dangqian>1){
                this.dangqian--
                this.getNewsList(this.dangqian)
            }else if(this.dangqian==1){
                Toast("这是第一页不能再往前")
            }
        }
    }
}
</script>


<style lang="css" scope>
h1{
    font-size: 13px;
}
p{
    display: flex;
    justify-content: space-between;
}
.spen_left{
    float: left;
}
.spen_right{
    float: right;
}
/* .container{
    padding-top: 45px;
} */
#slider{
        padding-top: 45px;
}
.container{
        /* padding-top: 40px; */
}
.v-enter{
    opacity: 0;
    transform: translateZ(20%)
}

.v-leave-to{
    opacity: 0;
    transform: translateZ(-20%);
    position:absolute;
}
.v-enter-active,
.v-leave-active{
    transition: all 1s ease;
} 

</style>