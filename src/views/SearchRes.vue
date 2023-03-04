<template>
  <div>

    <el-row type="flex" align="middle">
      <el-col :xs="24" :sm="6" :md="4" :lg="3" :xl="14" :offset="curOffset">
        <div class="goBack">
          <el-page-header @back="goBack" content="更多"  style="color: yellow">
          </el-page-header>
        </div>


        <div class="tenMovie" >
          <div class="singleMovie">
            <el-card :body-style="{ padding: '0px', marginBottom: '1px' }"
                     style="background-color: #E0EEEE" id="movieComment_card" v-for="(movie,index) in movies" :key="movie.id">
              <img
                :src="dBImg+movie.post"
                class="movieComment_img"
              />
              <span class="movieComment_movieName"> {{movie.name}}  </span>

              <div class="movieComment_content">
                <div class="movieShort"> {{movie.releaseDate}} </div>
                <div class="movieShort"> {{movie.genres}} </div>
                <div class="movieShort"> {{movie.staring}} </div>
              </div>

              <div class="movie_score">
                <el-rate
                  v-model="movie.score/2"
                  disabled
                  text-color="#ff9900"
                  score-template="{value}"
                  style="display: inline-block"
                >
                </el-rate>
                <span >{{movie.score}}</span>
              </div>

            </el-card>
          </div>
        </div>

      </el-col>
    </el-row>


  </div>
</template>

<script>

  console.log("..")
  export default {
    name: "SearchRes",
    props:['searchResult'],
    data() {
      return {
        paginationOffset: 0,
        curOffset: 5,


        //模拟所有电影:
        MovieCount:36,
        currentPage4: 4,
        currentPageSize:5,

        //上面标签页
        activeName: 'first',

        //电影数据：
        movies:[],

        //豆瓣图片必须前缀
        dBImg:"https://images.weserv.nl/?url=",
      }
    },
    methods: {
      switchCollect() {    //收藏
        this.currentStatusOfCollection = !this.currentStatusOfCollection;
      },
      handleSizeChange(val) {
        this.currentPageSize = val;
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      goBack() {
        this.$router.push({ path: '/main' })
      },
      handleClick(tab, event) {
        if(tab.index == 0){
          this.getHottest();
        }else if(tab.index == 1){
          this.getMostComment();
        }else if(tab.index == 3){
          this.getMostCollected();
        }
      },

      //初始化加载最热数据：
      getHottest(){
        this.axios.get("http://localhost:8081/movie/hot").then(
          res => {
            this.movies = res.data.data;
          }
        )
      },


      gettingData() {
        let movies = this.$route.params.movies;
        console.log(this.$route.params.movies)

        this.movies = movies;
      },


    },

    mounted() {
      this.$nextTick(() => {
        console.log(12)
        if (window.innerWidth < 900) {
          this.paginationOffset = 5;
          this.curOffset = 0;
        }
      })
    },

    created() {
        this.gettingData();
    },

    watch:{
      searchResult:function(newData,oldData){
        console.log("data:")  //newData就是获取过来的电影数据
        console.log(newData)
        this.movies = newData;
        // //	methods的函数在这里调用可以获取到newOrderData的值
        // // this.order();
        // this.movies = newData;
      },
    }


  }

</script>

<style>

  /*屏幕尺寸自适应*/
  @media screen and (max-width: 1440px) {

    .el-tabs__item {
      /*font-size: 20px ;*/
      color: #D3DCE6;
      /*width: 200px;*/
    }
  }

  /* 屏幕大于1440px */
  @media screen and (min-width: 1441px) {

    /*标签*/
    .el-tabs__item {
      font-size: 20px ;
      color: #D3DCE6;
      width: 250px;
    }
  }


  /*返回按钮*/
  .goBack {
    color: yellow;
    height: 100px;
    /*font-size: 30px;*/
  }

  .el-page-header__title {
    font-size: 35px;
    /*color: wheat;*/
  }

  .el-page-header__content {
    font-size: 30px;
    color: wheat;
  }

  /*标签页:*/
  .label {
    margin-bottom: 30px;
  }



  .el-tabs__item.is-active {
    color: white;
  }

  .el-tabs__active-bar {
    background-color: yellow;
  }
  .el-tabs__nav-wrap{
    /*width: 90%;*/
    background-color: black;
  }



  .movieComment_img {
    width: 146px;
    height: 189px;
    /*margin-left: 3px;*/
  }

  #movieComment_card {
    position: relative;
    text-align: left;
    margin-bottom: 10px;
  }

  .movieComment_movieName {
    font-size: 22px;
    font-weight: bolder;
    position: absolute;
    top: 4px;
    left: 155px;
  }

  .movieShort {
    margin-bottom: 5px;
  }

  .movie_score {
    color: orange;
    position: absolute;
    bottom: 20px;
    left: 155px;
  }

  .movieComment_content {
    width: 70%;
    position: absolute;
    top: 50px;
    left: 155px;
  }


  @media screen and (max-width: 1440px) {

    /*影评:*/
    .movieComment_img {
      width: 49px;
      height:63px;
    }

    .movieComment_movieName {
      font-size: 15px;
      top: 4px;
      left: 60px;
    }

    .movieComment_content {
      font-size: 5px;
      top: 24px;
      left: 60px;
    }

    .movie_score {
      font-size: 10px;
      position: absolute;
      bottom: 20px;
      right: 20px;
      text-align: right;
    }

  }
</style>


