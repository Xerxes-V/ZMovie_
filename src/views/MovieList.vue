<template>
  <div  id="contain"  style="float: left">
<!--    <p>-->
<!--      <label style="margin-right: 16px;">切换 Loading</label>-->
<!--      <el-switch v-model="Loading" />-->
<!--    </p>-->
    <div v-for=" movie in movies"  :key="movie.movie_id" class="main BigBox" >
      <el-skeleton :loading="Loading" class="outside" animate d>
        <template slot="template">
          <el-skeleton style="width: 136px" animated >
            <template slot="template">
              <el-skeleton-item variant="image" style="width: 135px; height: 175px;" />
              <div style="padding-top: 10px;">
                <el-skeleton-item variant="p" style="width: 130px" />
              </div>
            </template>
          </el-skeleton>
        </template>


        <template>
          <el-card :body-style="{ padding: '0px', marginBottom: '1px' }"
                   style="background-color: #E0EEEE">
            <router-link :to="{name:'movieDetails',params:{id:movie.id}}">
              <img
                :src="dBImg+movie.post"
                class="image ImgSize"
              />
              <div>{{movie.name | ellipsis }}</div>
            </router-link>
          </el-card>
        </template>
      </el-skeleton>

      <div class="collection">
        <el-link :underline="false" :class=" [currentStatusOfCollection ? 'el-icon-star-on' : 'el-icon-star-off '] "
                 style="font-size: 20px"
                 @click="switchCollect" id="collectButton"></el-link>
        <!--                        <el-link :underline="false" class="el-icon-star-off" style="font-size: 20px" @click="collect" id="collectButton"></el-link>-->
      </div>
    </div>

    <i></i><i></i><i></i><i></i><i></i><i></i>

<!--    <template>-->
<!--      <el-skeleton style="width: 136px">-->
<!--        <template slot="template">-->
<!--          <el-skeleton-item variant="image" style="width: 135px; height: 175px;" />-->
<!--          <div style="padding-top: 3px;">-->
<!--            <el-skeleton-item variant="p" style="width: 130px" />-->
<!--          </div>-->
<!--        </template>-->
<!--      </el-skeleton>-->
<!--    </template>-->


  </div>

</template>

<script>
  console.log("..")
  export default {
    name: "movielist",
    props:['showMovies','isLoading'],
    data() {
      return {
        //电影是否加载中
        Loading: false,

        //是否收藏
        currentStatusOfCollection: false,

        //模拟所有电影:
        MovieCount:36,
        currentPage4: 4,
        currentPageSize:5,

        //上面标签页
        activeName: 'first',

        //豆瓣图片必须前缀
        dBImg:"https://images.weserv.nl/?url=",

        movies:[]
      }
    },
    watch: {
      showMovies:function(newData,oldData){
        console.log(newData)  //newData就是获取过来的电影数据
        this.movies = newData;
        //	methods的函数在这里调用可以获取到newOrderData的值
        // this.order();
        this.movies = newData;
      },
      isLoading:function(newData,oldData){
        console.log(newData)  //newData就是获取过来的电影数据
        this.Loading = newData;
        //	methods的函数在这里调用可以获取到newOrderData的值
        // this.order();
      }
    },

    methods: {
      switchCollect() {    //收藏
        this.currentStatusOfCollection = !this.currentStatusOfCollection;
        console.log(this.movies)
      },

      order(){
        console.log(this.movies)
      }
    },

    filters:{          //字数过滤器，当子叔超过7个的时候显示省略号
      ellipsis(value){
        if (!value) return '';
        if (value.length > 7) {
          return value.slice(0,7) + '...'
        }
        return value
      },
    }
  }

</script>

<style>
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

    .el-tabs__item {
      /*font-size: 20px ;*/
      color: #D3DCE6;
      /*width: 200px;*/
    }
  }


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

    /*标签*/
    .el-tabs__item {
      font-size: 20px ;
      color: #D3DCE6;
      width: 250px;
    }
  }

  /*图片嵌套收藏:*/
  .BigBox {
    position: relative;
  }

  .collection {
    position: absolute;
    top: 21px;
    left: -2px;
  }


  #contain {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /*background-color: wheat;*/
  }

  #contain > i {
    width: 158px;
    /*margin-right: 10px;*/
  }


  /*#contain::after {*/
  /*  content: "";*/
  /*  width: 550px;*/
  /*}*/

</style>

