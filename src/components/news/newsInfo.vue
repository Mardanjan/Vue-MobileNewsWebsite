<template>
    <div >
        <header class="mui-bar mui-bar-nav">
			<router-link class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" to="/home/newsList"></router-link>
			<h1 class="mui-title">{{title}}</h1>
	    </header>
        <!-- 标题区 -->
        <div class="content">
        <div class="title">
            <h1 >{{title}}</h1>
            <p >
                <span class="time">发表时间：{{ctime}}</span>
                <span class="author">来源：{{author}}</span>
            </p>
            <hr>
        </div>
        <div v-html="content">
            <!-- <h1> 这是内容区</h1> -->
        </div>

        <!-- 评论区 -->
        <comment-box></comment-box>
        
        </div>
       
    </div>
</template>

<script>
import comment from '../subcomponents/comment.vue'

export default {
    data(){
        return{
            id:this.$route.params.id  , //将url地址中传递过来的ID值挂载到data上，方便以后管理
            content:'',
            ctime:'',
            author:'',
            title:'',
        }
    },
    created(){
       this.getNewsInfo();
    },
    methods:{
        getNewsInfo(){
            //console.log(this.id)
            this.$http.get("api/news/getNewById?id="+this.id).then(result =>{
             if(result.body.code === 200){
                this.content = result.body.data.content
                this.ctime = result.body.data.ctime
                this.author = result.body.data.author
                this.title = result.body.data.title
             }else{
              
             }
         })

        }
    },
    components:{ //用来注册子组件
        "comment-box" : comment,
    }
    
}
</script>

<style lang="css" scope>
img{
    border: none;
    margin: none;
    padding: none;
    width: 100%;
}
p{
    padding-left: 5px;
    padding-right: 5px;

}
h1{
     text-align: center;
     font-size: 16px;
     color: red;
}
.time{
    float: left;
     padding: 2px;
}
.click{
    float: right;
     padding: 2px;
}
.content{
    padding-top: 10px;
}


    
</style>