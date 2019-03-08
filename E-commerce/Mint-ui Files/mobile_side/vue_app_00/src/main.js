import Vue from 'vue'
import App from './App.vue'
import router from './router'
import'mint-ui/lib/style.css'

// axios1:引入库
import axios from 'axios'

Vue.config.productionTip = false

// axios2:配置跨域选项
axios.defaults.withCredentials=true;

// axios3:库作为实例对象Vue的圆形对象的方法
Vue.prototype.axios=axios;

// axios4:使用在子组件的script中


// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'

// 1:引入Header，Button组件(区别于引入axios，因其需要引入整个axios库)

import {Header,Button,Tabbar,Swipe,SwipeItem} from "mint-ui"
// 2:注册Header组件
Vue.component(Header.name,Header)
Vue.component(Button.name,Button)
Vue.component(Tabbar.name,Tabbar)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

// filters
Vue.filter("dateFilter",function(val){
  var now=new Date(val),
  y=now.getFullYear(),
  m=now.getMonth()+1,
  d=now.getDate(),
  h=now.getHours(),
  mi=now.getMinutes(),
  s=now.getSeconds();
  // 巧用逻辑短路来判断赋值未满两位数的月份和日期
  m<10&&(m="0"+m);
  d<10&&(d="0"+d);
  return (`${y}-${m}-${d} ${h}:${mi}:${s}`)
})