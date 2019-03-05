import Vue from 'vue'
import App from './App.vue'
import router from './router'
import'mint-ui/lib/style.css'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.withCredentials=true;
Vue.prototype.axios=axios;
//5: 设置请求的根路径 
//Vue.http.options.root = "http://127.0.0.1/vue_ser/";
//6:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
//Vue.http.options.emulateJSON = true;
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'
// 1:引入Header，Button组件
import {Header,Button,Tabbar} from "mint-ui"
// 2:注册Header组件
Vue.component(Header.name,Header)
Vue.component(Button.name,Button)
Vue.component(Tabbar.name,Tabbar)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
