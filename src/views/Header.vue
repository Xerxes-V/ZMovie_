<template>
  <!--  <el-header>-->
  <div>
    <div class="line"></div>
    <el-row type="flex" align="middle" style="width: 100%">
      <!--          搜索框-->
      <el-col :xs="6" :sm="6" :md="4" :lg="3" :xl="3" :offset="5" class=" hidden-sm-and-down">
       <el-link @click="toMain" :underline="false">
         <img src="../assets/zmovie.jpg" class="logo">
       </el-link>
      </el-col>


      <el-col :xs="6" :sm="6" :md="4" :lg="3" :xl="4" :offset="0.5" class=" hidden-sm-and-down">
        <el-input
          placeholder="请输入内容"
          v-model="searchInput">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>

      <!--          搜索框移动端-->

      <el-col :xs="6" :sm="6" :md="4" :lg="3" :xl="4" :offset="3" class="hidden-md-and-up">

        <div class="menu-button">
          <i @click="drawerSerach = true" type="text" class="el-icon-search">
          </i>
        </div>

        <el-drawer
          :visible.sync="drawerSerach"
          :direction="directionSerach"
          :withHeader="false"
          :size=60
          :before-close="handleClose">

          <!--                  展开后-->
          <span>
                <el-row type="flex" align="middle" style="width: 100%">
                  <el-col :span="17" :offset="1">
                    <el-input
                      placeholder=""
                      v-model="searchInput" clearable>
                      <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>

                  </el-col>
                  <el-col :span="2">
                    <div>
                      a
                    </div>
                  </el-col>
                </el-row>
              </span>


        </el-drawer>


      </el-col>


      <!--          导航栏-->
      <el-col :xs="10" :sm="6" :md="12" :lg="3" :xl="6" offset="0.5" class=" hidden-sm-and-down">
        <el-menu
          :default-aactive="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#F8F8FF "
          text-color="green"
          active-text-color="#ffd04b"

        >

          <el-menu-item index="1" @click="toMain">
           主页
          </el-menu-item>
          <el-menu-item index="2" @click="toTypes">
            分类
          </el-menu-item>
          <el-menu-item index="3"  @click='toRecommendation'>
            电影推荐
          </el-menu-item>
        </el-menu>

      </el-col>
      <!--          头像-->
      <el-col :xs="6" :sm="6" :md="1" :lg="3" :xl="1" class="avatarMobile" >
           <el-link @click="toLog" :underline="false">
             <el-avatar icon="el-icon-user-solid"   >
             </el-avatar>
           </el-link>


      </el-col>
      <!--          抽屉-->
      <el-col :xs="6" :sm="6" :md="1" :lg="3" :xl="1" class="hidden-md-and-up">

        <div class="menu-button">
          <i @click="drawer = true" type="text" class="el-icon-s-unfold">
          </i>
        </div>

        <el-drawer
          :visible.sync="drawer"
          :direction="direction"
          :before-close="handleClose">
          <div>  <el-link  @click="toMain">首页</el-link></div>
          <div>  <el-link  @click="toTypes">分类</el-link></div>
          <div>  <el-link  @click="toRecommendation">电影推荐</el-link></div>
        </el-drawer>


      </el-col>


    </el-row>
  </div>
  <!--  </el-header>-->
</template>


<script>
  var CollectButton = document.querySelector("#collectButton");

  export default {
    name: "Header",
    data() {
      return {
        searchInput: '',
        drawer: false,
      }
    },
    methods: {
      toLog(){
        this.$router.push({ path: '/log' })
      },

      toMain(){
        this.$router.push({ path: '/main' })
      },
      toTypes(){
        this.$router.push({ path: '/type' })
      },

      toRecommendation(){
        this.$router.push({ path: '/movieviews' })
      },
    },
  }
  import 'element-ui/lib/theme-chalk/display.css';
</script>

<style scoped>
  /*布局样式：*/


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

  .el-menu--horizontal>.el-menu-item {
    height: 54px;
  }


  /*导航栏样式：*/
  /*  .el-menu {*/
  /*    width: 600px;*/
  /*    margin: auto;*/
  /*  }*/

  el-menu {
    height: 50px;
    margin-right: 20px;
  }

  .el-menu-item {
    width: 30%;
  }


  /*头像居中对齐*/
  .parent {
    display: flex;
    justify-content: center; /*主轴上居中*/
    align-items: center; /*侧轴上居中*/
  }

  .avatar {
    background-color: #F8F8FF;
    height: 59px;
    border: 0px;
  }

  /*移动端导航栏三条杠大小*/
  .menu-button {
    font-size: 30px;
  }

  .logo {
    height: 59px;
  }

  /*取消router-link下划线*/
  a{
    text-decoration: none;
  }
  .router-link-active {
    text-decoration: none;
  }

  @media screen and (max-width: 1440px){
    .el-header, .el-footer {
      line-height: 60px;
    }
    .avatarMobile {
      line-height: 0px;
    }
  }




</style>

