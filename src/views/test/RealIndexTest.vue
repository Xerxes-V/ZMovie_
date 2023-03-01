<template>
  <div class="whole">


    <el-container style="height: 100%" ref="homePage">
      <el-header style="background-color: #F8F8FF">
<!--        <router-link to="test/ht"></router-link>-->
        <header-test></header-test>
        <!--        <router-view> </router-view>-->
      </el-header>

      <el-container style="height: 100%">
        <el-container>
          <!--          主体部分-->
          <el-main class="mainLand">
              <main-test></main-test>
          </el-main>
        </el-container>

        <!--        <el-aside width="300px" >Aside</el-aside>-->
      </el-container>

    </el-container>


  </div>
</template>

<script>
  var CollectButton = document.querySelector("#collectButton");

  import HeaderTest from "./HeaderTest"
  import mainTest from "./MainBodyTest"

  export default {
    name: "RealIndexTest",
    components:{
      HeaderTest,
      mainTest,
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
    line-height: 60px;
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


  /*导航栏样式：*/
  /*  .el-menu {*/
  /*    width: 600px;*/
  /*    margin: auto;*/
  /*  }*/


  /*头像居中对齐*/
  .parent {
    display: flex;
    justify-content: center; /*主轴上居中*/
    align-items: center; /*侧轴上居中*/
  }

  /*移动端导航栏三条杠大小*/
  .menu-button {
    font-size: 30px;
  }

  /*走马灯：*/
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .MaDeng {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 30px;
  }

  /*最热:*/
  .HottestGuideText {
    font-size: 25px;
    text-align: left;
  }

  .HottestGuideMore {
    font-size: 120px;
  }

  /*最新表格:*/

  #contain {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /*background-color: wheat;*/

  }

  /*屏幕尺寸自适应*/
  @media screen and (max-width: 1440px) {
    .outside {
      width: 119px;
    }

    .ImgSize {
      width: 110px;
      height: 140px;
    }

    .HottestWholeHeight {
      height: 170px;
    }

    .main {
      width: 33%;
      height: 200px;
      /*background-color: ;*/
      text-align: center;
    }
    .Newscore{
      position: absolute;
      bottom: 49px;
      right: 2px;
    }
  }

  /*!* 屏幕等于1440px *!*/
  /*@media screen and (max-width: 1440px) and (min-width: 1440px) {*/
  /*  .add {*/
  /*    width: 348px;*/
  /*  }*/
  /*}*/

  /* 屏幕大于1440px */
  @media screen and (min-width: 1441px) {
    .outside {
      width: 135px;
    }

    .ImgSize {
      height: 175px;
      width: 135px;
    }

    .HottestWholeHeight {
      height: 300px;
    }

    .main {
      width: 158px;
      height: 250px;
      /*background-color: ;*/
      text-align: center;
    }
    .Newscore{
      position: absolute;
      bottom: 28px;
      right: 28px;
    }
  }

  /*图片嵌套收藏:*/
  .BigBox {
    position: relative;
  }

  .collection {
    position: absolute;
    top: 3px;
    left: 5px;
  }

  .score {
    position: absolute;
    bottom: 30px;
    right: 0px;
  }



</style>

