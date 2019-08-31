<template>
  <div >
       <!-- <header>
           <button>lala</button>
       </header> -->
      
       <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
					<a :href="item.url">
						<img class="mui-media-object mui-pull-left"  :src="item.picUrl">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间:{{item.ctime | dateFormat}}</span>
                            </p>
						</div>
					</a>
				</li>
               
		</ul>
          
       

   
       
    </div>
</template>

<script>
 import {Toast} from 'mint-ui'
 import comment from '../subcomponents/comment.vue'
 import more from '../subcomponents/more.vue'
 
export default {
    data(){
        return{
            newsList:[],
            type:'social',
        }
    },
    created(){
        this.getNewsList();
    },
    methods:{
        getNewsList(){
         //   var url = "/api/getnewslist";
         this.$http.get('api/news/getNewsListByType?type='+this.type).then(result =>{
             if(result.body.code === 200){
                 Toast('成功获取'+result.body.num+"条数据!")
                this.newsList = result.body.data
               console.log(result.body)
             }else{
                 Toast('获取数据失败')
             }
         })

        }
    },
     components:{ //用来注册子组件
       "comment-box" : comment,
        "more-button" : more,
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