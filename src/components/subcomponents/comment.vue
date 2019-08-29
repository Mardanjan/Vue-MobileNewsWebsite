<template>
    <div class="cmt-container">
        <h3>评论组件</h3>

        <textarea name="" id="" cols="30" rows="10" placeholder="请输入评论" maxlength="120"></textarea>
        
        <mt-button type="primary" size="large">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    第一楼 用户 匿名用户 发表时间20000
                    <div class="cmt-body">
                         评论都是在代码里写死的，因为教程里的接口失效了，没有办法获取评论
                    </div>
                </div>
            </div>

             <div class="cmt-item">
                <div class="cmt-title">
                    第二楼 用户 匿名用户 发表时间20000
                    <div class="cmt-body">
                           评论都是在代码里写死的，因为教程里的接口失效了，没有办法获取评论
                    </div>
                </div>
            </div>

             <div class="cmt-item">
                <div class="cmt-title">
                    第三楼 用户 匿名用户 发表时间20000
                    <div class="cmt-body">
                           评论都是在代码里写死的，因为教程里的接口失效了，没有办法获取评论
                    </div>
                </div>
            </div>

             <div class="cmt-item">
                <div class="cmt-title">
                    第四楼 用户 匿名用户 发表时间20000
                    <div class="cmt-body">
                          评论都是在代码里写死的，因为教程里的接口失效了，没有办法获取评论
                    </div>
                </div>
            </div>

             <div class="cmt-item">
                <div class="cmt-title">
                    第五楼 用户 匿名用户 发表时间20000
                    <div class="cmt-body">
                            评论都是在代码里写死的，因为教程里的接口失效了，没有办法获取评论
                    </div>
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large">加载更多</mt-button>

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