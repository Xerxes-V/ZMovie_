<template>
<!--  <el-header>-->
 <div>
   <div class="line"></div>
   <el-row type="flex" align="middle" style="width: 100%">
     <!--          搜索框-->
     <el-col :xs="6" :sm="6" :md="4" :lg="3" :xl="4" :offset="6" class=" hidden-sm-and-down">
       <el-input
         placeholder="请输入内容"
         v-model="searchInput">
         <i slot="prefix" class="el-input__icon el-icon-search"></i>
       </el-input>
     </el-col>

     <!--          搜索框移动端-->

     <el-col :xs="6" :sm="6" :md="4" :lg="3" :xl="4" :offset="3" class="hidden-md-and-up">

       <div class="menu-button">
         <i @click="drawerSerach = true" type="text" class="el-icon-search">
         </i>
       </div>

       <el-drawer
         :visible.sync="drawerSerach"
         :direction="directionSerach"
         :withHeader="false"
         :size=60
         :before-close="handleClose">

         <!--                  展开后-->
         <span>
                <el-row type="flex" align="middle" style="width: 100%">
                  <el-col :span="17" :offset="1">
                    <el-input
                      placeholder=""
                      v-model="searchInput" clearable>
                      <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>

                  </el-col>
                  <el-col :span="2">
                    <div>
                      a
                    </div>
                  </el-col>
                </el-row>
              </span>


       </el-drawer>


     </el-col>


     <!--          导航栏-->
     <el-col :xs="10" :sm="6" :md="12" :lg="3" :xl="6" offset="1" class=" hidden-sm-and-down">
       <el-menu
         :default-aactive="activeIndex2"
         class="el-menu-demo"
         mode="horizontal"
         @select="handleSelect"
         background-color="	#F8F8FF "
         text-color="green"
         active-text-color="#ffd04b">
         <el-menu-item index="1">处理中心</el-menu-item>
         <el-submenu index="2">
           <template slot="title">我的工作台</template>
           <el-menu-item index="2-1">选项1</el-menu-item>
           <el-menu-item index="2-2">选项2</el-menu-item>
           <el-menu-item index="2-3">选项3</el-menu-item>
           <el-submenu index="2-4">
             <template slot="title">选项4</template>
             <el-menu-item index="2-4-1">选项1</el-menu-item>
             <el-menu-item index="2-4-2">选项2</el-menu-item>
             <el-menu-item index="2-4-3">选项3</el-menu-item>
           </el-submenu>
         </el-submenu>
         <el-menu-item index="3" disabled>消息中心</el-menu-item>
         <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
       </el-menu>
     </el-col>
     <!--          头像-->
     <el-col :xs="6" :sm="6" :md="1" :lg="3" :xl="1" class="parent">
       <el-avatar icon="el-icon-user-solid"></el-avatar>
     </el-col>
     <!--          抽屉-->
     <el-col :xs="6" :sm="6" :md="1" :lg="3" :xl="1" class="hidden-md-and-up">

       <div class="menu-button">
         <i @click="drawer = true" type="text" class="el-icon-s-unfold">
         </i>
       </div>

       <el-drawer
         :visible.sync="drawer"
         :direction="direction"
         :before-close="handleClose">
         <span>我来啦!</span>
       </el-drawer>


     </el-col>


   </el-row>
 </div>
<!--  </el-header>-->
</template>


<script>
  var CollectButton = document.querySelector("#collectButton");

  export default {
    name: "HeaderTest",
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

