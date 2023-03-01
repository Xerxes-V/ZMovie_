<template>
  <!--        影评部分:-->
  <div>
    <el-card :body-style="{ padding: '0px', marginBottom: '1px' }"
             style="background-color: #E0EEEE" id="movieComment_card">
      <img
        src="http://royx9j1g6.hn-bkt.clouddn.com/the%20last%20of%20us%20.jpg?e=1674528128&token=8QjUa_hRBAeppRLGZfianHZlbZ1Uxt_KxRD4_7bv:teHt0bNEXIqELFsthpbqtxS_xX0="
        class="movieComment_img"
      />
      <span class="movieComment_movieName">The Last of us  </span>

      <span class="movieComment_content"> 影评影评影评影评影评影评影评影评影评影评影评影评影评影评影评影评影评影评影评影评影评影评影评影评
            影评影评影评影评影评影评影评影评影评影评影评影评影评影评影评影评影评影评影评影评影评影评影评影评</span>

      <span class="movieComment_year">2023</span>
      <span class="movieComment_date">年1月30日</span>

    </el-card>
  </div>

</template>

<script>
    export default {
        name: "MovieComment"
    }
</script>

<style scoped>

  .MovieComment {
    width: 100%;
    height: 200px;
    background: #409eff;
  }

  .movieComment_img {
    width: 81px;
    height: 105px;
  }

  #movieComment_card {
    position: relative;
  }

  .movieComment_movieName {
    font-size: 20px;
    font-weight: bolder;
    position: absolute;
    top: 4px;
    left: 120px;
  }

  .movieComment_content {
    width: 70%;
    position: absolute;
    top: 50px;
    left: 120px;
  }

  .movieComment_year {
    font-size: 25px;
    color: red;
    position: absolute;
    top: 3px;
    right: 100px;
  }

  .movieComment_date {
    font-weight: 100;
    position: absolute;
    top: 13px;
    right: 20px;
  }

  @media screen and (max-width: 1440px) {

    /*影评:*/
    .movieComment_img {
      width: 49px;
      height:63px;
    }

    .movieComment_movieName {
      font-size: 15px;
      top: 4px;
      left: 60px;
    }

    .movieComment_content {
      font-size: 5px;
      top: 24px;
      left: 60px;
    }

    .movieComment_year {
      font-size: 15px;
      position: absolute;
      top: 3px;
      right: 60px;
    }

    .movieComment_date {
      font-size: 1px;
      position: absolute;
      top: 7px;
      right: 2px;
    }
  }
</style>
