<template>
  <div class="app-home">
    <!-- 顶部导航条mint-ui -->
    <mt-header fixed title="Xuezi Mall" class="header"></mt-header>
    <!-- 轮播图 mint-ui -->
    <mt-swipe :auto="8000">
      <mt-swipe-item v-for="img of imglist">
        <img :src="'http://localhost:3000/'+img.img">
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格 mint-ui -->
    <ul class="mui-table-view mui-grid-view mui-grid-9" id="grid-list">
      <li
        class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"
        id="grid-item"
        v-for="grid of gridlist"
      >
        <a href="#">
          <img :src="grid.img_url" :alt="'grid'+grid.id" class="grid-img">
          <div class="mui-media-body">{{grid.title}}</div>
        </a>
      </li>
    </ul>
    <!-- tabbar mui tabbar.html -->
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
  mounted() {},
  methods: {
    // 加载轮播图数据
    handleImg() {
      this.axios.get("http://localhost:3000/imglist").then(res => {
        this.imglist = res.data.data;
      });
    },
    handleGrid() {
      this.axios.get("http://localhost:3000/grid").then(res => {
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
.app-home .header{
  background:#820C3C;
}
.app-home .mint-swipe {
  height: 200px;
}
.app-home .mint-swipe img {
  width: 100%;
}
.grid-img {
  /* 物理像素120px */
  width: 60px;
  height: 60px;
}
#grid-list {
  background: #fff;
}
#grid-item {
  border: none;
}
</style>


