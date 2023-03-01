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
        v-model="movieCommentContent">
      </el-input>

      <el-link :underline="false" class="comment_btn_mobile hidden-sm-and-up" @click="movieComment">发布</el-link>
      <el-button type="warning" plain class="comment_btn hidden-sm-and-down" @click="movieComment">发表评论</el-button>

    </div>
    <hr class="hr-edge-weak" style="margin-top: 30px">

    <div class="scrollArea" style="overflow:auto">
     <div
     v-infinite-scroll="doPostAction"
     infinite-scroll-immediate="false"
     infinite-scroll-disabled="end"
     infinite-scroll-distance="1"
     >
       <el-empty description="暂无评论" v-if="comments.length==0" style="background-color: white; height: 800px;"></el-empty>

       <div class="talkArea" v-if="comments.length>0" v-for="(item,index) in comments">


      <div class="commentBox" @mouseover="moreOnComment(index)" @mouseleave="moreOnComment1(index)" >
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                   class="avatar"></el-avatar>

        <div>
          <div id="username">
            <span>  {{item.userName}}</span>
            <el-rate
              v-model="item.score/2"
              style="display: inline;font-size: 25px"
            >
            </el-rate>
            <span class="comment_time"> {{dateSplit(item.commentTime)}} </span>
          </div>
          <div class="comment">

            {{item.content}}
          </div>

          <div id="like">
            <span id="iconUse">
                <el-link class="iconfont icon-dianzan" :underline="false">
                </el-link>
               <span class="numOfLike">
                    {{item.likes}}
                  </span>
            </span>

            <span id="iconUse">
              <el-link class="iconfont icon-tubiao_diancai DisiconUse" :underline="false" style="margin-bottom: 8px" >
              </el-link>
                   <span class="numOfLike" >
                    {{item.dislikes}}
                  </span>
            </span>
            <el-link class="el-icon-s-comment" id="iconUse" @click="replyIpt(item,index)"
                     style="margin-top: 0px" :underline="false"></el-link>


            <span v-show="false" >{{item.useless}}</span>
          </div>
        </div>

<!--        -->
        <span v-show="item.showMore" >
         <el-popconfirm
           confirm-button-text='好的'
           cancel-button-text='不用了'
           placement="left"
           @confirm="deleteComment(item,index)"
           icon="el-icon-info"
           icon-color="red"
           title=" 删除"
         >

               <el-button style="width: 176px" @click="deleteComment(item)">删除</el-button>
               <el-link class="iconfont icon-androidgengduo" id="more" :underline="false"  slot="reference"> </el-link>
          </el-popconfirm>
        </span>
<!--        <el-link class="iconfont icon-androidgengduo" id="more" :underline="false" v-if="item.showMore" @click="clickMore"  > </el-link>-->

      </div>



      <div class="replyMsg" v-for="(reply,replyIndex) in item.sons.slice(0,item.showReplyNums)" @mouseover="moreOnReply(index,replyIndex)" @mouseleave="moreOnReply1(index,replyIndex)">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                   class="replyAvatar"></el-avatar>
        <div id="replyText">
          <span class="replyUname"> {{reply.username}}     </span>
          <span class="replyUser" v-if="reply.parentId != 0"> 回复@</span>
          <span v-if="reply.parentId != 0">{{reply.targetUserName}} : </span>
          <span class="replyContentNoReply" v-if="reply.parentId == 0">
           {{reply.content}}
          </span>
          <span class="replyContent" v-if="reply.parentId != 0">
           {{reply.content}}
          </span>

          <div class="replyLike">
            <span class="reply_time"> {{dateSplit(reply.commentTime)}}  </span>

            <span id="iconUse">
              <el-link class="iconfont icon-dianzan" :underline="false"></el-link>
                <span class="numOfLike">
                  {{reply.likes}}
                </span>
            </span>
            <span id="iconUse">
                <el-link class="iconfont icon-tubiao_diancai DisiconUse" :underline="false" style="margin-bottom: 8px"></el-link>
                 <span class="numOfLike">
                  {{reply.dislikes}}
                </span>
            </span>
            <el-link class="el-icon-s-comment" id="iconUse " @click="replyReply(item,reply,index)"
                     style="margin-top: 0px"  :underline="false"></el-link>

            <span v-show="reply.showMore" >
              <el-popconfirm
                confirm-button-text='好的'
                cancel-button-text='不用了'
                placement="left"
                @confirm="deleteReply(item,index,replyIndex,reply)"
                icon="el-icon-info"
                icon-color="red"
                title=" 删除"
              >

               <el-button style="width: 176px">删除</el-button>
                <el-button style="width: 176px">举报</el-button>
               <el-link class="iconfont icon-androidgengduo" id="more2" :underline="false"  slot="reference"> </el-link>
            </el-popconfirm>
           </span>
<!--            <el-link class="iconfont icon-androidgengduo" id="more2"  :underline="false"  v-if="reply.showMore"></el-link>-->
          </div>

        </div>


      </div>
      <div style="text-align: left;margin-left: 50px">
        <el-link :underline="false" @click="showMoreReplys(item)" v-if="item.sons.length > item.showReplyNums"
                 class="moreOrClose"> 展开更多
        </el-link>
        <el-link :underline="false" @click="close(item)" v-if="2 < item.showReplyNums" class="moreOrClose"> 收起</el-link>
      </div>

      <div class="reply" v-if="item.showReply">
        <span>    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                             class="avatarIpt hidden-sm-and-down"></el-avatar></span>
        <el-input
          type="textarea"
          :rows=2
          :placeholder="'回复'+replyTarget+'：'"
          v-model="replyContent">
        </el-input>

        <el-link :underline="false" class="comment_btn_mobile hidden-sm-and-up" @click="reply(item.id,replyTargetId)">发布
        </el-link>
        <el-button type="warning" plain class="comment_btn hidden-sm-and-down" @click="reply(item.id,replyTargetId)">发表评论
        </el-button>

      </div>


      <hr class="hr-edge-weak" style="margin-top: 20px">


    </div>

     </div>
    </div>

    <p v-if="loading">加载中...</p>
    <p v-if="end">没有更多了</p>

  </div>
</template>

<script>
  export default {
    name: "Communication",

    data() {
      return {
        //影评输入框内容：
        movieCommentContent: '',

        //回复内容
        replyContent: '',

        movie_id: 0,

        // comments:[],
        //模拟评论信息：
        // comments: [
        //   {
        //     id: 1,
        //     userId: 1,
        //     userName: '小白',
        //     content: '一级评论',
        //     score: 4,
        //     sons: [
        //       {
        //         userId: 2,
        //         username: '小百',
        //         content: '二级评论'
        //       },
        //       {
        //         userId: 2,
        //         username: '小百',
        //         content: '二级评论'
        //       },
        //       {
        //         userId: 2,
        //         username: '小百',
        //         content: '二级评论'
        //       }
        //     ],
        //     showReply: false,
        //     showReplyNums: 2,  //最多展示多少回复
        //
        //   },
        //   {
        //     id: 2,
        //     userId: 3,
        //     username: '小黑',
        //     content: '一级评论',
        //     score: 3,
        //     sons: [
        //       {
        //         userId: 4,
        //         username: '小嘿',
        //         content: '二级评论'
        //       },
        //       {
        //         userId: 5,
        //         username: '小潶',
        //         content: '二.1 级评论'
        //       },
        //       {
        //         userId: 5,
        //         username: '小潶',
        //         content: '二.2 级评论'
        //       },
        //       {
        //         userId: 5,
        //         username: '小潶',
        //         content: '二.3 级评论'
        //       },
        //       {
        //         userId: 5,
        //         username: '小潶',
        //         content: '二.4 级评论'
        //       }
        //
        //     ],
        //     showReply: false,
        //     showReplyNums: 2,  //最多展示多少回复
        //
        //
        //   }
        // ],
        comments:[],

        //回复的对象：
        replyTarget: "",

        //上一个被回复点击的用户，判断是否下次点击为同一父级评论，不是则关闭上一个位置的评论框
        lastClickReplyTargetIndex: 0,

        //回复评论的id
        replyTargetId:0,

        //
        visable:false,

        //当前显示是第几页：
        curPage:0,


        //无限滚动:
        end:false,

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

     //点击切换评论框显示与否
      replyIpt(comment, index) {
        // 判断是否下次点击为同一父级评论，不是则关闭上一个位置的评论框
        if (index != this.lastClickReplyTargetIndex) {
          console.log("??");
          this.comments[this.lastClickReplyTargetIndex].showReply = false;
          this.lastClickReplyTargetIndex = index;
        }
        comment.showReply = !comment.showReply;
        this.replyTarget = '';
        this.replyTargetId = 0;
      },
      //点击后出现评论框
      replyReply(comment, reply, index) {
        if (index != this.lastClickReplyTargetIndex) {
          this.comments[this.lastClickReplyTargetIndex].showReply = false;
          this.lastClickReplyTargetIndex = index;
        }
        comment.showReply = true;
        this.replyTarget = reply.username;
        this.replyTargetId = reply.id;
      },

      //展开更多评论
      showMoreReplys(comment) {
        comment.showReplyNums += 1;
      },
      //收起更多评论
      close(comment) {
        comment.showReplyNums = 2;
      },

      initData() {
        this.movie_id = this.$route.params.id;
        this.axios.get("http://localhost:8081/comments/init/" + this.movie_id).then(
          res => {
            this.comments = res.data.data;


            for(let i = 0;i<this.comments.length;i++){    //添加使用属性
              this.comments[i].showMore = false;                            //控制 影评以及 回复的更多按钮的显示与隐藏：
              this.comments[i].other = "1";
              for(let j = 0;j<this.comments[i].sons.length;j++){
                this.comments[i].sons[j].showMore = false;
              }
            }

            console.log(this.comments)
          });
      },


      dateSplit(date) {  //时间格式转换
        let res = date.substring(0, 10) + ' ' + date.substring(11, 16);
        return res;
      },

      movieComment() {
        const params = {
          'movieId': this.movie_id,
          'content': this.movieCommentContent
        }

        // let newDate = new Date();
        // let now = newDate.toISOString(Date.now());
        // const concatComment = {
        //   {
        //       userName:
        //   }
        // }


        this.movieCommentContent = '';
        this.axios(
          {
            method: 'put',
            url: 'http://localhost:8081/comments/publismc',
            data: JSON.stringify(params),
            headers: {
              'Content-Type': 'application/json;charset=UTF-8'
            }
          }
        ).then(
          res => {
            //记得按 res 失败或成功调整提示信息以及操作！！！ 3/2
            if (res.data.data) {

              this.initData();
            } else {
              alert("发布失败，请重试！")
            }
          }
        )
      },

      reply(mcId, parentId) {
        const params = {
          'movieId': this.movie_id,
          'content': this.replyContent,
          'targetUserName': this.replyTarget,
          'mcId': mcId,
          'parentId': parentId,
        }

        this.replyContent = '';
        this.replyTargetId = 0;
        this.axios(
          {
            method: 'put',
            url: 'http://localhost:8081/comments/publisreply',
            data: JSON.stringify(params),
            headers: {
              'Content-Type': 'application/json;charset=UTF-8'
            }
          }
        ).then(
          res => {
            //记得按 res 失败或成功调整提示信息以及操作！！！ 3/2
            if (res.data.data) {
              this.initData();
            } else {
              alert("发布失败，请重试！")
            }
          }
        )
      },

      //控制 影评以及 回复的更多按钮的显示与隐藏：
      moreOnComment(index){
        this.comments[index].useless=1;                   //不知道为啥，必须同时改变来自后端的属性才能正常执行，这个属性fw没用的
        this.$set(this.comments[index],'showMore',true);
      },
      moreOnComment1(index){
        this.comments[index].useless=2;
        this.$set(this.comments[index],'showMore',false);

      },
      moreOnReply(index,replyIndex){
        this.comments[index].useless=3;
        this.comments[index].sons[replyIndex].showMore = true;
      },
      moreOnReply1(index,replyIndex){
        this.comments[index].useless=4;
        this.comments[index].sons[replyIndex].showMore = false;
      },

      //删除：
      deleteComment(comment,index){
        this.axios.delete("http://localhost:8081/comments/deleteComment/"+comment.id).then(
          res=>{
            if (res.data.data) {
              this.comments.splice(index,1);
            } else {
              alert("删除失败，请重试！")
            }
          }
        );
      },

      deleteReply(comment,index,replyIndex,reply){
        this.axios.delete("http://localhost:8081/comments/deleteReply/"+reply.id).then(
          res=>{
            if (res.data.data) {
              this.comments[index].sons.splice(replyIndex,1);
            } else {
              alert("删除失败，请重试！")
            }
          }
        );
      },

      //滚动更多：
      showMoreComments(){
        this.curPage+=1;
        this.axios.get("http://localhost:8081/comments/showMoreComments/"+this.movie_id+"/"+this.curPage).then(
          res=>{
            if(res.data.data.length == 0){
              this.end = true;
              return;
            }
            this.comments = this.comments.concat(res.data.data)
          }
        );
      },

      postAction(){
        this.doPostAction()
      },

    },



    created() {
      this.initData();
      this.doPostAction = _.debounce(this.showMoreComments,500);    //解决一次滑动多次请求的问题。
    }


  }
</script>

<style scoped>

  .talkArea {
    background-color: #f3f5c2;
  }
  .scrollArea {
    height: 800px;
  }


  .commentBox {
    width: 100%;
    display: flex;
  }

  .avatar {
    width: 60px;
    height: 60px;
  }

  #username {
    font-size: 20px;
    text-align: left;
    color: #ff3c51;
    margin-left: 25px;
  }

  .comment_time {
    /*font-size: 15px;*/
    color: #475669;
    margin-left: 20px;
  }

  .comment {
    font-size: 15px;
    text-align: left;
    margin-left: 25px;
    margin-top: 10px;
  }

  #like {
    margin-top: 15px;
    margin-left: 50px;
    margin-bottom: 10px;
  }

  #iconUse {
    font-size: 15px;
    margin-right: 150px;
    margin-top: 20px;
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
    width: 90%;
    margin-left: 10%;
    margin-top: 40px;
  }

  .replyMsg {
    /*background-color: wheat;*/
    display: flex;
    margin-left: 80px;
    margin-top: 10px;
  }

  .replyAvatar {
    height: 30px;
    width: 30px;
  }

  #replyText {
    text-align: left;
    margin-left: 10px;
    margin-top: 4px;
  }

  .replyUname {
    color: #D3DCE6;
    font-size: 15px;
    text-align: left;
  }

  .replyContent {
    color: white;
    font-size: 15px;
    text-align: left;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .replyLike {
    margin-top: 8px;
    margin-bottom: 10px;
    font-size: 10px;
  }

  .reply_time {
    margin-right: 100px;
  }

  .replyUser {
    margin-left: 20px;
    /*margin-right: 10px;*/
  }

  .replyContentNoReply {
    margin-left: 30px;
  }

  #more {
    font-size: 20px;
    margin-left: 360px;
    margin-top: 70px;
  }

  #more2 {
    font-size: 20px;
    margin-left: 290px;
  }

  /deep/ .el-popover {
    min-width: 100px;
  }

  @media screen and (max-width: 1440px) {
    .avatar {
      width: 40px;
      height: 40px;
      left: 3px;
    }

    #username {
      font-size: 13px;
      margin-left: 10px;
    }


    .comment {
      width: 100%;
      font-size: 10px;
      margin-top: 5px;
      margin-left: 10px;
    }

    #like {
      width: 100%;
      margin-top: 5px;
      margin-left: 20px;
    }

    #iconUse {
      font-size: 10px;
      margin-right: 30px;
    }

    .replyMsg {
      margin-left: 40px;
    }

    .replyAvatar {
      height: 30px;
      width: 30px;
    }

    .replyUname {
      font-size: 13px;
    }

    .replyContent {
      font-size: 10px;
      margin-top: 5px;
    }

    .replyLike {
      font-size: 10px;
      margin-bottom: 0px;
    }

    .reply {
      width: 100%;
      margin-left: 0%;
      margin-top: 10px;
    }

    .reply_time {
      margin-right: 20px;
    }

    .moreOrClose {
      font-size: 7px;
    }

    .replyUser {
      margin-left: 5px;
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


