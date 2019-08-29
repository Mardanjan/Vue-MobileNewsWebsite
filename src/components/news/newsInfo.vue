<template>
    <div class="newsinfo-container">
        <!-- 标题区 -->
        <h3 class="title">新闻标题</h3>
        <p class="subtitle">
            <span>发表时间：</span>
            <span>点击次数：</span>
        </p>

        <hr>

        <!-- 内容区 -->
        <div class="content">
            <h2>{{id}} 这是内容去</h2>
        </div>

        <!-- 评论区 -->
        <comment-box></comment-box>
        

    </div>
</template>

<script>
import comment from '../subcomponents/comment.vue'

export default {
    data(){
        return{
            id:this.$route.params.id  , //将url地址中传递过来的ID值挂载到data上，方便以后管理
        }
    },
    methods:{
        getNewsInfo(){}
    },
    components:{ //用来注册子组件
        "comment-box" : comment,
    }
    
}
</script>

<style lang="css" scope>
.newsinfo-container{
    padding: 4px;
}
.title{
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
}
.subtitle{
    font-size: 12px;
    color: black;
    display: flex;
    justify-content: space-between;
}
    
</style>