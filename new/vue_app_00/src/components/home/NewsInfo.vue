<template>
  <div class="app-newsInfo">
    <h1>News Details</h1>
    <div class="mui-card">
      <div
        class="mui-card-header mui-card-media"
        :style="'height:40vw;background-image:url('+newsItem.img_url+')'"
      ></div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>{{newsItem.ctime|dateFilter}}</p>
          <p style="color: #333;">{{newsItem.content}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <a class="mui-card-link">Like</a>
        <a class="mui-card-link">Read more</a>
      </div>
    </div>
    <!-- 评论区开始 -->
    <div class="mui-card-content">
      <div class="mui-card-content-inner">
        <textarea placeholder="请吐槽最多120个字" maxlength="120" v-model="comment"></textarea>
        <mt-button size="large" type="primary" @click="addcomment">发表评论</mt-button>
      </div>
    </div>
    <!-- 评论区结束 -->
    <!-- 评论列表开始 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) of list">
              <div>第{{i+1}}楼 发表时间：{{item.ctime | dateFilter}}</div>
              <div>{{item.content}}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 记载更多 start -->
      <mt-button size="large" type="primary" @click="loadMore">查看更多评论</mt-button>
      <!-- 记载更多 end -->
    </div>
    <!-- 评论列表结束 -->
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      // 带参传递的数据也可写在created(){}中
      nid: this.$route.query.nid,
      newsItem: {},
      comment: "",
      list: [],
      pno: 0,
      psize: 5
    };
  },
  created() {
    this.findNewsInfo();
    this.loadMore();
  },
  methods: {
    findNewsInfo() {
      var reg = /^[0-9]{1,}$/;
      // 拦截用户非常传参
      if (!reg.test(this.nid)) {
        Toast("新闻查询格式不正确！");
        return;
      }
      this.axios
        .get(`http://localhost:3000/newsInfo?nid=${this.nid}`)
        .then(res => {
          this.newsItem = res.data;
        });
    },
    addcomment() {
      // 去除评论两端的空格
      // var com=this.comment.replace(/^\s+|\s+$/g,"");
      var com = this.comment.trim();
      var size = com.length;
      // 判断评论不能为空
      if (size == 0) {
        Toast("评论不能为空");
        this.comment = "";
        return;
      }
      /*  
      // post方法发送1：
      // 创建postData保存新闻nid评论内容
      var postData=this.qs.stringify({
        nid,
        content:com
      })
      // 发送
      this.axios.post("http://localhost:3000/addcomment",postData).then(res=>{
        Toast("评论成功");
      })
      this.comment="";
       */

      // post方法发送2：
      this.axios
        .post(
          "http://localhost:3000/addcomment",
          `nid=${this.nid}&content=${com}`
        )
        .then(res => {
          Toast("评论成功");
          // 如果评论成功，清空原有发表内容
          this.comment = "";
          // 加载评论列表
          this.pno = 0;
          this.list = []; //清空原有数据
          this.loadMore();
        });
    },
    loadMore() {
      this.pno++;
      var pno = this.pno,
        psize = this.psize;
      // 验证页码和psize
      var reg = /^[0-9]{1,}$/;
      if (!reg.test(pno)) {
        Toast("页码格式不正确");
        return;
      }
      if (!reg.test(psize)) {
        Toast("页面显示数量不正确");
      }
      this.axios
        .get(
          `http://localhost:3000/getcomment?nid=${
            this.nid
          }&pno=${pno}&psize=${psize}`
        )
        .then(res => {
          var list = this.list.concat(res.data.data);
          this.list = list;
        });
    }
  }
};
</script>
<style>
</style>
