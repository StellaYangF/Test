<template>
  <div class="app-shopcart">
    <mt-header title="Shopping Cart" fixed class="mt-header"></mt-header>
    <div class="mui-card">
      <div class="mui-card-header">
        <input type="checkbox" @click="slcAll" :checked="allcb">全选
      </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <!-- 商品信息的开始 -->
          <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(item,i) of list">
              <a href="javascript:;">
                <div class="mui-media-body">
                  <p class="mui-ellipsis">
                    <span>
                      <!-- 商品前复选狂 -->
                      <!-- 双向绑定复选框checked的属性值为商品遍历时追加的cb -->
                      <input
                        type="checkbox"
                        :data-id="item.id"
                        :data-i="i"
                        @click="modifyItem"
                        :checked="item.cb"
                      >
                      {{item.pname}} ¥{{item.price.toFixed(2)}}
                    </span>
                    <span>
                      <button @click="removeItem" :data-id="item.id" :data-idx="i">Delete</button>
                    </span>
                  </p>
                </div>
              </a>
            </li>
          </ul>
          <!-- 商品信息的结束 -->
        </div>
      </div>
      <div class="mui-card-footer">
        <button @click="removeMItem">Delete</button>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      list: [], //购物车列表
      allcb: false //全选状态 默认未选中
    };
  },
  created() {
    this.loadMore();
  },

  methods: {
    loadMore() {
      this.axios.get("http://localhost:3000/getShopCart").then(res => {
        // 复选狂的对象
        // this.list = res.data.data;
        var list = res.data.data;
        // 遍历返回的结果数组，并给每一个对象添加属性cb（CheckBox:false）
        for (var item of list) {
          item.cb = false;
        }
        this.list = list;
      });
    },

    removeItem(e) {
      var answer = confirm("Are you sure to remove the product?");
      if (answer) {
        var id = e.target.dataset.id;
        var i = e.target.dataset.idx;
        this.axios
          .post("http://localhost:3000/removeItem", `id=${id}`)
          .then(res => {
            /*method one more efficent*/
            this.list.splice(i, 1);
            /* method two*/
            // this.loadMore();
            Toast(res.data.msg);
          });
      }
    },

    // 删除选中的多个商品
    removeMItem() {
      // 准备一个空数组 或者字符串均可
      /* 方法一：数组*/
      /* var idlist = [];
      // 遍历得出复选框选中的所有列
      for (var item of this.list) {
        if (item.cb) {
          idlist.push(item.id);
        }
      }
      var ids=idlist.join(",");*/

      /*方法二：空字符串 */
      var ids = "";
      for (var item of this.list) {
        if (item.cb) {
          ids += item.id + ",";
        }
      }
      if (ids.length == 0) {
        Toast("请选中您要删除的商品！");
        return;
      }
      // ids.length-1截取最后的",""
      ids = ids.substring(0, ids.length - 1);
      console.log(ids);
      // send request
      this.axios
        .get(`http://localhost:3000/removeMItem?ids=${ids}`)
        .then(res => {
          Toast(res.data.msg);
          this.loadMore();
        });
    },

    // 商品复选框点击事假
    modifyItem(e) {
      // 1.获取当前元素选中状态true fasle
      var rs = e.target.checked;
      // 2.当前元素在数组中下标
      var i = e.target.dataset.i;
      // 3.将状态赋值当前数组下标中对象cb值
      this.list[i].cb = rs;

      // 4. 判断全选复选框的状态 true false
      // 4.1 获取数组个数
      var size1 = this.list.length;
      var size2 = 0;
      for (var item of this.list) {
        // 4.2 计算数组中cb true个数
        if (item.cb) {
          size2++;
        }
      }
      // 4.3 数组个数==cb true个数
      if (size1 == size2) {
        // 4.4 将allcb=true
        this.allcb = true;
      } else {
        // 4.5 否则allcb=false
        this.allcb = false;
      }
    },

    // 全选复选框绑定事件
    slcAll(e) {
      // 1. 获取全选按钮选中状态
      var rs = e.target.checked;
      // 2. 遍历数据所有元素
      for (var item of this.list) {
        // 3. 修改item.cb=全选状态
        item.cb = rs;
      }
      // 4. 全选复选框根据商品复选框变动而变动
      this.allcb = rs;
    }
  }
};
</script>
<style scoped>
.mt-header{
  background:#EF5BA1;
}
.mui-ellipsis {
  display: flex;
  justify-content: space-between;
}
.mui-card-header {
  justify-content: flex-start;
}
.mui-table-view>li:nth-child(even){
  background:rgba(196, 196, 196, 0.301);
}
</style>
