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

            <img style="height: 100%;width: 100%" :src="imgs[item-1]">
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

            <router-link to="/movieviews">
              <el-link icon="el-icon-s-data" type="primary" class="HottestGuideText" :underline="false" >最热 >
              </el-link>
            </router-link>

        </div>
      </el-col>
      <!--            字-移动端-->
      <el-col :xs="6" :sm="6" :md="4" :lg="3" :xl="14" :offset="0" class=" hidden-sm-and-up">
        <div>

            <router-link  type="primary" style="height: 90px" to="/movieviews" :underline="false">
              <el-link icon="el-icon-s-data" type="primary" style="height: 50px" :underline="false">最热 >
              </el-link>
            </router-link>


        </div>
      </el-col>
    </el-row>

    <el-row type="flex" align="middle" class="HottestWholeHeight">
      <!--              最热电影列表:-->
      <el-col :xs="24" :sm="6" :md="4" :lg="3" :xl="14" :offset="ham" class="">
        <el-row type="flex" align="middle">
          <!--              最热电影列表:-->
          <el-col :xs="24" :sm="6" :md="4" :lg="3" :xl="19" :offset="0" >
            <div class="BigBox2  "  v-for="(movie,index) in hotMovies.slice(0,hotDisplayNum)">
              <!--                  <p>-->
              <!--                    <label style="margin-right: 16px;">切换 Loading</label>-->
              <!--                    <el-switch v-model="hotLoading"/>-->
              <!--                  </p>-->
              <el-skeleton :loading="false" class="outside" animated>
                <template>
                  <el-card :body-style="{ padding: '0px', marginBottom: '1px' }"
                           style="background-color: #E0EEEE">
                    <router-link :to="{name:'movieDetails',params:{id:movie.id}}">
                     <img
                       movie.post
                       :src="dBImg+movie.post"
                       class="image ImgSize"
                     />
                      <div class="movieName">{{movie.name | ellipsis}}</div>
                   </router-link>

                  </el-card>
                </template>
              </el-skeleton>
              <div class="collection">
                <el-link :underline="false" :class=" [currentStatusOfCollection ? 'el-icon-star-on' : 'el-icon-star-off '] " style="font-size: 20px"
                         @click="switchCollect" id="collectButton"></el-link>
                <!--                        <el-link :underline="false" class="el-icon-star-off" style="font-size: 20px" @click="collect" id="collectButton"></el-link>-->
              </div>
              <div class="score">
                {{movie.score | numFilter}}
              </div>
            </div>
          </el-col>

          <el-col :xs="6" :sm="6" :md="4" :lg="3" :xl="1" :offset="1" class=" hidden-md-and-down ">
            <div class="HottestGuideMore">
              <router-link to="/movieviews">
                 <el-link icon="el-icon-more-outline" :underline="false" style="font-size: 75px "></el-link>
              </router-link>
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
          <el-link icon="el-icon-tickets" type="primary" class="HottestGuideText" :underline="false" >最新 </el-link>
        </div>
      </el-col>
      <!--            字-移动端-->
      <el-col :xs="6" :sm="6" :md="4" :lg="3" :xl="14" :offset="0" class=" hidden-sm-and-up">
        <div>
          <el-link icon="el-icon-s-data" type="primary" style="height: 50px" :underline="false">最新  </el-link>
        </div>
      </el-col>
    </el-row>


    <el-row type="flex" align="middle">
      <el-col :xs="24" :sm="6" :md="4" :lg="3" :xl="14" :offset="newham">

        <div id="contain" class="list"
             v-infinite-scroll="doPostAction"
             infinite-scroll-disabled="disabled"
               infinite-scroll-immediate="false"
             infinite-scroll-distance=1>
          <div ref="main" class="main" v-for="(movie,index) in newestMovies">
            <div class="BigBox  ">
              <el-skeleton :loading="NewLoading" class="outside" animate d>
                <template>
                  <el-card :body-style="{ padding: '0px', marginBottom: '1px' }"
                           style="background-color: #E0EEEE">
                    <router-link :to="{name:'movieDetails',params:{id:movie.id}}">
                    <img
                      :src="dBImg+movie.post"
                      class="image ImgSize"
                    />
                    <div class="movieName">{{movie.name | ellipsis}}</div>
                    </router-link>
                  </el-card>
                </template>
              </el-skeleton>

              <div class="collection">
                <el-link :underline="false" :class=" [currentStatusOfCollection ? 'el-icon-star-on' : 'el-icon-star-off '] " style="font-size: 20px"
                         @click="switchCollect" id="collectButton"></el-link>
                <!--                        <el-link :underline="false" class="el-icon-star-off" style="font-size: 20px" @click="collect" id="collectButton"></el-link>-->
              </div>
              <div class="Newscore">
                {{movie.score | numFilter}}
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
      <el-backtop :visibility-height=10 target=".mainLand"></el-backtop>
    </template>



    <hr>
    © 1990-2023 by IMDb.com, Inc.

    <router-view></router-view>
  </div>
</template>


<script>
  import _ from 'lodash'
  var CollectButton = document.querySelector("#collectButton");

  export default {
    name: "IndexBody",
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

        //后台数据：
        hotMovies:[],
        //需要展示的hot数量：
          hotDisplayNum:5,

        //豆瓣图片必须前缀
        dBImg:"https://images.weserv.nl/?url=",

        //最新电影展示的页数：
        curPage:1,
        newestMovies:[],

        //走马灯：
        imgs:['https://m.media-amazon.com/images/M/MV5BNDlmODkzOWMtNzI1NS00MmNhLTg2OTItMjFlYWI5ZmZiMGEwXkEyXkFqcGdeQXVyNzA4NTc5MjE@._CR568,16,2780,1564_QL75_UX1000_CR0,0,1000,563_.jpg','https://m.media-amazon.com/images/M/MV5BMzdkYjEyNzQtOTJhMi00YmRjLTkwMTgtM2Y0Y2VmZDc3Y2I3XkEyXkFqcGdeQXVyODk4OTc3MTY@._CR0,793,3840,2160_QL75_UX750_CR0,0,750,422_.jpg','https://m.media-amazon.com/images/M/MV5BMDhhNTJlNjgtMjgyOS00YTFjLWIyNGEtYzUwNGM2M2YxMGRiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._CR273,157,1368,770_QL75_UX1000_CR0,0,1000,563_.jpg','https://m.media-amazon.com/images/M/MV5BNGIwNDQzNTctNjFkNS00NDA3LWExMmYtZWQzNzJiYjU5YzljXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._CR391,43,2675,1504_QL75_UY422_CR0,0,750,422_.jpg']

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
          this.hotDisplayNum=3;
        }
      })
    },
    computed: {   //无限滚动
      noMore() {
        return this.currentScrollCount >= 3000
      },
      disabled() {
        return this.loading || this.noMore
      }
    },

    created(){    //创建时从后台获取数据渲染
      this.convert();
      this.newest();
        this.doPostAction = _.debounce(this.load,500);    //解决一次滑动多次请求的问题。
    },


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
      load() {   //滚动加载更多最新
        this.loading = true
        // setTimeout(() => {
        //   this.currentScrollCount += 6
        //   this.loading = false
        // }, 2000)
        this.curPage += 1;
        this.axios.get("http://localhost:8081/movie/new/" + this.curPage).then(
          res=>{
            // console.log(this.newestMovies)
            // console.log(res.data.data)
            // console.log(res);
            this.newestMovies = this.newestMovies.concat(res.data.data);
            // console.log(this.newestMovies)
          }
        )
        this.loading = false;
      },
      switchCollect() {    //收藏
        this.currentStatusOfCollection = !this.currentStatusOfCollection;
      },

      //异步从后端获取数据
      convert:async function () {
        this.axios.get("http://localhost:8081/movie/hot").then(
            res =>{
            console.log(res);
            this.hotMovies = res.data.data;
              // console.log(this.movies)
          }
        )
      },
      newest:async function(){
        this.axios.get("http://localhost:8081/movie/new/"+this.curPage).then(
          res=>{
            // console.log(res);
            this.newestMovies = res.data.data;
            console.log(this.newestMovies)
          }
        )
      },

      postAction(){
        this.doPostAction()
      },

      getDetail(){
        this.axios.get("http://localhost:8080/movie/subject/")
      }


    },
     filters:{          //字数过滤器，当字数超过7个的时候显示省略号
       ellipsis(value){
         if (!value) return '';
         if (value.length > 7) {
           return value.slice(0,7) + '...'
         }
         return value
       },
     numFilter (value) {
       // 截取当前数据到小数点后1位
       let realVal = parseFloat(value).toFixed(1)
       return realVal
     }

   },


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

    .BigBox2 {
      position: relative;
      display: inline-block;
      margin-right: 5px;
      /*margin-left: 10px;*/
    }

    .movieName {
      font-size: 10px;
    }


    @media screen and (min-width: 400px) {
      .outside {
        width: 119px;
      }
    }

    @media screen and (max-width: 400px) {
      .outside {
        width: 105px;
      }
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
      right: 6%;
    }
    .score {
      color: #D3DCE6;
      position: absolute;
      bottom: 30px;
      right: 6%;
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
      color: white;
      position: absolute;
      bottom: 28px;
      right: 28px;
    }
    .score {
      color: #D3DCE6;
      position: absolute;
      bottom: 30px;
      right: 4px;
    }


    .BigBox2 {
      position: relative;
      display: inline-block;
      margin-right: 20px;
      margin-left: 10px;
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



  /*取消router-link下划线*/
  a{
    text-decoration: none;
  }
  .router-link-active {
    text-decoration: none;
  }




</style>
