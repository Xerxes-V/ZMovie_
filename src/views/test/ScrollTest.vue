<template>

<div id="ddd">
  <el-container ref="homePage">
    <el-header>Header</el-header>
    <el-container style=" border: 1px solid #eee">
      <el-main style="height: 800px">
        <div style="height: 400px;width: 300px;background-color: black">
          <div class="box">
            <template>
              <div
                class="list"
                v-infinite-scroll="load"
                infinite-scroll-disabled="disabled">
                <div v-for="i in count" class="list-item">{{ i }}</div>
              </div>
              <p v-if="loading">加载中...</p>
              <p v-if="noMore">没有更多了</p>
            </template>
          </div>

        </div>


      </el-main>
    </el-container>
  </el-container>


</div>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return {
        count: 10,
        loading: false
      }
    },
    computed: {
      noMore () {
        return this.count >= 20
      },
      disabled () {
        return this.loading || this.noMore
      }
    },
    mounted(){
      // 获取浏览器可视区域高度
      this.clientHeight =   `${document.documentElement.clientHeight}`
      //document.body.clientWidth;
      //console.log(self.clientHeight);
      window.onresize = function temp() {
        this.clientHeight = `${document.documentElement.clientHeight}`;
      };
    },
    watch: {
      // 如果 `clientHeight` 发生改变，这个函数就会运行
      clientHeight: function () {
        this.changeFixed(this.clientHeight)
      }
    },

    methods:{

      changeFixed(clientHeight){ //动态修改样式
        // console.log(clientHeight);
        // console.log(this.$refs.homePage.$el.style.height);
        this.$refs.homePage.$el.style.height = clientHeight-20+'px';
      },
      load () {
        this.loading = true
        setTimeout(() => {
          this.count += 2
          this.loading = false
        }, 2000)
      }
    },
  }

</script>

<style>
  .operation-wrapper {
    width: 100% !important;
  .el-header{
    height:61px;
  }
  .el-aside {
    width:200px;
    height: calc(100vh - 61px); //61px为顶部header盒子高度
  overflow-y: auto;
  }
  .el-main {
    padding: 0px 16px !important;
    height: calc(100vh - 61px); //61px为顶部header盒子高度
  overflow-y: auto;
  }
  }

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .box {
    height: 300px;
    width: 200px;
    background-color: wheat;
  }
</style>
