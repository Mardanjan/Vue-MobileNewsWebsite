<template>
    <div class="cmt-container">
        <footer>
<mt-button type="primary" size="large">发表评论</mt-button> 
        </footer>
            
    </div>
</template>

<script>
export default {
    data(){
        return{
            pageIndex: 1, //默认显示第一页的数据
        }
    }
}
</script>

<style lang="css">
    h3{
        font-size: 18px;
    }
    textarea{
        font-size: 14px;
        height: 85px;
        margin: none;
    }
    .cmt-list{

    }
    .cmt-title{
        background-color: #ccc;
        font-size: 13px;
        line-height: 30px;
    }
    .cmt-body{
        line-height: 35px;
        text-indent: 2em;
        background-color:white;
    }
</style>