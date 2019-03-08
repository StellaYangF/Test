import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
// 1.引入Login组件
import Login from "./components/tabbar/Login.vue"
import Goodslist from "./components/tabbar/Goodslist.vue"
import Home from "./components/tabbar/Home.vue"
import Newslist from "./components/tabbar/Newslist.vue"

Vue.use(Router)
// 2.为Test组件配置访问路径 /Test
export default new Router({
  routes: [
    { path: '/', component: HelloContainer },
    { path: "/Login", component: Login },
    { path: "/Goodslist", component: Goodslist },
    { path: "/Home", component: Home },
    { path: "/Newslist", component: Newslist }
  ]
})
