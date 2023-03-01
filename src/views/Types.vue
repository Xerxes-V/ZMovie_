<template>
  <div>
    <el-row type="flex" align="middle">
      <el-col :xs="24" :sm="6" :md="4" :lg="3" :xl="14" :offset="curOffset">

        <div class="goBack">
          <el-page-header @back="goBack" content="电影分类"  style="color: yellow">
          </el-page-header>
        </div>

        <div class="typesDiv">
          <template class="typesDiv">
            <el-select v-model="genre" clearable placeholder="类型" class="TypeBgst"   @change="screen(1)">
              <el-option
                v-for="item in genres"
                :key="item.value"
                :label="item.label"
                :value="item.label"

              >
              </el-option>
            </el-select>
            <el-select v-model="area" clearable placeholder="地区" class="TypeBgst" id="area" @change="screen(1)">
              <el-option
                v-for="item in areas"
                :key="item.value"
                :label="item.label"
                :value="item.label">
              </el-option>
            </el-select>
            <el-select v-model="time" clearable placeholder="年代" class="TypeBgst" @change="screen(1)">
              <el-option
                v-for="item in times"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-select v-model="language" clearable placeholder="语言" class="TypeBgst" @change="screen(1)">
              <el-option
                v-for="item in languages"
                :key="item.value"
                :label="item.label"
                :value="item.label">
              </el-option>
            </el-select>
          </template>
        </div>

        <movielist :showMovies="movies" :isLoading="Loading"></movielist>

      </el-col>
    </el-row>


    <el-button type="primary" icon="el-icon-arrow-left" style="cursor: not-allowed;" @click="lastPage" id="lastPage" round>上一页</el-button>
    <el-button type="primary"  style="margin-left: 200px"  @click="nextPage" id="nextPage" round>下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
  </div>
</template>

<script>

  import movielist from "./MovieList";


  export default {
    name: "Types",
    components: {movielist},
    data() {
      return {
        curOffset: 5,
        paginationOffset: 0,

        //获取到的电影信息：
        movies:"",
        Loading:false,

        //当前页码：
        curPage: 1,
        maxPage: 3, //最大页码数

        //电影分类选择：
        genres: [{
          value: 0,
          label: '全部类型'
        }, {
          value: 1,
          label: '喜剧'
        }, {
          value: 2,
          label: '爱情'
        }, {
          value: 3,
          label: '动作'
        }, {
          value: 4,
          label: '科幻'
        }, {
          value: 5,
          label: '动画'
        }, {
          value: 6,
          label: '悬疑'
        }, {
          value: 7,
          label: '犯罪'
        }, {
          value: 8,
          label: '惊悚'
        }, {
          value: 9,
          label: '冒险'
        }, {
          value: 10,
          label: '音乐'
        }, {
          value: 11,
          label: '历史'
        }, {
          value: 12,
          label: '奇幻'
        }, {
          value: 13,
          label: '恐怖'
        }, {
          value: 14,
          label: '战争'
        }, {
          value: 15,
          label: '传记'
        }, {
          value: 16,
          label: '歌舞'
        }, {
          value: 17,
          label: '武侠'
        }, {
          value: 18,
          label: '情色'
        }, {
          value: 19,
          label: '灾难'
        }, {
          value: 20,
          label: '西部'
        }, {
          value: 21,
          label: '纪录片'
        }, {
          value: 22,
          label: '短片'
        }
        ],
        areas: [{
          value: 0,
          label: '全部地区'
        }, {
          value: 1,
          label: '中国大陆'
        }, {
          value: 2,
          label: '中国香港'
        }, {
          value: 3,
          label: '中国台湾'
        }, {
          value: 4,
          label: '美国'
        }, {
          value: 5,
          label: '英国'
        }, {
          value: 6,
          label: '日本'
        }, {
          value: 7,
          label: '韩国'
        }, {
          value: 8,
          label: '泰国'
        }, {
          value: 9,
          label: '印度'
        }, {
          value: 10,
          label: '法国'
        }
        ],
        times: [{
          value: 0,
          label: '不限'
        }, {
          value: 2020,
          label: '2020年代'
        }, {
          value: 2010,
          label: '2010年代'
        }, {
          value: 2000,
          label: '2000年代'
        }, {
          value: 1990,
          label: '90年代'
        }, {
          value: 1980,
          label: '80年代'
        }, {
          value: 1970,
          label: '70年代'
        }, {
          value: 1969,
          label: '更早'
        }
        ],
        languages: [{
          value: 0,
          label: '不限'
        }, {
          value: 1,
          label: '普通话'
        }, {
          value: 2,
          label: '英语'
        }, {
          value: 3,
          label: '粤语'
        }, {
          value: 4,
          label: '日语'
        }, {
          value: 5,
          label: '韩语'
        }, {
          value: 6,
          label: '法语'
        }, {
          value: 7,
          label: '西班牙语'
        },{
          value: 8,
          label: '俄语'
        },{
          value: 9,
          label: '其他'
        }
        ],

        genre: '',
        area:'',
        time:'',
        language:'',


      }
    },
    methods:{
      goBack() {
        this.$router.push({ path: '/main' })
      },

      //初始化加载最新电影
      convert:async function () {
        this.screen(1);
      },

      nextPage(){   //判断当前页面是否第一页，将上一页禁用
        if(this.curPage < this.maxPage){
          this.curPage++;
          this.screen(this.curPage);
        }
      },
      lastPage(){
        if(this.curPage > 1 ){
          this.curPage--;
          this.screen(this.curPage);
        }
      },

      screen(page){
        this.Loading = true;
        const params = {
          'genre': this.genre,
          'area': this.area,
          'time': this.time,
          'language': this.language,
          'curPage': page
        }

        console.log(params)

        this.axios(
          {
            method:'post',
            url:'http://localhost:8081/movie/genres',
            data:JSON.stringify(params),
            headers: {
              'Content-Type': 'application/json;charset=UTF-8'
            }
          }
        ).then(
          res=>{
            console.log(res);
            this.movies = res.data.data.records;
            this.maxPage = res.data.data.pages;
            console.log(res.data.data.pages);
            console.log(this.maxPage);
            this.curPage--;
            this.Loading = false;
          }
      ).finally(()=>{
          this.curPage++;
        })
      },

    },

    mounted() {
      this.$nextTick(() => {
        if (window.innerWidth < 900) {
          this.curOffset = 0;
          this.paginationOffset=5;
        }
      })
    },

    created() {
      this.convert();
    },

    //监听页码数据变化，禁用上一页or下一页
    watch:{
       curPage: function (newVal,oldVal) {
         console.log("new:"+newVal);
         console.log("old"+oldVal)
         console.log("max:" +this.maxPage)
         if(newVal >= this.maxPage){
           console.log("ban")
           document.getElementById("nextPage").style.cursor=' not-allowed';   //禁用
           console.log( document.getElementById("nextPage").style.cursor)
           // this.ban("nextPage");
         }
         else if(newVal <= 1){
           document.getElementById("lastPage").style.cursor=' not-allowed';   //禁用
         }else{
           document.getElementById("nextPage").style.cursor='pointer';
           document.getElementById("lastPage").style.cursor='pointer';
         }
       }
    },

  }
</script>

<style scoped>
  .TypeBgst {
    width: 150px;
    border: none;
    margin-right: 20px;
  }

  .typesDiv {
    text-align: left;
    margin-bottom: 30px;
  }

  /*返回按钮*/
  .goBack {
    color: yellow;
    height: 100px;
    /*font-size: 30px;*/
  }

  /deep/ .el-page-header__title {
    font-size: 35px;
    /*color: wheat;*/
  }

  /deep/ .el-page-header__content {
    font-size: 30px;
    color: wheat;
  }

  @media screen and (max-width: 1440px) {
    .TypeBgst {
      width: 80px;
      border: none;
      margin-right: 3px;
    }
  }
</style>
