<template>
  <div class="app-newslist">
    <h1>Newslist</h1>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="news of newslist">
        <router-link :to="'/NewsInfo?nid='+news.id">
          <img class="mui-media-object mui-pull-left" src="http://localhost:3000/img/news/1.png">
          <div class="mui-media-body">
            News {{news.title}}
            <p class="mui-ellipsis">
              <span>{{news.ctime| dateFilter}}</span>
              <span>Read {{news.point}} times</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
    <mt-button size="large" @click="loadMore">Read more</mt-button>
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
      this.axios
        .get(`http://localhost:3000/newslist?pno=${this.pno}&psize=7`)
        .then(res => {
          var list = this.newslist.concat(res.data);
          this.newslist = list;
        });
    }
  }
};

</script>
<style scoped>
.mui-ellipsis {
  display: flex;
  justify-content: space-between;
}
</style>
