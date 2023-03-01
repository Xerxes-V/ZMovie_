<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']" >
        <el-submenu index="1">
          <template slot="title"  ><i class="el-icon-message"></i>系统信息</template>

              <el-menu-item index="1-1" @click="toUserMsg"> 用户信息总概</el-menu-item>
            <el-menu-item index="1-2" @click="toMovieMsg">电影信息总概</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>电影信息</template>
            <el-menu-item index="2-1" @click="toMovieAdd">上架电影</el-menu-item>
            <el-menu-item index="2-2" @click="toMovieManage">电影管理</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>用户信息</template>
            <el-menu-item index="3-1" @click="toCommentManage">评论信息管理</el-menu-item>
            <el-menu-item index="3-2" @click="toUserManage">用户信息管理</el-menu-item>
          </el-submenu>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title"><i class="el-icon-setting"></i>管理员资料</template>
          <el-menu-item index="3-1" @click="toAdminManage">管理员资料</el-menu-item>
        </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>admin</span>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
    export default {
        name: "index",

      data() {
        const item = {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        };
        return {
          isCollapse: true,
          tableData: Array(20).fill(item)
        };
      },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },

        toUserMsg(){
          this.$router.push({ path: '/userMsg' })
        },
        toMovieMsg(){
          this.$router.push({ path: '/movieMsg' })
        },
        toMovieAdd(){
          this.$router.push({ path: '/movieAdd' })
        },
        toMovieManage(){
          this.$router.push({ path: '/movieManagement' })
        },
        toCommentManage(){
          this.$router.push({ path: '/commentManagement' })
        },
        toUserManage(){
          this.$router.push({ path: '/userManagement' })
        },
        toAdminManage(){
          this.$router.push({ path: '/adminManagement' })
        },

      },
    }
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
    height: 1080px;
    margin-top: 2.5%;
  }

  .el-main {
    height: 100%;
  }

  /*一级标题*/
 /deep/ .el-submenu__title {
    font-size: 20px;
  }

  /deep/ .el-submenu .el-menu-item {
    font-size: 18px;
  }

</style>
