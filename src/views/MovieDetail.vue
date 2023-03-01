<template>
  <el-row type="flex" align="middle">
    <el-col :xs="24" :sm="6" :md="4" :lg="3" :xl="14" :offset="curOffset">
      <div class="back">
        <el-page-header @back="goBack" content="详情" style="color: yellow;font-size: 30px">
        </el-page-header>
      </div>

      <el-card class="box-card mainCard">
        <h1 class="title">
            {{movie.name}}
        </h1>

        <div class="year">{{movie.country}} · {{movie.releaseDate}} · {{(movie.length-movie.length%60)/60}}h {{movie.length%60}}m</div>

        <div class="scored hidden-sm-and-down">
          <div>ZMovie- 评分</div>
          <span class="iconfont icon-pingfen1" style="font-size: 29px"></span>
          <span class="scoredScore">{{movie.score}}  </span>
          <span> / 10</span>
          <div style="text-align: right">{{movie.ratingNum}} 人</div>

        </div>

        <div class="myScore hidden-sm-and-down">
          <div style="margin-bottom: 5px">我的评分</div>
          <el-link  :underline="false" class="icon-pingfen iconfont" @click="dialogVisible = true" style="font-size: 30px">
          </el-link>
          <span class="scoredScore" style="margin-top: 0px" v-if="movie.myScore > 0"> {{movie.myScore}} </span>
          <!--          <span> / 10</span>-->
          <!--          <div style="text-align: right">10w 人 </div>-->
        </div>

        <div class="collect">
          <div style="margin-bottom: 5px" class="hidden-sm-and-down">收藏</div>
          <div class="collection">
            <el-link :underline="false" :class=" [currentStatusOfCollection ? 'el-icon-star-on' : 'el-icon-star-off '] "
                     class="collect_btn"
                     @click="switchCollect" id="collectButton"></el-link>
            <!--                        <el-link :underline="false" class="el-icon-star-off" style="font-size: 20px" @click="collect" id="collectButton"></el-link>-->
          </div>
          <!--          <span> / 10</span>-->
          <!--          <div style="text-align: right">10w 人 </div>-->
        </div>

        <div id="share">
          <span class="iconfont icon-fenxiang" id="share_btn"></span>
        </div>
      </el-card>

      <div class="mainDetail ">
        <img class="post"
             :src="dBImg+movie.post">
        <div id="textDetail">
          <div class="words" style="margin-top: 20px"></div>
          <div class="words"  v-if="movie.englishName != null "> 英文 : {{movie.englishName}}</div>
          <div class="words" > 导演 : {{movie.director}}</div>
          <div class="words">編劇 : {{movie.writer}}</div>
          <div class="words">主演 : {{movie.staring}}</div>
          <div class="words">类型 : {{movie.genres}}</div>
          <div class="words hidden-sm-and-down"><span>制片地区 :</span> {{movie.country}}</div>
<!--          <div class="words">出品公司 : 索尼</div>-->
          <div class="words hidden-sm-and-down">语言 : {{movie.language}}</div>
          <div class="words">评分人数 : {{movie.ratingNum}}</div>
          <div class="words">转发次数 : 15w</div>
          <div class="words hidden-sm-and-up">类型:</div>
        </div>

        <div style="margin-left: 120px" class="hidden-sm-and-up"> {{movie.name}}</div>
        <div id="textDetailMobile" class="hidden-sm-and-up">
          <div class="words">{{movie.country}}·{{movie.language}}</div>
          <div class="words">{{movie.releaseDate}} 年</div>
        </div>

        <div class="mobileRate hidden-sm-and-up">
          <span style="font-size: 24px">{{movie.score}}</span>
          <el-rate
            v-model="movie.score/2"
            disabled
            text-color="#ff9900"
            score-template="{value}"
            id="socrelMobile"
          >
          </el-rate>
          <span style="font-size: small;font-weight: 100">{{movie.ratingNum}} 人</span>
        </div>

        <div id="typesMobile" class="hidden-sm-and-up">
          <el-tag type="info" style="border-radius: 40px;margin-right: 5px" v-for="type in types" :key="movie_id">{{type}}</el-tag>
        </div>

        <div class="shortIntroduce">
            影片简介 : {{movie.summary}}
        </div>

        <div class="block hidden-sm-and-up" id="doRate">
          <span id="doRate" class="hidden-sm-and-up"  >评分</span>
          <el-rate v-model="value1" ></el-rate>
        </div>

        <div class="typeTab hidden-sm-and-down" style=" text-align: center; " >
          <div style="margin-top: 50px">
            <el-tag
              effect="dark" class="tag"  v-for="(type,index) in types" :key="movie_id">
              {{type}}
            </el-tag>
          </div>
        </div>

      </div>

      <hr>

      <div id="commentTag">
        最新评论
        <span class="el-icon-caret-right"></span>
      </div>

      <el-dialog
        title="评分"
        :visible.sync="dialogVisible"
        width="30%"
        max="10"
        :before-close="handleClose">
        <div class="block" style="height: 46px">
          <el-rate v-model="movieStar"></el-rate>
        </div>
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="rating" >确 定</el-button>
        </span>
      </el-dialog>


      <Communication></Communication>


    </el-col>
  </el-row>


</template>

<script>
  import Communication from './Communication';

  export default {
    name: "MovieDetail",
    components: {
      Communication

    },
    data() {
      return {
        curOffset: 5,
        movieStar: 0,
        movieScore: 4.5,


        //电影数据：
        movie: 'a',
        types:[],

        //是否收藏
        currentStatusOfCollection: false,

        //是否评分
        currentStatusOfRate: false,
        dialogVisible: false,


        movie_id: -1,

        //豆瓣图片必须前缀
        dBImg:"https://images.weserv.nl/?url=",

      }
    },
    mounted() {
      this.$nextTick(() => {
        if (window.innerWidth < 900) {
          this.curOffset = 0;
        }
      })

      console.log(this.movie)
    },
    methods: {
      switchCollect() {    //收藏
        this.currentStatusOfCollection = !this.currentStatusOfCollection;
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
        this.currentStatusOfRate = true;
      },

      rating(){
        this.dialogVisible = false;
        this.movieScore = this.movieStar*2.0;
        this.currentStatusOfRate = true;
      },

      goBack(){
        this.$router.push({ path: '/main' })
      },

      getDetails(){
        this.movie_id = this.$route.params.id;
        this.axios.get("http://localhost:8081/movie/subject/"+ this.movie_id).then(
          res=>{
            this.movie = res.data.data;
            this.currentStatusOfCollection = this.movie.collected;
            this.types = this.movie.genres.split("/");

          }
        )
      }

    },

    created() {
      this.getDetails();
    },
  }
</script>

<style scoped>

  /*返回按钮*/
  .back {
    color: yellow;
    height: 60px;
  }

  .el-page-header__title {
    font-size: 20px;
  }

  .el-page-header__content {
    font-size: 30px !important;
    color: wheat;
  }

  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }

  .mainCard {
    width: 100%;
    height: 150px;
    background-color: red;
    position: relative;
    margin-bottom: 30px;
  }


  .year {
    position: absolute;
    left: 23px;
    top: 90px;
    margin-top: -15px;
    color: white;
  }

  .scored {
    font-size: medium;
    font-weight: bold;
    text-align: center;
    position: absolute;
    right: 300px;
    top: 60px;
  }

  .scoredScore {
    font-size: 23px;
  }

  .myScore {
    text-align: center;
    position: absolute;
    right: 170px;
    top: 60px;
  }

  .collect {
    text-align: center;
    position: absolute;
    right: 60px;
    top: 60px;
  }

  .collect_btn {
    font-size: 40px;
  }

  #share {
    position: absolute;
    right: 40px;
    top: 3px;
  }

  #share_btn {
    font-size: 30px;
  }

  .mainDetail {
    /*height: 500px;*/
    width: 100%;
    display: flex;
    /*display: table;*/
    text-align: left  ;
    background-color: #99a9bf;
    position: relative;
    /*padding-top: 100px;*/
  }


  .words {
    font-size: 15px;
    margin-bottom: 7px;
  }



  .typeTab {
    width: 384px;
    height: 261px;
    /*background-color: wheat;*/
    position: absolute;
    right: 0px;
    top: 0;
  }

  .tag {
    margin-right: 90px;
    margin-top: 50px;
    font-size: 20px;
  }


  #commentTag {
    text-align: left;
    font-size: 20px;
    color: yellow;
    margin-top: 20px;
    margin-bottom: 45px;
  }


  @media screen and (max-width: 1440px) {
    .mainDetail {
      /*height: 750px;*/
      display: table;
    }

    .title {
      position: absolute;
      /*left: 20px;*/
      /*top: ;*/
    }

    .post {
      width: 108px;
      height: 150px;
      display: block;
      position: absolute;
      left: 0;
    }



    #textDetail {
      width: 284px;
      height: 291px;
      text-align: left;
      position: absolute;

      left: 3px;
      top: 140px;
      /*background-color: #B3C0D1;*/
    }



    .shortIntroduce {
      width: 100%;
      left: 3px;
      display: block;
      margin-top: 430px;
      margin-bottom: 10px;
      /*margin-left: -47%;*/
    }

    .collect_btn {
      font-size: 24px;
    }

    .collect {
      right: 40px;
      top: 0px;
    }

    #share {
      position: absolute;
      right: 10px;
      top: 3px;
    }

    #share_btn {
      font-size: 23px;
    }

    #commentTag {
      font-size: 20px;
    }
  }

  @media screen and (min-width: 1441px) {
    .title {
      position: absolute;
      left: 20px;
    }

    .post {
      width: 284px;
      height: 421px;
      display: inline-block;
      /*position: absolute;*/
      /*left: 0;*/
      margin-left: 0px;
    }

    #textDetail {
      width: 384px;
      height: 391px;
      text-align: left;
      position: absolute;

      left: 296px;
      top: 0;
      /*background-color: #B3C0D1;*/
    }

    .shortIntroduce {
      width: 500px;
      /*height: 100px;*/
      display: table;
      text-align: left;
      margin-top: 280px;
      margin-left: 12px;
      margin-bottom: 10px;
    }
  }

  .mobileRate {
    height: 70px;
    width: 100px;
    border: none;
    border-left: 0.1px solid gainsboro;
    position: absolute;
    right: 5px;
    top: 75px;
    /*background-color: red;*/
  }

  /deep/ .el-rate__item {
    width: 15px;
  }

  #socrelMobile {
    /* position: absolute;*/
    margin-top: 1px;
    margin-left: 10px;
    /*top: 30px;*/
  }

  #textDetailMobile {
    position: absolute;
    top: 100px;
    left: 120px;
  }

  #typesMobile {
    height: 35px;
    position: absolute;
    top: 390px;
  }

  #doRate {
    display: flex;
    margin-left: 17%;
    /*margin-top: 10px;*/
  }

  /*/deep/ .el-rate__item {*/
  /*  width: 57px;*/
  /*}*/
</style>
<x></x>
