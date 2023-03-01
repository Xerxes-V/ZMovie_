<template>
  <div>
    <router-link to="/test/ct">ct</router-link>
    <el-row type="flex" align="middle">
      <el-col :xs="24" :sm="6" :md="4" :lg="3" :xl="14" :offset="newham">

        <!--        <div id="contain" class="list"-->
        <!--             v-infinite-scroll="load"-->
        <!--             infinite-scroll-disabled="disabled"-->
        <!--             infinite-scroll-distance=1>-->
        <div class="BigBox  " id="contain">
          <div v-for=" order in MovieCount" class="main">
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
                  <div>The Last of us {{order}}</div>
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
        </div>
        <!--        </div>-->

      </el-col>
    </el-row>

    <el-row type="flex" align="middle">
      <el-col :xs="24" :sm="6" :md="4" :lg="3" :xl="24" :offset="paginationOffset">
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[5, 10, 15, 22]"
            :page-size="currentPageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="36">
          </el-pagination>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: "randomtest",
    data() {
      return {
        //电影是否加载中
        NewLoading: false,
        paginationOffset: 9,
        newham: 5,

        //是否收藏
        currentStatusOfCollection: false,

        //模拟所有电影:
        MovieCount:36,
        currentPage4: 4,
        currentPageSize:12,
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
    },
    mounted() {
      this.$nextTick(() => {
        if (window.innerWidth < 900) {
          this.paginationOffset = 0;
          this.newham = 0;

        }
      })
    }

  }
</script>

<style scoped>
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


  #contain {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /*background-color: wheat;*/

  }
</style>
