<template>
  <div class="app-goodslist">
    <!-- header -->
    <mt-header class="mt-header" title="Goods Information" fixed></mt-header>
    <!-- GoodsInfo -->
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <div class="mui-media-body">
            {{pname}}
            <p class="mui-ellipsis">
              <img
                src="http://localhost:3000/img/product/md/57ad359dNd4a6f130.jpg"
                class="info_img"
              >
            </p>
            <p class="mui-ellipsis price">价格：¥ {{price.toFixed(2)}}</p>
          </div>
        </a>
      </li>
    </ul>
    <!-- add to cart -->
    <div class="footer">
      <input type="text" v-model="count" class="countinput">
      <span class="btn-group" @click="change">
        <button class="btn">+</button>
        <button class="btn">-</button>
      </span>
      <mt-button @click="addcart">加入购物车</mt-button>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      fid: this.$route.query.fid,
      lid: this.$route.query.lid,
      pid: this.$route.query.pid,
      price: parseFloat(this.$route.query.price),
      pname: this.$route.query.pname,
      count: 1
    };
  },
  created() {},
  methods: {
    change(e) {
      if (e.target.innerHTML === "+") {
        this.count++;
      } else {
        if (this.count > 1) {
          this.count--;
        }
      }
    },
    addcart() {
      this.axios.get(`http://localhost:3000/addcart?pid=${this.pid}&pname=${this.pname}&price=${this.price}&count=${this.count}`)
      .then(res=>{
        Toast(res.data.msg)
      })
    }
  }
};
</script>
<style scoped>
.mt-header {
  background: #820c3c;
}
.mui-table-view-cell {
  text-align: center;
}
.info_img {
  width: 80%;
}
.price {
  color: #ef5ba1;
  font-weight: bold;
  position: relative;
  bottom: 36px;
  font-size: 20px;
}
.countinput {
  width: 16%;
  text-align: center;
  border-right-color: 0;
}
.btn-group {
  display: inline-flex;
  flex-direction: column;
  position: relative;
}
.btn {
  height: 20px;
  padding: 0px 3px;
  border-radius: 0;
}
.footer {
  display: flex;
  justify-content: flex-end;
}
</style>
