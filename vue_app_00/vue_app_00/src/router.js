import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
// 1.引入Test 组件
import Test from "./components/Test.vue"
import List from "./components/List.vue"
import Login from "./components/tabbar/Login.vue"

Vue.use(Router)
// 2.为Test组件配置访问路径 /Test
export default new Router({
  routes: [
    {path:'/',component:HelloContainer},
    {path:"/Test",component:Test},
    {path:"/List",component:List},
    {path:"/Login",component:Login}
  ]
})
