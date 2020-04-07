<template>
  <div class="app-container">
       
     

       <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
					<a :href="item.url">
						<img class="mui-media-object mui-pull-left"  :src="item.thumbnail_pic_s">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间:{{item.date | dateFormat}}</span>
                            </p>
						</div>
					</a>
				</li>

		</ul>

       
    </div>
</template>

<script>
 import {Toast} from 'mint-ui'
export default {
    data(){
        return{
            newsList:[]
        }
    },
    created(){
        this.getNewsList();
    },
    methods:{
        getNewsList(){
         //   var url = "/api/getnewslist";
         this.$http.get("api/news/getNewsListByCategory?category=shishang").then(result =>{
             if(result.body.code === 200){
                 Toast('获取数据成功')
             //    console.log(result.body.message)
                //   this.newsList = result.body
               // console.log(result.body.message)
                console.log(result.body.message.result.data[0])
                this.newsList = result.body.message.result.data
             }else{
                 Toast('获取数据失败')
             }
         })

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
.app-container{
    
  
}
</style>