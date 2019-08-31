<template>
    <div class="app-container">
        
        <!-- header -->
        <mt-header fixed title="kujijiku.com"></mt-header>


        <!-- 中间的router-view区域 -->
        <transition>
        <router-view></router-view>   
        </transition>
     
        <!-- 底部 tabber 区域 -->
        <!-- todo 图标改一下 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
            
			<router-link class="mui-tab-item" to="/blog">
				<span class="mui-icon mui-icon-email"><span class="mui-badge"></span></span>
				<span class="mui-tab-label">博客</span>
			</router-link>
			<router-link class="mui-tab-item" to="/sicret">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">树洞</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
	    </nav>

    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="css" scoped>
.app-container{
    padding-top:40px;
    overflow-x: hidden;
    /* position: absolute; */
}
.v-enter{
    opacity: 0;
    transform: translateX(100%)
}
.v-leave-to{
     opacity: 0;
    transform: translateX(-100%);
    position:absolute;
}
.v-enter-active,
.v-leave-active{
    transition: all 0.5s ease;
}
mt-header{
    position: absolute;
}
mui-bar mui-bar-tab{
    position: absolute;
}
</style>