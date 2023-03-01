<template>
  <div>

    <div class="CommentIpt">
      <!--      <span ></span>-->
      <span>    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                           class="avatarIpt hidden-sm-and-down"></el-avatar></span>
      <el-input
        type="textarea"
        :rows="2"
        placeholder="输入你的评论"
        v-model="commentContent">
      </el-input>

      <el-link :underline="false" class="comment_btn_mobile hidden-sm-and-up">发布</el-link>
      <el-button type="warning" plain class="comment_btn hidden-sm-and-down">发表评论</el-button>

    </div>
    <hr class="hr-edge-weak" style="margin-top: 30px">

    <div class="talkArea">

      <div class="commentBox">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                   class="avatar"></el-avatar>
        <div id="username"> 名字名字名字</div>
        <div class="comment">

          评论信息评论信息评论信息
          评论信息v评论信息
          评论信息v评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息
        </div>

        <div id="like">
            <span class="iconfont icon-dianzan" id="iconUse">
                <span class="numOfLike">
                  100
                </span>
            </span>
          <span class="iconfont icon-tubiao_diancai DisiconUse" id="iconUse">
                 <span class="numOfLike" id="numOfDislike">
                  100
                </span>
            </span>
          <el-link class="el-icon-s-comment" id="iconUse" @click="replyIpt"></el-link>
        </div>
      </div>

      <div class="reply"   v-if="isReplying">
        <span>    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                               class="avatarIpt hidden-sm-and-down"></el-avatar></span>
        <el-input
          type="textarea"
          :rows="lieOfComment"
          placeholder="输入你的评论!"
          v-model="commentContent">
        </el-input>

        <el-link :underline="false" class="comment_btn_mobile hidden-sm-and-up">发布</el-link>
        <el-button type="warning" plain class="comment_btn hidden-sm-and-down">发表评论</el-button>


      </div>
      <hr class="hr-edge-weak" style="margin-top: 30px">

    </div>
    <div class="talkArea">

      <div class="commentBox">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                   class="avatar"></el-avatar>
        <div id="username"> 名字名字名字</div>
        <div class="comment">

          评论信息评论信息评论信息
          评论信息v评论信息
          评论信息v评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息
        </div>

        <div id="like">
            <span class="iconfont icon-dianzan" id="iconUse">
                <span class="numOfLike">
                  100
                </span>
            </span>
          <span class="iconfont icon-tubiao_diancai DisiconUse" id="iconUse">
                 <span class="numOfLike" id="numOfDislike">
                  100
                </span>
            </span>
          <el-link class="el-icon-s-comment" id="iconUse" @click="replyIpt"></el-link>
        </div>
      </div>

      <div class="reply"   v-if="isReplying">
        <span>    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                             class="avatarIpt hidden-sm-and-down"></el-avatar></span>
        <el-input
          type="textarea"
          :rows="lieOfComment"
          placeholder="输入你的评论"
          v-model="commentContent">
        </el-input>

        <el-link :underline="false" class="comment_btn_mobile hidden-sm-and-up">发布</el-link>
        <el-button type="warning" plain class="comment_btn hidden-sm-and-down">发表评论</el-button>


      </div>
      <hr class="hr-edge-weak" style="margin-top: 30px">

    </div>
    <div class="talkArea">

      <div class="commentBox">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                   class="avatar"></el-avatar>
        <div id="username"> 名字名字名字</div>
        <div class="comment">

          评论信息评论信息评论信息
          评论信息v评论信息
          评论信息v评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息评论信息
        </div>

        <div id="like">
            <span class="iconfont icon-dianzan" id="iconUse">
                <span class="numOfLike">
                  100
                </span>
            </span>
          <span class="iconfont icon-tubiao_diancai DisiconUse" id="iconUse">
                 <span class="numOfLike" id="numOfDislike">
                  100
                </span>
            </span>
          <el-link class="el-icon-s-comment" id="iconUse" @click="replyIpt"></el-link>
        </div>
      </div>

      <div class="reply"   v-if="isReplying">
        <span>    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                             class="avatarIpt hidden-sm-and-down"></el-avatar></span>
        <el-input
          type="textarea"
          :rows="lieOfComment"
          placeholder="输入你的评论"
          v-model="commentContent">
        </el-input>

        <el-link :underline="false" class="comment_btn_mobile hidden-sm-and-up">发布</el-link>
        <el-button type="warning" plain class="comment_btn hidden-sm-and-down">发表评论</el-button>


      </div>
      <hr class="hr-edge-weak" style="margin-top: 30px">

    </div>


  </div>
</template>

<script>
  export default {
    name: "Communication",

    data() {
      return {
        commentContent: '',
        dialogVisible: false,
        lieOfComment:3,
        isReplying : false,
      }
    },

    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
      },
      replyIpt(){
          this.isReplying = true;
      },
    },

    mounted() {
      this.$nextTick(() => {
        if (window.innerWidth < 900) {
          this.lieOfComment = 2;
        }
      })
    },


  }
</script>

<style scoped>

  .talkArea {
    /*width: 100%;*/
    /*height: 100%;*/
    /*background-color: red;*/
    /*position: absolute;*/
  }


  .commentBox {
    width: 80%;
    height: 150px;
    /*background-color: wheat;*/
    position: relative;
    /*left: 20px;*/
  }

  .avatar {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 20px;
    left: 40px;
  }

  #username {
    font-size: 15px;
    /*font-weight: ;*/
    color: #ff3c51;
    position: absolute;
    top: 20px;
    left: 110px;
  }


  .comment {
    font-size: 13px;
    text-align: left;
    position: absolute;
    /*margin-top: px;*/
    top: 60px;
    left: 115px;
  }

  #like {
    position: absolute;
    /*margin-top: 25px;*/
    top: 123px;
    left: 150px;
  }

  #iconUse {
    font-size: 20px;
    margin-right: 150px;
    font-weight: bolder;

  }

  .numOfLike {
    font-size: 15px;
    font-weight: 100
  }


  .hr-edge-weak {
    border: 0;
    padding-top: 1px;
    background: linear-gradient(to right, transparent, #d0d0d5, transparent);
  }

  .hr-shadow {
    border: 0;
    padding-top: 10px;
    color: #d0d0d5;
    border-top: 1px solid rgba(0, 0, 0, .1);
    box-shadow: inset 0 10px 10px -10px;
  }

  .CommentIpt {
    /*width: 85%;*/
    display: flex;
  }

  .avatarIpt {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    margin-top: 10px;
  }

  .comment_btn {
    height: 50px;
    width: 90px;
    vertical-align: top;
    margin-left: 30px;
  }

  comment_btn_mobile {
    width: 50px;
  }

  .reply {
    display: flex;
    width: 70%;
    /*position: absolute;*/
    margin-left: 30%;
    margin-top: 40px;
    /*bottom: 3px;*/
  }

  @media screen and (max-width: 1440px) {
    .avatar {
      width: 50px;
      height: 50px;
      left: 3px;
    }

    #username {
      left: 70px;
    }

    .comment {
      left: 75px;
    }

    .comment {
      width: 100%;
      font-size: 10px;
    }

    #like {
      width: 100%;
      left: 60px;
      top: 150px;
    }

    #iconUse {
      font-size: 15px;
      margin-right: 30px;
      /*font-weight: bolder;*/
    }

  }


  @media screen and (min-width: 1441px) {
    #numOfDislike {
      vertical-align: top;
    }

    .DisiconUse {
      position: relative;
      top: 4px;
    }
  }

</style>


