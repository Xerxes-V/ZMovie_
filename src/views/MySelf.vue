<template>
  <div>
    <el-row type="flex" align="middle">
      <el-col :xs="24" :sm="6" :md="4" :lg="3" :xl="14" :offset="curOffset">
        <el-card class="box-card">
          <div class="text item">
            <div class="uCard">
              <div class="avatarDiv">
                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                           class="avatar"></el-avatar>
              </div>
              <span class="uName"> 名字名字名字</span>
            </div>
            <div class="smallUname">名字名字名字名字</div>


            <div class="iconfont icon-shezhitianchong" id="settingIcon"></div>
          </div>
        </el-card>

        <template>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="主页" name="first">
                <span slot="label">
                    <router-link to="/me">
                     <span class="iconfont icon-zhuye" id="tabsIcon"></span>
                     <span id="tabsAll">    我的主页  </span>
                    </router-link>
                 </span>
            </el-tab-pane>
            <el-tab-pane label="我的影评" name="second">
                <span slot="label">
                 <router-link to="/movieComment">
                   <span class="iconfont icon-wodetiezi-copy" id="tabsIcon"></span>
                     <span id="tabsAll">    我的影评 </span>
                 </router-link>
                 </span>
            </el-tab-pane>
            <el-tab-pane label="我的评论" name="third">
                <span slot="label">
                    <router-link to="/myComment">
                      <span class="iconfont icon-pinglun2" id="tabsIcon"></span>
                       <span id="tabsAll">    我的评论  </span>
                    </router-link>
                 </span>
            </el-tab-pane>
            <el-tab-pane label="我的收藏" name="fourth">
                <span slot="label">
                   <router-link to="/myCollect">
                     <span class="iconfont icon-shoucang " id="tabsIcon"></span>
                     <span id="tabsAll">     我的收藏 </span>
                   </router-link>
                 </span>
            </el-tab-pane>
            <el-tab-pane label="浏览记录" name="fifth">
                <span slot="label">
                  <router-link to="/myHistory">
                   <span class="iconfont icon-lishijilu" id="tabsIcon"></span>
                   <span id="tabsAll">    浏览记录  </span>
                  </router-link>
                 </span>
            </el-tab-pane>
            <el-tab-pane label="设置" name="sixth">
                 <span slot="label">
                   <span class="iconfont icon-shezhitianchong" id="tabsIcon"></span>
                   <span id="tabsAll">    设置  </span>
                 </span>
            </el-tab-pane>
          </el-tabs>
        </template>


        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "MySelf",
    data() {
      return {
        curOffset: 5,
      }
    },
    mounted() {
      this.$nextTick(() => {
        if (window.innerWidth < 900) {
          this.curOffset = 0;
        }
      })
    },

    methods: {},

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
    width: 100%;
    height: 250px;
    background: url(~@/assets/bg0.jpeg);
  }

  .uCard {
    display: flex;
  }

  .avatar {
    width: 80px;
    height: 80px;

  }

  .avatarDiv {
    margin-top: 100px;
  }

  .uName {
    color: white;
    font-size: 22px;
    margin-left: 20px;
    margin-top: 100px;
  }

  .smallUname {
    display: none;
  }

  /deep/ .el-tabs__item {
    width: 200px;
    height: 60px;
    text-align: center;
    line-height: 60px;
  }

  #tabsIcon {
    color: #9a962f;
    font-size: 22px;
    margin-right: 3px;
  }

  #tabsAll {
    font-size: 17px;
  }


  /*屏幕尺寸自适应*/
  @media screen and (max-width: 1440px) {

    .box-card {
      height: 130px;
    }

    /deep/ .el-card__body {
      padding: 0;
    }

    .uCard {
      display: flex;
      margin-top: 0;
    }

    .avatar {
      width: 50px;
      height: 50px;

    }

    .avatarDiv {
      margin-top: 1px;
      margin-left: 43%;

    }

    .uName {
      display: none;
    }

    .smallUname {
      color: white;
      text-align: center;
      display: block;
    }


    /deep/ .el-tabs__item {
      width: 20%;
      height: 60px;
      text-align: center;
      line-height: 60px;
      padding: 0 4px;
    }

    #tabsIcon {
      color: #9a962f;
      font-size: 12px;
      /*margin-right: 3px;*/
    }


    #tabsAll {
      font-size: 12px;
    }

    #settingIcon {
      font-size: 25px;
      margin-left: 91%;
      margin-top: 2%;
    }
  }


</style>
