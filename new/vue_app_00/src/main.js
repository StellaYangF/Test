import Vue from 'vue'
import App from './App.vue'
import router from './router'
import'mint-ui/lib/style.css'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.withCredentials=true;
Vue.prototype.axios=axios;

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import {Header,Button,Tabbar,Swipe,SwipeItem} from "mint-ui"

Vue.component(Header.name,Header)
Vue.component(Button.name,Button)
Vue.component(Tabbar.name,Tabbar)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// 封装全局时间过滤器
Vue.filter("dateFilter", function(val) {
  var now=new Date(val);
  // 获取日期对象 年 月 日 时 分 秒
  var y=now.getFullYear(),
  m=now.getMonth()+1,
  d=now.getDate(),
  h=now.getHours(),
  mi=now.getMinutes(),
  s=now.getSeconds();
  // 月份与日期 如果当前月份小于10 前接0
  m<10&&(m="0"+m);   //短路运算
  d<10&&(d="0"+d);
  return `${y}-${m}-${d} ${h}:${mi}:${s}`;
});

 //内容过滤器

// 7. main.js引入第三方库qs
// 解决axios post方法请求问题
import qs from "qs";
Vue.prototype.qs=qs;
