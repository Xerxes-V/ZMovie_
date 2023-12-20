<template>
  <div>
    <template>
      <div class="topData">
        <el-card class="box-card">
          <div class="iconfont icon-renshu-copy" id="icon">
          </div>
          <div class="card_title">用户数量</div>
          <div class="card_num">100,100</div>
        </el-card>
        <el-card class="box-card">
          <div class="iconfont icon--yingping-" id="icon">
          </div>
          <div class="card_title">影评数量</div>
          <div class="card_num">123,456</div>
        </el-card>
        <el-card class="box-card">
          <div class="iconfont icon-pinglun11-copy" id="icon">
          </div>
          <div class="card_title">评论数量</div>
          <div class="card_num">451,221</div>
        </el-card>
        <el-card class="box-card">
          <div class="iconfont icon-weiguiwenzhangpuguangtai-copy" id="icon">
          </div>
          <div class="card_title">违规用户</div>
          <div class="card_num">132</div>
        </el-card>

      </div>

      <div style="display: flex">
        <div style="display: inline-block">
          <div>用户数量变化</div>
          <div id="sector"></div>
        </div>

        <div style="display: inline-block;margin-left: 240px">
          <div>用户构成</div>
          <div id="makeUp_Comment"> </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  import echarts from 'echarts'

  export default {
    name: "UserMsg",
    data() {
      return {
        like: true,
        value1: 4154.564,
        value2: 2222,
        title: "用户数量",
        input: "Hello Element UI!",


        //月增数量:
        icreaseUser : {
          xAxis: {
            data: ['2022-10', '2022-11', '2022-12', '2023-1', '2023-2']
          },
          yAxis: {},
          series: [
            {
              type: 'bar',
              data: [10, 22, 28, 43, 49],
              barWidth: '10%'
            }
          ]
        },

        //影评构成:
        mk_comment : {
          series: [
            {
              type: 'pie',
              data: [
                {
                  value: 335,
                  name: '直接访问'
                },
                {
                  value: 234,
                  name: '联盟广告'
                },
                {
                  value: 1548,
                  name: '搜索引擎'
                }
              ]
            }
          ]
        },


      };
    },

    mounted() {
      let this_ = this;
      let chart = echarts.init(document.getElementById('sector'));
      chart.setOption(this.icreaseUser);

      let mk_m = echarts.init(document.getElementById('makeUp_Comment'));
      mk_m.setOption(this.mk_comment);
      window.addEventListener('resize',function() {chart.resize()});
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
    margin-right: 20px  ;
    margin-top: 30px;
    margin-bottom: 90px;
    position: relative;
  }


  .topData {
    /*height: 300px;*/
    /*background-color: #409eff;*/
    display: flex;
    margin-left: 30px;
  }

  #sector{
    width: 700px;
    height: 400px;
  }

  #makeUp_Comment {
    width: 500px;
    height: 400px;
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
    right:80px;
  }

  .card_num {
    font-size: 25px;
    position: absolute;
    top: 120px;
    right: 80px;
  }
</style>
