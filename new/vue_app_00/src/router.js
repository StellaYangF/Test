import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
// 1.引入Test 组件
import Test from "./components/Test.vue"
import List from "./components/List.vue"
import Login from "./components/tabbar/Login.vue"
import Goodslist from "./components/tabbar/Goodslist.vue"
import Home from "./components/tabbar/Home.vue"
import GoodsInfo from "./components/tabbar/GoodsInfo.vue"
import Newslist from "./components/home/Newslist.vue"
import Test1 from "./components/test/Test1.vue"
import Test2 from "./components/test/Test2.vue"
import NewsInfo from "./components/home/NewsInfo.vue"
import ShopCart from "./components/home/ShopCart.vue"

Vue.use(Router)
// 2.为Test组件配置访问路径 /Test
export default new Router({
  routes: [
    {path:'/',component:HelloContainer},
    {path:"/Test",component:Test},
    {path:"/List",component:List},
    {path:"/Login",component:Login},
    {path:"/Goodslist",component:Goodslist},
    {path:"/Home",component:Home},
    {path:"/Newslist",component:Newslist},
    {path:"/Test1",component:Test1},
    {path:"/Test2",component:Test2},
    {path:"/NewsInfo",component:NewsInfo},
    {path:"/ShopCart",component:ShopCart},
    {path:"/GoodsInfo",component:GoodsInfo}
  ]
})
