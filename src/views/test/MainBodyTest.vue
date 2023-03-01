<template>
 <div>
   <!--          主体部分-->
   <!--            走马灯-->
   <el-row type="flex" align="middle">
     <!--            走马灯-->
     <el-col :xs="6" :sm="6" :md="4" :lg="3" :xl="14" :offset="5" class=" hidden-sm-and-down">
       <el-carousel indicator-position="outside">
         <el-carousel-item v-for="item in 4" :key="item" class="MaDeng">
           <!--                    <h3>{{ item }}</h3>-->
         </el-carousel-item>
       </el-carousel>
     </el-col>

   </el-row>

   <!--            移动端走马灯-->
   <el-carousel :interval="5000" arrow="always" height="200px" class="hidden-md-and-up">
     <el-carousel-item v-for="item in 4" :key="item">
       <h3>{{ item }}</h3>
     </el-carousel-item>
   </el-carousel>

   <!--            最热:-->
   <el-row type="flex" align="middle">
     <!--            字-->
     <el-col :xs="6" :sm="6" :md="4" :lg="3" :xl="14" :offset="5" class=" hidden-sm-and-down">
       <div class="HottestGuideText">
         <router-link icon="el-icon-s-data" type="primary" class="HottestGuideText" to="/rt">最热 ></router-link>
       </div>
     </el-col>
     <!--            字-移动端-->
     <el-col :xs="6" :sm="6" :md="4" :lg="3" :xl="14" :offset="0" class=" hidden-sm-and-up">
       <div>
         <el-link icon="el-icon-s-data" type="primary" style="height: 50px">最热 ></el-link>
       </div>
     </el-col>
   </el-row>

   <el-row type="flex" align="middle" class="HottestWholeHeight">
     <!--              最热电影列表:-->
     <el-col :xs="24" :sm="6" :md="4" :lg="3" :xl="14" :offset="ham" class="  ">
       <el-row type="flex" align="middle">
         <!--              最热电影列表:-->
         <el-col :xs="7" :sm="6" :md="4" :lg="3" :xl="3" :offset="0">
           <div class="BigBox  ">
             <!--                  <p>-->
             <!--                    <label style="margin-right: 16px;">切换 Loading</label>-->
             <!--                    <el-switch v-model="hotLoading"/>-->
             <!--                  </p>-->
             <el-skeleton :loading="hotLoading" class="outside" animated>
               <template slot="template">
                 <el-skeleton-item
                   variant="image"
                   class="ImgSize"
                 />
                 <div style="padding: 14px;">
                   <el-skeleton-item variant="h3" style="width: 50%;"/>
                   <div
                     style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;"
                   >
                     <el-skeleton-item variant="text" style="margin-right: 16px;"/>
                     <el-skeleton-item variant="text" style="width: 30%;"/>
                   </div>
                 </div>
               </template>
               <template>
                 <el-card :body-style="{ padding: '0px', marginBottom: '1px' }"
                          style="background-color: #E0EEEE">
                   <img
                     src="http://royx9j1g6.hn-bkt.clouddn.com/the%20last%20of%20us%20.jpg?e=1674528128&token=8QjUa_hRBAeppRLGZfianHZlbZ1Uxt_KxRD4_7bv:teHt0bNEXIqELFsthpbqtxS_xX0="
                     class="image ImgSize"
                   />
                   <!--                      style="height: 175px ; width: 135px"-->
                   <div>The Last Of Us</div>
                   <!--                        <div style="padding: 14px;">-->
                   <!--                          <div class="bottom card-header">-->
                   <!--                            <span class="time">{{ currentDate }}</span>-->
                   <!--                            <el-button type="text" class="button">操作按钮</el-button>-->
                   <!--                          </div>-->
                   <!--                        </div>-->
                 </el-card>
               </template>
             </el-skeleton>
             <div class="collection">
               <el-link :underline="false" :class=" [currentStatusOfCollection ? 'el-icon-star-on' : 'el-icon-star-off '] " style="font-size: 20px"
                        @click="switchCollect" id="collectButton"></el-link>
               <!--                        <el-link :underline="false" class="el-icon-star-off" style="font-size: 20px" @click="collect" id="collectButton"></el-link>-->
             </div>
             <div class="score">
               9.1
             </div>
           </div>
         </el-col>
         <el-col :xs="7" :sm="6" :md="4" :lg="3" :xl="3" :offset="1">
           <div class="BigBox  ">
             <!--                  <p>-->
             <!--                    <label style="margin-right: 16px;">切换 Loading</label>-->
             <!--                    <el-switch v-model="hotLoading"/>-->
             <!--                  </p>-->
             <el-skeleton :loading="hotLoading" class="outside" animated>
               <template slot="template">
                 <el-skeleton-item
                   variant="image"
                   class="ImgSize"
                 />
                 <div style="padding: 14px;">
                   <el-skeleton-item variant="h3" style="width: 50%;"/>
                   <div
                     style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;"
                   >
                     <el-skeleton-item variant="text" style="margin-right: 16px;"/>
                     <el-skeleton-item variant="text" style="width: 30%;"/>
                   </div>
                 </div>
               </template>
               <template>
                 <el-card :body-style="{ padding: '0px', marginBottom: '1px' }"
                          style="background-color: #E0EEEE">
                   <img
                     src="http://royx9j1g6.hn-bkt.clouddn.com/the%20last%20of%20us%20.jpg?e=1674528128&token=8QjUa_hRBAeppRLGZfianHZlbZ1Uxt_KxRD4_7bv:teHt0bNEXIqELFsthpbqtxS_xX0="
                     class="image ImgSize"
                   />
                   <!--                      style="height: 175px ; width: 135px"-->
                   <div>The Last Of Us</div>
                   <!--                        <div style="padding: 14px;">-->
                   <!--                          <div class="bottom card-header">-->
                   <!--                            <span class="time">{{ currentDate }}</span>-->
                   <!--                            <el-button type="text" class="button">操作按钮</el-button>-->
                   <!--                          </div>-->
                   <!--                        </div>-->
                 </el-card>
               </template>
             </el-skeleton>
             <div class="collection">
               <el-link :underline="false" :class=" [currentStatusOfCollection ? 'el-icon-star-on' : 'el-icon-star-off '] " style="font-size: 20px"
                        @click="switchCollect" id="collectButton"></el-link>
               <!--                        <el-link :underline="false" class="el-icon-star-off" style="font-size: 20px" @click="collect" id="collectButton"></el-link>-->
             </div>
             <div class="score">
               9.1
             </div>
           </div>
         </el-col>
         <el-col :xs="7" :sm="6" :md="4" :lg="3" :xl="3" :offset="1">
           <div class="BigBox  ">
             <!--                  <p>-->
             <!--                    <label style="margin-right: 16px;">切换 Loading</label>-->
             <!--                    <el-switch v-model="hotLoading"/>-->
             <!--                  </p>-->
             <el-skeleton :loading="hotLoading" class="outside" animated>
               <template slot="template">
                 <el-skeleton-item
                   variant="image"
                   class="ImgSize"
                 />
                 <div style="padding: 14px;">
                   <el-skeleton-item variant="h3" style="width: 50%;"/>
                   <div
                     style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;"
                   >
                     <el-skeleton-item variant="text" style="margin-right: 16px;"/>
                     <el-skeleton-item variant="text" style="width: 30%;"/>
                   </div>
                 </div>
               </template>
               <template>
                 <el-card :body-style="{ padding: '0px', marginBottom: '1px' }"
                          style="background-color: #E0EEEE">
                   <img
                     src="http://royx9j1g6.hn-bkt.clouddn.com/the%20last%20of%20us%20.jpg?e=1674528128&token=8QjUa_hRBAeppRLGZfianHZlbZ1Uxt_KxRD4_7bv:teHt0bNEXIqELFsthpbqtxS_xX0="
                     class="image ImgSize"
                   />
                   <!--                      style="height: 175px ; width: 135px"-->
                   <div>The Last Of Us</div>
                   <!--                        <div style="padding: 14px;">-->
                   <!--                          <div class="bottom card-header">-->
                   <!--                            <span class="time">{{ currentDate }}</span>-->
                   <!--                            <el-button type="text" class="button">操作按钮</el-button>-->
                   <!--                          </div>-->
                   <!--                        </div>-->
                 </el-card>
               </template>
             </el-skeleton>
             <div class="collection">
               <el-link :underline="false" :class=" [currentStatusOfCollection ? 'el-icon-star-on' : 'el-icon-star-off '] " style="font-size: 20px"
                        @click="switchCollect" id="collectButton"></el-link>
               <!--                        <el-link :underline="false" class="el-icon-star-off" style="font-size: 20px" @click="collect" id="collectButton"></el-link>-->
             </div>
           </div>
         </el-col>
         <el-col :xs="7" :sm="6" :md="4" :lg="3" :xl="3" :offset="1" class="hidden-md-and-down  ">
           <div class="BigBox  ">
             <!--                  <p>-->
             <!--                    <label style="margin-right: 16px;">切换 Loading</label>-->
             <!--                    <el-switch v-model="hotLoading"/>-->
             <!--                  </p>-->
             <el-skeleton :loading="hotLoading" class="outside" animated>
               <template slot="template">
                 <el-skeleton-item
                   variant="image"
                   class="ImgSize"
                 />
                 <div style="padding: 14px;">
                   <el-skeleton-item variant="h3" style="width: 50%;"/>
                   <div
                     style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;"
                   >
                     <el-skeleton-item variant="text" style="margin-right: 16px;"/>
                     <el-skeleton-item variant="text" style="width: 30%;"/>
                   </div>
                 </div>
               </template>
               <template>
                 <el-card :body-style="{ padding: '0px', marginBottom: '1px' }"
                          style="background-color: #E0EEEE">
                   <img
                     src="http://royx9j1g6.hn-bkt.clouddn.com/the%20last%20of%20us%20.jpg?e=1674528128&token=8QjUa_hRBAeppRLGZfianHZlbZ1Uxt_KxRD4_7bv:teHt0bNEXIqELFsthpbqtxS_xX0="
                     class="image ImgSize"
                   />
                   <!--                      style="height: 175px ; width: 135px"-->
                   <div>The Last Of Us</div>
                   <!--                        <div style="padding: 14px;">-->
                   <!--                          <div class="bottom card-header">-->
                   <!--                            <span class="time">{{ currentDate }}</span>-->
                   <!--                            <el-button type="text" class="button">操作按钮</el-button>-->
                   <!--                          </div>-->
                   <!--                        </div>-->
                 </el-card>
               </template>
             </el-skeleton>
             <div class="collection">
               <el-link :underline="false" :class=" [currentStatusOfCollection ? 'el-icon-star-on' : 'el-icon-star-off '] " style="font-size: 20px"
                        @click="switchCollect" id="collectButton"></el-link>
               <!--                        <el-link :underline="false" class="el-icon-star-off" style="font-size: 20px" @click="collect" id="collectButton"></el-link>-->
             </div>
           </div>
         </el-col>
         <el-col :xs="7" :sm="6" :md="4" :lg="3" :xl="3" :offset="1" class="hidden-md-and-down  ">
           <div class="BigBox  ">
             <!--                  <p>-->
             <!--                    <label style="margin-right: 16px;">切换 Loading</label>-->
             <!--                    <el-switch v-model="hotLoading"/>-->
             <!--                  </p>-->
             <el-skeleton :loading="hotLoading" class="outside" animated>
               <template slot="template">
                 <el-skeleton-item
                   variant="image"
                   class="ImgSize"
                 />
                 <div style="padding: 14px;">
                   <el-skeleton-item variant="h3" style="width: 50%;"/>
                   <div
                     style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;"
                   >
                     <el-skeleton-item variant="text" style="margin-right: 16px;"/>
                     <el-skeleton-item variant="text" style="width: 30%;"/>
                   </div>
                 </div>
               </template>
               <template>
                 <el-card :body-style="{ padding: '0px', marginBottom: '1px' }"
                          style="background-color: #E0EEEE">
                   <img
                     src="http://royx9j1g6.hn-bkt.clouddn.com/the%20last%20of%20us%20.jpg?e=1674528128&token=8QjUa_hRBAeppRLGZfianHZlbZ1Uxt_KxRD4_7bv:teHt0bNEXIqELFsthpbqtxS_xX0="
                     class="image ImgSize"
                   />
                   <!--                      style="height: 175px ; width: 135px"-->
                   <div>The Last Of Us</div>
                   <!--                        <div style="padding: 14px;">-->
                   <!--                          <div class="bottom card-header">-->
                   <!--                            <span class="time">{{ currentDate }}</span>-->
                   <!--                            <el-button type="text" class="button">操作按钮</el-button>-->
                   <!--                          </div>-->
                   <!--                        </div>-->
                 </el-card>
               </template>
             </el-skeleton>
             <div class="collection">
               <el-link :underline="false" :class=" [currentStatusOfCollection ? 'el-icon-star-on' : 'el-icon-star-off '] " style="font-size: 20px"
                        @click="switchCollect" id="collectButton"></el-link>
               <!--                        <el-link :underline="false" class="el-icon-star-off" style="font-size: 20px" @click="collect" id="collectButton"></el-link>-->
             </div>
           </div>
         </el-col>

         <el-col :xs="6" :sm="6" :md="4" :lg="3" :xl="1" :offset="1" class=" hidden-md-and-down ">
           <div class="HottestGuideMore">
             <el-link icon="el-icon-more-outline" :underline="false" style="font-size: 75px "></el-link>
           </div>
         </el-col>
       </el-row>
     </el-col>


   </el-row>


   <!--            最新:-->
   <el-row type="flex" align="middle" style="height: 70px">
     <!--            字-->
     <el-col :xs="6" :sm="6" :md="4" :lg="3" :xl="14" :offset="newham" class=" hidden-sm-and-down">
       <div class="HottestGuideText">
         <el-link icon="el-icon-tickets" type="primary" class="HottestGuideText">最新 ></el-link>
       </div>
     </el-col>
     <!--            字-移动端-->
     <el-col :xs="6" :sm="6" :md="4" :lg="3" :xl="14" :offset="0" class=" hidden-sm-and-up">
       <div>
         <el-link icon="el-icon-s-data" type="primary" style="height: 50px">最新 ></el-link>
       </div>
     </el-col>
   </el-row>


   <el-row type="flex" align="middle">
     <el-col :xs="24" :sm="6" :md="4" :lg="3" :xl="14" :offset="newham">

       <div id="contain" class="list"
            v-infinite-scroll="load"
            infinite-scroll-disabled="disabled"
            infinite-scroll-distance=1>
         <div ref="main" class="main" v-for="iInCount in currentScrollCount">
           <div class="BigBox  ">
             <el-skeleton :loading="NewLoading" class="outside" animate d>
               <template slot="template">
                 <el-skeleton-item
                   variant="image"
                   class="ImgSize"
                 />
                 <div style="padding: 14px;">
                   <!--                          <el-skeleton-item variant="text" style="margin-right: 16px;"/>-->
                 </div>
               </template>
               <template>
                 <el-card :body-style="{ padding: '0px', marginBottom: '1px' }"
                          style="background-color: #E0EEEE">
                   <img
                     src="http://royx9j1g6.hn-bkt.clouddn.com/the%20last%20of%20us%20.jpg?e=1674528128&token=8QjUa_hRBAeppRLGZfianHZlbZ1Uxt_KxRD4_7bv:teHt0bNEXIqELFsthpbqtxS_xX0="
                     class="image ImgSize"
                   />
                   <div>The Last of us {{iInCount}}</div>
                 </el-card>
               </template>
             </el-skeleton>

             <div class="collection">
               <el-link :underline="false" :class=" [currentStatusOfCollection ? 'el-icon-star-on' : 'el-icon-star-off '] " style="font-size: 20px"
                        @click="switchCollect" id="collectButton"></el-link>
               <!--                        <el-link :underline="false" class="el-icon-star-off" style="font-size: 20px" @click="collect" id="collectButton"></el-link>-->
             </div>
             <div class="Newscore">
               9.1
             </div>
           </div>
         </div>
       </div>
     </el-col>
   </el-row>
   <p v-if="loading">加载中...</p>
   <p v-if="noMore">没有更多了</p>
   <!--            Main-->

   <template>
     <el-backtop visibility-height=10 target=".mainLand"></el-backtop>
   </template>



   <hr>
   © 1990-2023 by IMDb.com, Inc.

   <router-view></router-view>
 </div>
</template>


<script>
  var CollectButton = document.querySelector("#collectButton");

  export default {
    name: "MainBodyTest",
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
