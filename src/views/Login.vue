<template>
  <div>


    <div v-loading="loading" element-loading-text="登录中..." element-loading-spinner="el-icon-loading"
         element-loading-background="rgba(0, 0, 0, 0.6)" class="login-container">

     <router-link to="/main">
       <div style="font-size: 20px"><span class="
el-icon-switch-button"></span>返回</div>
     </router-link>

      <el-form ref="loginForm" class="login-form" auto-complete="on" label-position="left">
        <!-- 头像区域 -->
        <div v-if="true" class="avatar-box">
          <img
            src="http://royx9j1g6.hn-bkt.clouddn.com/the%20last%20of%20us%20.jpg?e=1674528128&token=8QjUa_hRBAeppRLGZfianHZlbZ1Uxt_KxRD4_7bv:teHt0bNEXIqELFsthpbqtxS_xX0="
            alt="">
        </div>


        <div class="title-container">
          <h3 class="title">后台管理系统</h3>
        </div>

        <el-form-item prop="username">
        <span class="svg-container">
         <i class="el-icon-s-custom"></i>
        </span>
          <el-input v-model="account" placeholder="请输入账号"></el-input>

        </el-form-item>

        <el-form-item prop="password">
        <span class="svg-container">
         <i class="el-icon-lock"></i>
        </span>
          <el-input placeholder="请输入密码" v-model="pwd" show-password></el-input>
        </el-form-item>

        <el-form-item prop="code" v-show="isRegister">
        <span class="svg-container">
         <i class="el-icon-lock"></i>
        </span>
          <el-input placeholder="请输入验证码" v-model="code">
            <template #suffix>
              <el-button type="primary" style="height: 45px;">获取动态码</el-button>
            </template>
          </el-input>

        </el-form-item>
        <div>
          <el-button type="primary" style="width:100%;margin-bottom:20px;" @click="handleLogin">
            {{loginButton }}
          </el-button>
        </div>
        <div>

          <!--          <router-link to="/movieviews">-->
          <el-button style="width:100%;margin-bottom:20px;" @click="handleRegister">
              <span>
                  {{registerButton}}
              </span>
          </el-button>
          <!--          </router-link>-->


        </div>

      </el-form>

    </div>
  </div>
</template>

<script>
  // 引入去除空格工具
  import {validUsername} from '@/utils/validate';

  export default {
    name: 'Login',
    data() {
      return {
        account: '',
        pwd: '',
        code: '',
        isRegister: false,

        // 白色按钮:
        loginButton: '登录',
        registerButton: '注册',

        loading:false,

      }
    },
    methods: {
      handleLogin() {
        console.log(this.account)
        if (this.account = '123' && this.pwd == '123') {
          // alert('success')
          // this.loading = true;
        } else {
          // alert("failure")
        }

        this.loading = true
        setTimeout(() => {
          // this.currentScrollCount += 6
          this.loading = false;
        }, 2000) // 关闭窗口

        // this.loading = false;
        this.account = '';
        this.pwd = ''
      },
      handleRegister() {
        this.isRegister = !this.isRegister;
        var temp = this.registerButton;
        this.registerButton = this.loginButton;
        this.loginButton = temp;
      },

      // 注册业务
      register() {
        console.log('123');
        this.$router.push({name: 'register'});
      }
    }
  }
</script>

<style lang="scss">
  $bg: #283443;
  $light_gray: #fff;
  $cursor: #fff;
  @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
    .login-container .el-input input {
      color: $cursor;
    }
  }

  .login-container {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 89%;

      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;

        &:-webkit-autofill {
          box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: $cursor !important;
        }
      }
    }

    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
  }
</style>

<style lang="scss" scoped>
  $bg: #2d3a4b;
  $dark_gray: #889aa4;
  $light_gray: #eee;

  .login-container {
    /*min-height: 100%;*/
    height: 960px;
    width: 100%;
    overflow: hidden;
    background: url(~@/assets/bg0.jpeg);
    background-size: 100% 100%;
    // 头像
    .avatar-box {
      margin: 0 auto;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      border: 1px solid #409eff;
      box-shadow: 0 0 10px #409eff;
      position: relative;
      bottom: 20px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    .login-form {
      position: relative;
      width: 520px;
      max-width: 100%;
      padding: 160px 35px 0;
      margin: 0 auto;
      overflow: hidden;

    }


    .tips {
      font-size: 18px;
      text-align: center;
      color: #000;
      margin-bottom: 10px;
    }

    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
    }

    .title-container {
      position: relative;

      .title {
        font-size: 30px;
        color: $light_gray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: 500;
      }
    }

    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }

    @media screen and (max-width: 1440px) {
      .login-form {
        width: 100%;
        padding: 160px 0px 0;
      }
    }
  }
</style>
