<template>
    <div>
       
       <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
					<router-link :to="'/home/newsinfo/'+item.id">
						<img class="mui-media-object mui-pull-left"  :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间:{{item.add_time | dateFormat}}</span>
                                <span>点击:{{item.click}}次</span>
                            </p>
						</div>
					</router-link>
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
         this.$http.get("api/getnewslist").then(result =>{
             if(result.body.status === 0){
                 Toast('获取数据成功')
             //    console.log(result.body.message)
                 this.newsList = result.body.message
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
</style>