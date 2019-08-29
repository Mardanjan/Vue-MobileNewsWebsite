# kujijiku 前端


## 制作首页app组件
1. 完成header，使用的是mint-ui
2. 底部tabber

##改造tabbar为路由 router-link

##设置路由高亮

## 点击tabbar中的路由连接，展示对应的路由组件

## 加载首页轮播图数据
1. 获取数据，如何获取，使用vue-resource  
2. 使用vue-resource 的 this.$http.get 获取数据
3. 获取到的数据保存到data身上
4. 使用v-for循环渲染每个item项

## 改造九宫格区域的样式

## Promise
1. Promise 是构造函数 ， 那么我们可以new 一个得到它的实例
2. 上一个promise中返回一个promise .then 之后继续使用

## 改造新闻资讯链接

## 新闻资讯页面制作
1.  绘制界面
2.  使用vue-resource获取数据
3.  数据放到页面上展示

## 实现新闻资讯列表点击跳转到新闻详情
1. 列表中的每一项改造为router-link
2. 跳转的时候应该提供唯一的标识符id
3. 创建新闻详情的组件页面
4. 在路由模块中将新闻详情的路由地址修改一下 

## 实现新闻详情的页面布局和数据渲染

## 单独封装一个评论组件
1. 先创建一个单独的comment.vue组件
2. 在需要使用comment组件的页面中，先手动导入comment组件
3. import comment from './comment.vue'
4. 在父组件中使用 components属性将刚才导入的comment组件注册为自己的 子组件
5. 将注册子组件的时候，注册名以标签的形式在页面中引用即可

## 获取所有的评论数据显示到页面中