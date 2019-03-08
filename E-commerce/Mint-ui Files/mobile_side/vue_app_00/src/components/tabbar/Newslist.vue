<template>
  <div class="app-newslist">
    <mt-header fixed title="News Items" class="header"></mt-header>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="news of newslist">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="http://localhost:3000/img/news/cbd.jpg">
          <div class="mui-media-body">News
            <p class="mui-ellipsis">
              <span>{{news.ctime | dateFilter}}</span>
              <span>click {{news.point}} times</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
    <mt-button size="large" style="primary" @click="loadMore">View more</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newslist: [],
      pno: 0
    };
  },
  created() {
    this.loadMore();
  },
  methods: {
    loadMore() {
      this.pno++;
      this.axios.get(`http://localhost:3000/product/newslist?pno=${this.pno}`).then(res => {
        var list = this.newslist.concat(res.data.data);
        this.newslist = list;
      });
    }
  }
};
</script>
<style scoped>
.app-newslist .header {
  background: #2f2c2f;
}
.mui-ellipsis {
  display: flex;
  justify-content: space-between;
}
</style>
