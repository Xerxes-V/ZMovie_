<template>
  <div class="comment">
    <h3>评论</h3>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        <span>{{ comment.author }}：</span>{{ comment.text }}
        <button v-if="!comment.showReplyForm" @click="showReplyForm(comment)">回复</button>
        <form v-if="comment.showReplyForm" @submit.prevent="addReply(comment)">
          <input type="text" v-model="newReply.text" placeholder="请输入回复内容" required>
          <input type="text" v-model="newReply.author" placeholder="请输入您的名字" required>
          <button type="submit">提交回复</button>
        </form>
        <ul>
          <li v-for="reply in comment.replies" :key="reply.id">
            <span>{{ reply.author }} 回复 {{ comment.author }}：</span>{{ reply.text }}
          </li>
        </ul>
      </li>
    </ul>
    <form @submit.prevent="addComment">
      <input type="text" v-model="newComment.text" placeholder="请输入评论内容" required>
      <input type="text" v-model="newComment.author" placeholder="请输入您的名字" required>
      <button type="submit">提交评论</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        comments: [
          {
            id: 1,
            author: '张三',
            text: '这是第一条评论',
            replies: [],
            showReplyForm: false
          },
          {
            id: 2,
            author: '李四',
            text: '这是第二条评论',
            replies: [],
            showReplyForm: false
          }
        ],
        newComment: {
          text: '',
          author: ''
        },
        newReply: {
          text: '',
          author: ''
        }
      }
    },
    computed: {   //无限滚动
      noMore() {
        return this.currentScrollCount >= 3000
      },
      disabled() {
        return this.loading || this.noMore
      }
    },

    methods: {
      addComment() {
        const comment = {
          id: Date.now(),
          author: this.newComment.author,
          text: this.newComment.text,
          replies: [],
          showReplyForm: false
        }
        this.comments.push(comment)
        this.newComment = { text: '', author: '' }
      },
      showReplyForm(comment) {
        comment.showReplyForm = true
      },
      addReply(comment) {
        const reply = {
          id: Date.now(),
          author: this.newReply.author,
          text: this.newReply.text
        }
        comment.replies.push(reply)
        comment.showReplyForm = false
        this.newReply = { text: '', author: '' }
      }
    }
  }
</script>
