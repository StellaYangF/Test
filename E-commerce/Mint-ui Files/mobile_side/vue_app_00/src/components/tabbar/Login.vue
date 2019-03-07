<template>
  <div class="app-login">
    <h1>Login component</h1>
    <form>
      User Name:
      <input type="text" name="uname" v-model="uname">
      <br>Password:
      <input type="password" name="upwd" v-model="upwd">
      <br>
      <input type="button" value="click" @click="btnLogin">
    </form>
  </div>
</template>

<script>
// 1:引入mint-ui Toast局部使用
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      uname: "",
      upwd: ""
    };
  },
  methods: {
    btnLogin() {
      // 0:step by step check function
      console.log(123);
      // 1:获取用户输入用户名和密码
      var u = this.uname;
      var p = this.upwd;
      console.log(u + ":" + p);
      // 2:创建正则表达式验证用户名和密码格式是否正确
      var reg = /^[a-z0-9_]{3,8}$/i;
      if (!reg.test(u)) {
        // 提示用户信息
        Toast("用户名格式不正确。请检查");
        return;
      }
      if (!reg.test(p)) {
        Toast("密码格式不正确，请检查");
        return;
      }
      // 3:发送ajax
      console.log(3);
      var url = "http://localhost:3000/user/login";
      this.axios.get(url);
      // 4:获取服务器返回结果
      // 5:提示用户
      // console.log(this.username,this.pword);
      this.axios
        .get(url, {
          params: {
            uname: u,
            pwd: p
          }
        })
        .then(result => {
          console.log(result); //返回值为对象
          var code = result.data.code;
          if (code == 1) {
            Toast(result.data.msg);
          } else if (code == -1) {
            Toast(result.data.msg);
          }
        });
    }
  }
};
</script>
<style scoped>
</style>

