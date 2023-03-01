<template>
  <div class="whole">


    <el-container style="height: 100%" ref="homePage">
      <el-header style="background-color: #F8F8FF">
        <!--        <router-link to="test/ht"></router-link>-->
        <Header></Header>
        <!--        <router-view> </router-view>-->
      </el-header>

<!--      <el-container style="height: 100%">-->

          <!--          主体部分-->
          <el-main class="mainLand">
<!--            <Main></Main>-->

            <router-view></router-view>
          </el-main>

        <!--        <el-aside width="300px" >Aside</el-aside>-->
<!--      </el-container>-->

    </el-container>


  </div>
</template>

<script>
  var CollectButton = document.querySelector("#collectButton");

  import Header from "./Header"
  import Main from "./IndexBody"

  export default {
    name: "index",
    components:{
      Header,
      Main,
    },
    data() {
      return {
        searchInput: '',
        drawer: false,
        direction: 'rtl',
        drawerSerach: false,
        directionSerach: 'ttb',

        //电影是否加载中
        hotLoading: false,
        NewLoading: false,
        ham: 6,
        newham: 5,

        //无限滚动:
        currentScrollCount: 12,
        loading: false,

        //是否收藏
        currentStatusOfCollection:false,
      };
    },

    mounted() {
      // 获取浏览器可视区域高度,设置顶部固定不滚动
      this.clientHeight = `${document.documentElement.clientHeight}`
      //document.body.clientWidth;
      //console.log(self.clientHeight);
      window.onresize = function temp() {
        this.clientHeight = `${document.documentElement.clientHeight}`;
      };

      console.log(window.innerWidth)      //移动端最热电影缩进设置
      this.$nextTick(() => {
        if (window.innerWidth < 900) {
          this.ham = 0;
          this.newham = 0;

        }
      })
    },
    computed: {   //无限滚动
      noMore() {
        return this.currentScrollCount >= 30
      },
      disabled() {
        return this.loading || this.noMore
      }
    },
    // mounted(){
    //
    // },
    watch: {
      // 如果 `clientHeight` 发生改变，这个函数就会运行
      clientHeight: function () {
        this.changeFixed(this.clientHeight)
      }
    },
    methods: {
      changeFixed(clientHeight) { //动态修改样式,导航栏不动
        // console.log(clientHeight);
        // console.log(this.$refs.homePage.$el.style.height);
        this.$refs.homePage.$el.style.height = clientHeight - 20 + 'px';
      },
      load() {   //加载更多最新
        this.loading = true
        setTimeout(() => {
          this.currentScrollCount += 6
          this.loading = false
        }, 2000)
      },
      switchCollect() {    //收藏
        this.currentStatusOfCollection = !this.currentStatusOfCollection;
      },
    }
  }
  import 'element-ui/lib/theme-chalk/display.css';
</script>

<style scoped>
  /*布局样式：*/


  .el-header, .el-footer {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    /*line-height: 60px;*/
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    /*background-color: #E0EEEE;*/
    background-color: black;
    color: #333;
    text-align: center;
    /*line-height: 160px;*/
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

  .whole {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }


  @media screen and (max-width: 1440px){
    .el-header, .el-footer {
      background-color: #D3DCE6;
      color: #333;
      text-align: center;
      line-height: 60px;
    }
  }



</style>

