<template>
  <div>
    <template>
      <div class="topData">
        <el-card class="box-card">
          <div class="iconfont icon-dianying" id="icon">
          </div>
          <div class="card_title">电影数量</div>
          <div class="card_num">100,100</div>
        </el-card>
        <el-card class="box-card">
          <div class="iconfont icon-xinzengmingxi" id="icon">
          </div>
          <div class="card_title">今日新增</div>
          <div class="card_num">123,456</div>
        </el-card>
        <el-card class="box-card">
          <div class="iconfont icon-zuirehotchunse" id="icon">
          </div>
          <div class="card_title">今日最红</div>
          <div class="card_hottest">THE LAST OF US Ⅱ</div>
        </el-card>
        <!--        <el-card class="box-card">-->
        <!--          <div class="iconfont icon-weiguiwenzhangpuguangtai-copy" id="icon">-->
        <!--          </div>-->
        <!--          <div class="card_title">违规用户</div>-->
        <!--          <div class="card_num">132</div>-->
        <!--        </el-card>-->

      </div>

      <div >
        <div  >
          <div>用户数量变化</div>
          <div id="sector"></div>
        </div>

      </div>
    </template>
  </div>
</template>

<script>
  import echarts from 'echarts'

  export default {
    name: "MovieMsg",
    data() {
      return {
        like: true,
        value1: 4154.564,
        value2: 2222,
        title: "用户数量",
        input: "Hello Element UI!",


        //月增数量:
        option : {
          xAxis: {
            data: ['A', 'B', 'C', 'D', 'E']
          },
          yAxis: {},
          series: [
            {
              data: [10, 22, 28, 43, 49],
              type: 'line',
              stack: 'x',
              areaStyle: {}
            },
            {
              data: [13, 4, 3, 5, 10],
              type: 'line',
              stack: 'x',
              areaStyle: {}
            }
          ]
        },

      };
    },

    mounted() {
      let this_ = this;
      let chart = echarts.init(document.getElementById('sector'));
      chart.setOption(this.option);

      window.addEventListener('resize', function () {
        chart.resize()
      });
    },


  }
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
    height: 210px;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 30px;
    margin-bottom: 150px;
    position: relative;
  }


  .topData {
    /*height: 300px;*/
    /*background-color: #409eff;*/
    display: flex;
    margin-left: 30px;
  }

  #sector {
    width: 1500px;
    height: 400px;
  }

  #makeUp_Comment {
    width: 500px;
    height: 500px;
  }

  #icon {
    font-size: 90px;
    position: absolute;
    top: 60px;
  }

  .card_title {
    font-size: 21px;
    position: absolute;
    top: 60px;
    right: 80px;
  }

  .card_num {
    font-size: 25px;
    position: absolute;
    top: 110px;
    right: 80px;
  }

  .card_hottest {
    font-size: 24px;
    position: absolute;
    top: 110px;
    right: 8px;
  }
</style>
