<template>
  <div class="rt-comment">
    <div class="header-comment">
      <div v-if="showAvatar">
        <rt-avatar :avatar="avatar"></rt-avatar>
      </div>
      <div
        :style="{ width: commentWidth }"
        class="header-comment-operation"
      >
        <rt-input
          v-model="textareaMap[0]"
          type="textarea"
          :autosize="{ minRows: minRows, maxRows: maxRows }"
          :placeholder="placeholder"
          clearable
          :show-word-limit="showWordLimit"
          :show-word-count="showWordCount"
          :max-length="maxLength"
          @focus="showButton(0)"
          @blur="inputBlur"
        />
        <div
          class="nav-comment"
        >
          <div
            class="nav-comment-icontext"
            :class="pBodyMap[0] ? 'close' : 'open'"
            @click="pBodyStatus(0)"
          >
            <rt-tooltip
              :content="$tx('表情', 'xpc.comment.expression')"
              :placement="placement"
            >
              <div>
                <rt-icon
                  class="comment-smile-icon"
                  name="rt-base-circle-smile-lined"
                  :size="21"
                />
                <span class="comment-smile-text">
                  {{ smileTitle }}
                </span>
              </div>
            </rt-tooltip>
          </div>
          <div>
            <rt-button
              type="primary"
              :disabled="!textareaMap[0]"
              @click="sendComments()"
            >
              {{ buttonTitle }}
            </rt-button>
          </div>
        </div>
        <!-- showCommentTotal是否显示评论总数 -->
        <div
          v-if="showCommentTotal"
          class="aside-comment"
        >
          <div class="aside-comment-tips"></div>
          <div class="aside-comment-title">
            {{ $tx('评论', 'xpc.comment.comment') }}{{ commentNum }}
          </div>
        </div>
        <!-- 表情弹窗 -->
        <div
          :style="{ width: emojiWidth }"
          :class="pBodyMap[0] ? 'comment-body' : 'close'"
        >
          <ul class="comment-items">
            <li
              v-for="(oitem, index) in OwOlist"
              :key="'oitem' + index"
              class="comment-item"
              @click="choseEmoji(0, oitem.title)"
            >
              <img
                :src="require('./img/face/' + oitem.url)"
                alt=""
              />
            </li>
          </ul>
        </div>
        <!-- 首次评论列表 -->
        <div
          v-for="(item, index) in commentList"
          :key="index"
          class="section-comment"
        >
          <div class="section-comment-content">
            <rt-avatar
              :avatar="
                item.commentUser.avatar ? item.commentUser.avatar : avatar
              "
            ></rt-avatar>
            <div class="section-comment-message">
              <div class="nickname">
                <div>
                  {{ item.commentUser.nickName }}
                </div>
                <slot name="label"></slot>
              </div>
              <div
                class="commentinfo"
                v-html="analyzeEmoji(item.content)"
              >
                {{ analyzeEmoji(item.content) }}
              </div>
              <div class="commentdate">
                {{ item.createDate }}
              </div>
            </div>

            <!-- 子评论列表-->
            <div
              v-for="(ritem, jndex) in item.childrenList"
              :key="jndex"
              class="children-comment"
            >
              <div class="section-comment-content">
                <rt-avatar
                  :avatar="
                  ritem.commentUser.avatar ? ritem.commentUser.avatar : avatar
                "
                ></rt-avatar>
                <div class="section-comment-message">
                  <div class="nickname">
                    <div>
                      <!-- {{ item.commentUser.nickName }} -->
                      <span class="usereply"> {{ $tx('回复', 'xpc.comment.reply') }}</span>
                      {{ ritem.commentUser.nickName }}
                    </div>
                    <slot name="labelchildren"></slot>
                  </div>
                  <div class="childreninfo">
                    <div>
                      <a href="#">@{{ ritem.targetUser.nickName }}</a>
                    </div>
                    <div
                      class="commentinfo"
                      v-html="analyzeEmoji(ritem.content)"
                    >
                      {{ analyzeEmoji(ritem.content) }}
                    </div>
                  </div>
                  <div class="commentdate">
                    {{ ritem.createDate }}
                  </div>
                </div>
              </div>
              <div class="section-comment-handle">
                <div
                  class="section-comment-reply"
                  @click="doReply(ritem.id)"
                >
                  <rt-icon
                    name="rt-base-message-lined"
                    :size="12"
                  />
                  <div>{{ $tx('评论', 'xpc.comment.comment') }}</div>
                </div>
                <div class="section-comment-reply">
                  <rt-icon
                    name="rt-base-circle-warning-lined"
                    :size="12"
                  />
                  <div>{{ $tx('举报', 'xpc.comment.report') }}</div>
                </div>
              </div>
              <div
                v-if="replyMap[ritem.id]"
                class="header-comment-operation"
                :style="{ width: commentWidth }"
                :showAvatar="showAvatar"
              >
                <rt-input
                  v-model="textareaMap[ritem.id]"
                  clearable
                  :show-word-limit="showWordLimit"
                  :show-word-count="showWordCount"
                  :max-length="maxLength"
                  :autosize="{ minRows: minRows, maxRows: maxRows }"
                  type="textarea"
                  :placeholder="placeholder"
                  @blur="inputBlur"
                  @focus="showButton(ritem.id)"
                />
                <div
                  class="nav-comment"
                >
                  <div
                    class="nav-comment-icontext"
                    :class="pBodyMap[ritem.id] ? 'close' : 'open'"
                    @click="pBodyStatus(ritem.id)"
                  >
                    <rt-tooltip
                      :content="$tx('表情', 'xpc.comment.expression')"
                      :placement="placement"
                    >
                      <rt-icon
                        class="comment-smile-icon"
                        name="rt-base-circle-smile-lined"
                        :size="21"
                      />
                    </rt-tooltip>
                    <!-- <rt-tooltip
                      content="上传图片"
                      :placement="placement"
                    >
                      <rt-icon
                        class="comment-photo-icon"
                        name="rt-base-circle-photo-lined"
                        :size="21"
                      />
                    </rt-tooltip> -->
                  </div>
                  <div>
                    <rt-button
                      type="primary"
                      :disabled="!textareaMap[ritem.id]"
                      @click="sendComments(ritem.id, ritem.commentUser.id, item.id)"
                    >
                      {{ buttonTitle }}
                    </rt-button>
                    <rt-button
                      type="default"
                      @click="cancel(ritem.id)"
                    >
                      {{ $tx('取消', 'xpc.dialog.cancel') }}
                    </rt-button>
                  </div>
                </div>
                <div
                  :style="{ width: emojiWidth }"
                  :class="pBodyMap[ritem.id] ? 'comment-body' : 'close'"
                >
                  <ul class="comment-items">
                    <li
                      v-for="(oitem, sub) in OwOlist"
                      :key="'oitem' + sub"
                      class="comment-item"
                      @click="choseEmoji(ritem.id, oitem.title)"
                    >
                      <img
                        :src="require('./img/face/' + oitem.url)"
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  // 1.你也可以把我们导入的这些组件换成Element UI 的组件
  // 2.换成了Element UI 的就不需要在导入注册了
  // 3.包含了国际化配置你也可以删除掉
  // 4.OwOlist是我们存放表情包的路径

  import RtAvatar from './Avatar.vue';
  import RtIcon from '../icon/rtIcon';
  import RtButton from '../button/rtButton';
  import RtTooltip from '../tooltip/rtTooltip';

  export default {
    name: 'comment',
    components: {
      RtAvatar,
      RtIcon,
      RtButton,
      RtTooltip
    },
    props: {
      // Tooltip 的出现位置top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end
      placement: {
        type: String,
        default: () => {
          return 'bottom';
        }
      },
      // “按钮”的文案可根据具体场景自定义。
      buttonTitle: {
        type: String,
        default () {
          return this.$tx('发表', 'xpc.comment.publish')
        }
      },
      // 显示统计字数
      showWordCount: {
        type: Boolean,
        default: false
      },
      // 显示限制字数
      showWordLimit: {
        type: Boolean,
        default: false
      },
      // 限制字数，默认为100
      maxLength: {
        type: Number,
        default: 200
      },
      // 表情iocn标题
      photoTitle: {
        type: String,
        default: ''
      },
      // 图片iocn标题
      smileTitle: {
        type: String,
        default: ''
      },
      // emoji宽度
      emojiWidth: {
        type: String,
        default: '560px'
      },
      // 是否显示评论总数
      showCommentTotal: {
        type: Boolean,
        default: false
      },
      // 是否显示用户头像
      showAvatar: {
        type: Boolean,
        default: true
      },
      // 自定义用户头像
      avatar: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default () {
          return this.$tx('在此输入评论内容...', 'xpc.comment.entercommentshere')
        }
      },
      // 最小行数
      minRows: {
        type: Number,
        default: 4
      },
      // 最大行数
      maxRows: {
        type: Number,
        default: 8
      },
      // 评论总数
      commentNum: {
        type: Number,
        default: 2
      },
      // 用户编号
      authorId: {
        type: Number,
        default: 1
      },
      // 用户标题-弃用
      label: {
        type: String,
        // default: '作者'
        default () {
          return this.$tx('作者', 'xpc.comment.author')
        }
      },
      // 评论列表
      commentList: {
        type: Array,
        default: () => [
          {
            // 当前评论 id
            id: 1,
            // 当前用户包含字段
            commentUser: {
              id: 1, // 当前用户 id
              nickName: '', // 当前用户昵称
              avatar: '' // 当前用户头像
            },
            // 当前评论内容
            content: '',
            // 当前时间
            createDate: '',
            // 子评论列表
            childrenList: [
              {
                // 子评论 id
                id: 2,
                // 子用户包含字段
                commentUser: {
                  id: 2,
                  nickName: '',
                  avatar: ''
                },
                // 被评论用户
                targetUser: {
                  id: 1,
                  nickName: '',
                  avatar: ''
                },
                // 子评论内容
                content: '',
                createDate: ''
              }
            ]
          }
        ]
      },
      // 评论宽度
      commentWidth: {
        type: String,
        default: '80%'
      }
    },
    data () {
      return {
        isDisabledTooltip: false, // 是否需要禁止提示
        replyMap: [],
        buttonMap: [],
        pBodyMap: [],
        textareaMap: [],
        OwOlist: [
          // 表情包和表情路径
          { title: this.$tx('微笑', 'xpc.comment.smile'), url: 'weixiao.gif' },
          { title: this.$tx('嘻嘻', 'xpc.comment.heehee'), url: 'xixi.gif' },
          { title: this.$tx('哈哈', 'xpc.comment.haha'), url: 'haha.gif' },
          { title: this.$tx('可爱', 'xpc.comment.lovely'), url: 'keai.gif' },
          { title: this.$tx('可怜', 'xpc.comment.poor'), url: 'kelian.gif' },
          { title: this.$tx('挖鼻', 'xpc.comment.nosedigging'), url: 'wabi.gif' },
          { title: this.$tx('吃惊', 'xpc.comment.beamazed'), url: 'chijing.gif' },
          { title: this.$tx('害羞', 'xpc.comment.shyness'), url: 'haixiu.gif' },
          { title: this.$tx('挤眼', 'xpc.comment.blinkeyes'), url: 'jiyan.gif' },
          { title: this.$tx('闭嘴', 'xpc.comment.shutup'), url: 'bizui.gif' },
          { title: this.$tx('鄙视', 'xpc.comment.despise'), url: 'bishi.gif' },
          { title: this.$tx('爱你', 'xpc.comment.loveyou'), url: 'aini.gif' },
          { title: this.$tx('泪', 'xpc.comment.tear'), url: 'lei.gif' },
          { title: this.$tx('偷笑', 'xpc.comment.snicker'), url: 'touxiao.gif' },
          { title: this.$tx('亲亲', 'xpc.comment.kiss'), url: 'qinqin.gif' },
          { title: this.$tx('生病', 'xpc.comment.fallill'), url: 'shengbing.gif' },
          { title: this.$tx('太开心', 'xpc.comment.toohappy'), url: 'taikaixin.gif' },
          { title: this.$tx('白眼', 'xpc.comment.superciliouslook'), url: 'baiyan.gif' },
          { title: this.$tx('右哼哼', 'xpc.comment.righthem'), url: 'youhengheng.gif' },
          { title: this.$tx('左哼哼', 'xpc.comment.lefthem'), url: 'zuohengheng.gif' },
          { title: this.$tx('嘘', 'xpc.comment.shh'), url: 'xu.gif' },
          { title: this.$tx('衰', 'xpc.comment.decline'), url: 'shuai.gif' },
          { title: this.$tx('吐', 'xpc.comment.spit'), url: 'tu.gif' },
          { title: this.$tx('哈欠', 'xpc.comment.yawn'), url: 'haqian.gif' },
          { title: this.$tx('抱抱', 'xpc.comment.cuddle'), url: 'baobao.gif' },
          { title: this.$tx('怒', 'xpc.comment.anger'), url: 'nu.gif' },
          { title: this.$tx('疑问', 'xpc.comment.doubt'), url: 'yiwen.gif' },
          { title: this.$tx('馋嘴', 'xpc.comment.greedy'), url: 'chanzui.gif' },
          { title: this.$tx('拜拜', 'xpc.comment.byebye'), url: 'baibai.gif' },
          { title: this.$tx('思考', 'xpc.comment.reflection'), url: 'sikao.gif' },
          { title: this.$tx('汗', 'xpc.comment.sweat'), url: 'han.gif' },
          { title: this.$tx('困', 'xpc.comment.sleepy'), url: 'kun.gif' },
          { title: this.$tx('睡', 'xpc.comment.sleep'), url: 'shui.gif' },
          { title: this.$tx('钱', 'xpc.comment.money'), url: 'qian.gif' },
          { title: this.$tx('失望', 'xpc.comment.disappointment'), url: 'shiwang.gif' },
          { title: this.$tx('酷', 'xpc.comment.cool'), url: 'ku.gif' },
          { title: this.$tx('色', 'xpc.comment.colour'), url: 'se.gif' },
          { title: this.$tx('哼', 'xpc.comment.hum'), url: 'heng.gif' },
          { title: this.$tx('鼓掌', 'xpc.comment.applause'), url: 'guzhang.gif' },
          { title: this.$tx('晕', 'xpc.comment.halo'), url: 'yun.gif' },
          { title: this.$tx('悲伤', 'xpc.comment.sadness'), url: 'beishang.gif' },
          { title: this.$tx('抓狂', 'xpc.comment.madness'), url: 'zhuakuang.gif' },
          { title: this.$tx('黑线', 'xpc.comment.blackline'), url: 'heixian.gif' },
          { title: this.$tx('阴险', 'xpc.comment.insidious'), url: 'yinxian.gif' },
          { title: this.$tx('怒骂', 'xpc.comment.fulminate'), url: 'numa.gif' },
          { title: this.$tx('互粉', 'xpc.comment.becomeother'), url: 'hufen.gif' },
          { title: this.$tx('书呆子', 'xpc.comment.bookworm'), url: 'shudaizi.gif' },
          { title: this.$tx('愤怒', 'xpc.comment.anger'), url: 'fennu.gif' },
          { title: this.$tx('感冒', 'xpc.comment.cold'), url: 'ganmao.gif' },
          { title: this.$tx('心', 'xpc.comment.heart'), url: 'xin.gif' },
          { title: this.$tx('伤心', 'xpc.comment.sad'), url: 'shangxin.gif' },
          { title: this.$tx('猪', 'xpc.comment.pig'), url: 'zhu.gif' },
          { title: this.$tx('熊猫', 'xpc.comment.panda'), url: 'xiongmao.gif' },
          { title: this.$tx('兔子', 'xpc.comment.rabbit'), url: 'tuzi.gif' },
          { title: this.$tx('喔克', 'xpc.comment.wok'), url: 'ok.gif' },
          { title: this.$tx('耶', 'xpc.comment.yeah'), url: 'ye.gif' },
          { title: this.$tx('棒棒', 'xpc.comment.bangbang'), url: 'good.gif' },
          { title: this.$tx('不', 'xpc.comment.no'), url: 'no.gif' },
          { title: this.$tx('赞', 'xpc.comment.fabulous'), url: 'zan.gif' },
          { title: this.$tx('来', 'xpc.comment.come'), url: 'lai.gif' },
          { title: this.$tx('弱', 'xpc.comment.weak'), url: 'ruo.gif' },
          { title: this.$tx('草泥马', 'xpc.comment.grassmudhorse'), url: 'caonima.gif' },
          { title: this.$tx('神马', 'xpc.comment.divinehorse'), url: 'shenma.gif' },
          { title: this.$tx('囧', 'xpc.comment.embarrassed'), url: 'jiong.gif' },
          { title: this.$tx('浮云', 'xpc.comment.floatingclouds'), url: 'fuyun.gif' },
          { title: this.$tx('给力', 'xpc.comment.awesome'), url: 'geili.gif' },
          { title: this.$tx('围观', 'xpc.comment.gatherandwatch'), url: 'weiguan.gif' },
          { title: this.$tx('威武', 'xpc.comment.mighty'), url: 'weiwu.gif' },
          { title: this.$tx('话筒', 'xpc.comment.microphone'), url: 'huatong.gif' },
          { title: this.$tx('蜡烛', 'xpc.comment.candle'), url: 'lazhu.gif' },
          { title: this.$tx('蛋糕', 'xpc.comment.cake'), url: 'dangao.gif' },
          { title: this.$tx('发红包', 'xpc.comment.redenvelopes'), url: 'fahongbao.gif' }
        ]
      };
    },
    methods: {
      // 输入框失焦事件-类型表示在元素失去焦点时响应
      inputBlur () {
        this.$emit('input-blur');
      },
      // 按钮显隐
      showButton (index) {
        this.$set(this.buttonMap, index, true);
      },
      // 取消
      cancel (index) {
        this.$set(this.buttonMap, index, false);
        if (index !== 0) {
          this.$set(this.replyMap, index, false);
        }
      },
      // 发送评论
      sendComments (index, commentUserId, pid) {
        if (pid) {
          this.$emit('comments', this.textareaMap[index], commentUserId, pid);
          this.$set(this.textareaMap, index, '');
        } else {
          this.$emit('comments', this.textareaMap[0]);
          this.$set(this.textareaMap, 0, '');
        }
      },
      // 选择表情包
      choseEmoji: function (index, inner) {
        this.pBodyMap = []; // 选择一个表情就置空
        var con = '';
        if (!this.textareaMap[index]) {
          this.$set(this.textareaMap, index, '');
        }
        con = this.textareaMap[index] += '[' + inner + ']';
        this.$set(this.textareaMap, index, con);
      },
      analyzeEmoji: function (cont) {
        // 编译表情替换成图片展示出来
        var pattern1 = /\[[\u4e00-\u9fa5]+\]/g;
        var pattern2 = /\[[\u4e00-\u9fa5]+\]/;
        var content = cont.match(pattern1);
        var str = cont;
        if (content) {
          for (var i = 0; i < content.length; i++) {
            for (var j = 0; j < this.OwOlist.length; j++) {
              if ('[' + this.OwOlist[j].title + ']' === content[i]) {
                var src = this.OwOlist[j].url;
                break;
              }
            }
            var s = require('./img/face/' + src);
            var imoj = "<img src='" + s + "'/>";

            str = str.replace(pattern2, imoj);
          }
        }
        return str;
      },
      doReply (index) {
        this.$set(this.replyMap, index, true);
      },

      pBodyStatus (index) {
        this.$set(this.pBodyMap, index, !this.pBodyMap[index]);
      }
    }
  };

  // props 属性
  // 名称	类型	说明	默认值
  //avatar	String	头像	空
  //placeholder	String	文本框提示内容	在此输入评论内容...
  //minRows	Number	文本框最小行数	4
  //maxRows	Number	文本框最大行数	8
  //commentNum	Number	评论总条数	2
  //authorId	Number	当前登录用户 id	1
  //label	String	用户名-已废弃改为插槽	作者
  //commentWidth	String	文本框宽度	80%
  //commentList	Array	评论列表	包含内容较多，此处略
  //smileTitle	String	icon 标题	空
  //showCommentTotal	Boolean	是否显示评论总数	false
  //包含字段
  //名称	类型	说明
  //id	Number	评论 id
  //commentUser	Object	评论用户
  //targetUser	Object	被评论用户
  //content	String	评论内容
  //createDate	String	评论时间
  //childrenList	Array	子评论列表
  //用户包含字段
  //名称	类型	说明
  //id	Number	用户 id
  //nickName	String	用户昵称
  //avatar	String	用户头像
  //事件 Events
  //名称	说明	参数
  //input-blur	文本框失去焦点	-
  //comments	初始文本框发送事件	(评论内容,评论用户 id,子评论 id)参数中有 pid 的情况就是子评论，没有 pid 或者为空的情况下就是当前评论
  //Slot 说明
  //Slot 名称	说明
  //label	自定义用户标题插槽
  //labelchildren	自定义子用户标题插槽
  //无
</script>

<style>
  .rt-comment {
    $distance: 8px;
    $aboutmargin: 10px;
    position: relative;
  .rt-comment-user {
    padding-right: 16px;
  .user-img {
    width: 46px;
    height: 46px;
    border: 1px solid $--neutral-color-base;
    border-radius: 50%;
  }
  }
  // 头部
     .header-comment {
       display: flex;
  .rt-xpc-textarea {
    position: relative;
  .el-textarea__inner {
    border: 1px solid $--neutral-color-base;
    padding: 6px 8px 5px;
    color: $--neutral-color-primary;
    border-radius: 2px;
  }
  .el-textarea textarea:focus {
    box-shadow: $--input-focus-box-shadow;
    border: 1px solid $--color-primary-hover;
  }
  }
  .rt-xpc-input-clearicon {
    color: $--color-secondary;
    padding-right: $distance;
  }
  &-operation {
     display: flex;
     flex-direction: column;
     word-wrap: break-word;
  // 内容
     .nav-comment {
       position: relative;
       display: flex;
       justify-content: space-between;
       align-items: center;
       margin-top: 16px;
  &-icontext {
     display: flex;
     align-items: center;
     color: $--neutral-color-regular;
     font-size: $--font-size-base;
  .el-tooltip {
    display: flex;
    align-items: center;
  }
  }
  .comment-button {
    margin-top: 12px;
  }
  .comment-smile-icon {
    color: $--color-info;
    cursor: pointer;
  &:hover {
     color: $--color-primary-hover;
   }
  }
  .comment-smile-text {
    color: $--neutral-color-regular;
    margin-left: 2px;
    cursor: pointer;
  &:hover {
     color: $--color-primary-hover;
   }
  }
  .comment-photo-icon {
    color: $--color-info;
    margin-left: 27px;
  &:hover {
     color: $--color-primary-hover;
   }
  }
  }
  .comment-body {
    position: relative;
    background: #fff;
    border: 1px solid #ddd;
    top: $aboutmargin;
    border-radius: 0 4px 4px 4px;
  .comment-items {
    max-height: 197px;
    overflow: scroll;
    padding: $aboutmargin;
  .comment-item {
    background: #f7f7f7;
    padding: 5px $aboutmargin;
    border-radius: 5px;
    display: inline-block;
    margin: 0 $aboutmargin 12px 0;
    transition: 0.3s;
    line-height: 19px;
    font-size: 20px;
    cursor: pointer;
  &:hover {
     background: #eee;
     box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
     0 3px 1px -2px rgba(0, 0, 0, 0.2),
     0 1px 5px 0 rgba(0, 0, 0, 0.12);
     animation: a 5s infinite ease-in-out;
     -webkit-animation: a 5s infinite ease-in-out;
   }
  }
  }
  }
  }
  .close {
  .comment-items {
    display: none;
  }
  }
  }

  // 评论总数
     .aside-comment {
       display: flex;
       align-items: center;
       margin-top: $aboutmargin;
  &-tips {
     width: 5px;
     height: 23px;
     background: #3cb371;
   }
  &-title {
     font-size: $--font-size-large;
     margin-left: 5px;
   }
  }
  // 评论列表
     .section-comment {
       padding: 5px;
  &-content {
     display: flex;
     margin-top: 12px;
  .section-comment-message {
    display: flex;
    flex-direction: column;
  .nickname {
    display: flex;
    align-items: center;
    font-size: 16px;
  .usereply {
    color: $--neutral-color-regular;
    font-size: $--font-size-base;
  }
  }
  .childreninfo {
    display: flex;
    align-items: center;
    font-size: $--font-size-base;
  a {
    display: block;
    text-decoration: none;
    color: #409eff;
    margin-top: $distance;
  }
  }
  .commentinfo {
    font-size: $--font-size-base;
    color: $--neutral-color-regular;
    margin-top: $distance;
  }
  .commentdate {
    color: $--color-secondary;
    font-size: $--font-size-base;
    margin-top: $distance;
  }
  }
  }
  &-handle {
     display: flex;
     justify-content: flex-end;
     align-items: center;
  .section-comment-reply {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: $--font-size-week;
    color: $--color-secondary;
    margin-left: 17px;
  }
  }
  }
  // 子评论列表
     .children-comment {
       padding-left: 45px;
     }
  }
</style>
