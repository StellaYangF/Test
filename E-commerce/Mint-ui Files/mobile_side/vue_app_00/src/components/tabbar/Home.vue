<template>
  <div class="app-home">
    <!-- topnavbar mint-ui -->
    <mt-header fixed title="E-commerce" class="header"></mt-header>
    <!-- carousel -->
    <mt-swipe :auto="8000">
      <mt-swipe-item v-for="img of imglist">
        <img :src="img.img_url" :alt="img.id">
      </mt-swipe-item>
    </mt-swipe>
    <!--  grid-->
    <ul class="mui-table-view mui-grid-view mui-grid-9 grid-list">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="grid of gridlist">
        <a href="#">
          <img :src="grid.img_url" :alt="grid.id" class="grid-img">
          <div class="mui-media-body">{{grid.title}}</div>
        </a>
      </li>
    </ul>
    <!-- bottom navbar -->
     <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item mui-active" href="#tabbar">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">Home</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-contact">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">Membership</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-contact">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">4</span></span>
        <span class="mui-tab-label">Cart</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-map">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">Search</span>
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imglist: [],
      gridlist: []
    };
  },
  created() {
    this.handleImg();
    this.handleGrid();
  },
  methods: {
    handleImg() {
      this.axios.get("http://127.0.0.1:3000/product/imglist").then(res => {
        this.imglist = res.data;
      });
    },
    handleGrid() {
      this.axios.get("http://127.0.0.1:3000/product/productlist").then(res => {
        this.gridlist = res.data;
      });
    }
  }
};
</script>

<style scoped>
.app-home {
  padding: 2px;
}
.app-home .header {
  background: rgba(47, 44, 47, 0.5);
}
.app-home .mint-swipe {
  height: 230px;
}
.app-home .mint-swipe img {
  width: 100%;
}
.app-home .grid-list {
  background: #fff;
}
.app-home .grid-list li {
  border: none;
}
.grid-img {
  width: 60px;
  height: 60px;
}
</style>

