<template>
    <div >
        <hr>
        <div class="header">
        <h3>发表评论</h3>
        <textarea  cols="30" rows="5" v-model="commentText"></textarea>
        
        <div class="submitComment">
            <button  @click="addComment()" >发表</button>
        </div>
        
        </div>
       

        <div v-for="item in comments" :key="item.to"> 
             <hr>
            <div class="userInfo">
                <div class="userinfo-name">
                    <span >{{item.from}}</span>
                </div>
                <div class="userinfo-ctime">
                    <span >{{item.ctime}}</span>
                </div>
                
            </div>
            <div class="userComment">
                <span>{{item.commentText}}</span>
            </div>
           
        </div>
<!-- 
        <div class="moreComment">
            <button @click="getComment()">加载更多</button>
        </div> -->
    
    </div>

</template>

<script>
import {Toast} from 'mint-ui'  
export default {
    data(){
        return{
            comments:[],
            id:this.$route.params.id,
            commentText:'',
        }
    },
    created(){
       this.getComment()
    },
    methods:{   
        getComment(){
         //   console.log(this.id)
            this.$http.get("api/newsComment/getCommentsById?id="+this.id).then(result =>{
             if(result.body.code === 200){
                //console.log(result.body)     
                this.comments = result.body.data   
             }else{
                 console.log("error")        
             }
         })
        },
        addComment(){
        //    console.log(this.id)
         //   console.log(this.commentText)
            this.$http.get("api/newsComment/addNewsCommentById?id="+this.id+"&commentText="+this.commentText).then(result =>{
             if(result.body.code === 200){        
                 Toast("评论成功！")
                 this.getComment()
                 this.commentText=''
             }else{
                 Toast("评论失败！")
             }
         })
        },
    }
}
</script>

<style lang="css">

.userInfo{
    display: flex;
    background-color:antiquewhite;
    padding: 1px;
}
.userinfo-name{
    width: 50%;
}
.userinfo-ctime{
    width: 50%;
}
.userComment{
    
    background-color: beige;
}
.submitComment{
    text-align: center;
  
}
textarea{
    margin-bottom: 5px;
    padding:0px;
}
.moreComment{
    text-align: center;
}
h3{
    text-align: center;
}

</style>