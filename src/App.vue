<template>
    <div class="app-container">
        
    
        <transition>
        <router-view></router-view>   
        </transition>
     
        <!-- 底部 tabber 区域 -->
        <!-- todo 图标改一下 -->
   

    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="css" scoped>
.app-container{
    padding-top:40px;
    /* overflow-x: hidden; */
    /* position: absolute; */
}

mt-header{
    position: absolute;
}
mui-bar mui-bar-tab{
    position: absolute;
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