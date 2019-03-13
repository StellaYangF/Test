<template>
  <div class="app-goodlist">
    <!-- header -->
    <mt-header title="Goods List" fixed class="mt-header"></mt-header>
    <!-- 商品详信息开始 -->
    <!-- 遍历返回的产品 -->
    <div class="good-item" v-for="product of products">
      <img :src="'http://localhost:3000/'+product.md" @click="jump" :data-fid="product.family_id" :data-lid="product.lid" :data-pid="product.pid" :data-price="product.price" :data-pname="product.lname">
      <div class="info">
        <h4>{{product.lname}}</h4>
        <span class="now">¥{{product.price.toFixed(2)}}</span>
      </div>
      <div class="sell">
        <span>It's onsale.</span>
      </div>
    </div>
    <!-- 商品信息结束 -->
    <p class="good-end">These are the products of current page.</p>
    <!-- 加载更多 -->
      <mt-button size="large" type="primary" @click="loadMore" class="mt-button">Load more</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [],
      pno: 0
    };
  },
    created() {
      // 当组件创建成功后立即调用加载下一页方法
      this.loadMore();
    },
  methods: {
    // add jump method to router-link
    jump(e){
      var e=e.target.dataset;
      this.$router.push("/GoodsInfo?fid="+e.fid+"&lid="+e.lid+"&pid="+e.pid+"&pname="+e.pname+"&price="+e.price);
    },
    // 加载下一页数据并且将数据显示在模块上
    loadMore() {
      // 0:调试
      // conosle.log(123);
      // 获取页码
      this.pno++;
      // 0.1:获取当前页码
      // 1：创建变量url请求地址
      // 2：发送ajax请求
  this.axios
      .get(`http://localhost:3000/getProducts?pno=${this.pno}&psize=4`)
      .then(res => {
      // 3：获取服务器返回结果保存data
      // 4.数组拼接操作加载一页完成加载下一页功能
      var list=this.products.concat(res.data.data)
       this.products=list;
       console.log(list);
      });
    }
  }
};
</script>

<style scoped>
/* header */
.mt-header{
  background: #820C3C;
}
.mt-button{
  background: #ccc;
}
/* 外层父元素 */
.app-goodlist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 4px;
  position: relative;
}
/* 商品信息 */
.app-goodlist .good-item {
  width: 49%;
  border: 1px solid #ccc;
  margin: 2px 0;
  padding: 2px;
  display: flex;
  flex-direction: column;
  min-height: 245px;
  align-items: center;
}
/* 商品图片 */
.app-goodlist .good-item img {
  width: 100%;
  cursor:pointer;
}
/* 商品名称 */
.info {
  text-align: center;
  color: rgb(66, 59, 59);
}
/* 商品价格 */
.now {
  color: #EF5BA1;
}
/* 商品详细信息结束 */
.good-end {
  width: 100%;
  text-align: center;
  background: #fff;
}
/* 按钮下一页 */
</style>


