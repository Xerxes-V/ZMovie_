<template>
 <div>
   <!--            最热:-->
   <el-row type="flex" align="middle">
     <!--            字-->
     <el-col :xs="6" :sm="6" :md="4" :lg="3" :xl="14" :offset="5" class=" hidden-sm-and-down">
       <div class="HottestGuideText">
         <el-link icon="el-icon-s-data" type="primary" class="HottestGuideText">最热 ></el-link>
       </div>
     </el-col>
     <!--            字-移动端-->
     <el-col :xs="6" :sm="6" :md="4" :lg="3" :xl="14" :offset="ham" class=" hidden-sm-and-up"  >
       <div  >
         <el-link icon="el-icon-s-data" type="primary" style="height: 50px">最热 ></el-link>
       </div>
     </el-col>
   </el-row>

   <el-row type="flex" align="middle" style="height: 300px">
     <!--              最热电影列表:-->
     <el-col :xs="24" :sm="6" :md="4" :lg="3" :xl="14" :offset="ham" class="  ">
       <el-row type="flex" align="middle">
         <!--              最热电影列表:-->
         <el-col :xs="7" :sm="6" :md="4" :lg="3" :xl="3" :offset="0" class="  ">
           <div >
             <!--                  <p>-->
             <!--                    <label style="margin-right: 16px;">切换 Loading</label>-->
             <!--                    <el-switch v-model="hotLoading"/>-->
             <!--                  </p>-->
             <el-skeleton :loading="hotLoading" class="outside" animated>
               <template slot="template">
                 <el-skeleton-item
                   variant="image"
                   class="ImgSize"
                 />
                 <div style="padding: 14px;">
                   <el-skeleton-item variant="h3" style="width: 50%;"/>
                   <div
                     style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;"
                   >
                     <el-skeleton-item variant="text" style="margin-right: 16px;"/>
                     <el-skeleton-item variant="text" style="width: 30%;"/>
                   </div>
                 </div>
               </template>
               <template>
                 <el-card :body-style="{ padding: '0px', marginBottom: '1px' }" style="background-color: #E0EEEE">
                   <img
                     src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                     class="image ImgSize"
                   />
                   <!--                      style="height: 175px ; width: 135px"-->
                   <div>汉堡</div>
                   <!--                        <div style="padding: 14px;">-->
                   <!--                          <div class="bottom card-header">-->
                   <!--                            <span class="time">{{ currentDate }}</span>-->
                   <!--                            <el-button type="text" class="button">操作按钮</el-button>-->
                   <!--                          </div>-->
                   <!--                        </div>-->
                 </el-card>
               </template>
             </el-skeleton>
           </div>
         </el-col>
         <el-col :xs="7" :sm="6" :md="4" :lg="3" :xl="3" :offset="1" class="  ">
           <div >
             <!--                  <p>-->
             <!--                    <label style="margin-right: 16px;">切换 Loading</label>-->
             <!--                    <el-switch v-model="hotLoading"/>-->
             <!--                  </p>-->
             <el-skeleton :loading="hotLoading" class="outside" animated>
               <template slot="template">
                 <el-skeleton-item
                   variant="image"
                   class="ImgSize"
                 />
                 <div style="padding: 14px;">
                   <el-skeleton-item variant="h3" style="width: 50%;"/>
                   <div
                     style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;"
                   >
                     <el-skeleton-item variant="text" style="margin-right: 16px;"/>
                     <el-skeleton-item variant="text" style="width: 30%;"/>
                   </div>
                 </div>
               </template>
               <template>
                 <el-card :body-style="{ padding: '0px', marginBottom: '1px' }" style="background-color: #E0EEEE">
                   <img
                     src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                     class="image ImgSize"
                   />
                   <!--                      style="height: 175px ; width: 135px"-->
                   <div>汉堡</div>
                   <!--                        <div style="padding: 14px;">-->
                   <!--                          <div class="bottom card-header">-->
                   <!--                            <span class="time">{{ currentDate }}</span>-->
                   <!--                            <el-button type="text" class="button">操作按钮</el-button>-->
                   <!--                          </div>-->
                   <!--                        </div>-->
                 </el-card>
               </template>
             </el-skeleton>
           </div>
         </el-col>
         <el-col :xs="7" :sm="6" :md="4" :lg="3" :xl="3" :offset="1" class="  ">
           <div >
             <!--                  <p>-->
             <!--                    <label style="margin-right: 16px;">切换 Loading</label>-->
             <!--                    <el-switch v-model="hotLoading"/>-->
             <!--                  </p>-->
             <el-skeleton :loading="hotLoading" class="outside" animated>
               <template slot="template">
                 <el-skeleton-item
                   variant="image"
                   class="ImgSize"
                 />
                 <div style="padding: 14px;">
                   <el-skeleton-item variant="h3" style="width: 50%;"/>
                   <div
                     style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;"
                   >
                     <el-skeleton-item variant="text" style="margin-right: 16px;"/>
                     <el-skeleton-item variant="text" style="width: 30%;"/>
                   </div>
                 </div>
               </template>
               <template>
                 <el-card :body-style="{ padding: '0px', marginBottom: '1px' }" style="background-color: #E0EEEE">
                   <img
                     src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                     class="image ImgSize"
                   />
                   <!--                      style="height: 175px ; width: 135px"-->
                   <div>汉堡</div>
                   <!--                        <div style="padding: 14px;">-->
                   <!--                          <div class="bottom card-header">-->
                   <!--                            <span class="time">{{ currentDate }}</span>-->
                   <!--                            <el-button type="text" class="button">操作按钮</el-button>-->
                   <!--                          </div>-->
                   <!--                        </div>-->
                 </el-card>
               </template>
             </el-skeleton>
           </div>
         </el-col>


         <el-col :xs="6" :sm="6" :md="4" :lg="3" :xl="1" :offset="1" class="  ">
           <div class="HottestGuideMore">
             <el-link icon="el-icon-more-outline"  :underline="false" style="font-size: 75px "></el-link>
           </div>
         </el-col>
       </el-row>
     </el-col>



   </el-row>

 </div>
</template>

<script>
    export default {
        name: "HottestPC",
      data(){
          return{
            //电影是否加载中
            hotLoading: false,
            currentDate: '2021-06-01',
            ham:6
          }
      },
      mounted() {
        console.log(window.innerWidth)
        this.$nextTick(()=>{
          if(window.innerWidth < 900){
              this.ham=0;

          }
        })
      },
      methods:{

      }
    }
</script>

<style scoped>
  /*最热:*/
  .HottestGuideText {
    font-size: 25px;
    text-align: left;
  }


  @media screen and (max-width: 1440px) {
    .outside {
      width: 119px;
    }
    .ImgSize {
      width: 119px;
      height: 148px;
    }
  }

  /*!* 屏幕等于1440px *!*/
  /*@media screen and (max-width: 1440px) and (min-width: 1440px) {*/
  /*  .add {*/
  /*    width: 348px;*/
  /*  }*/
  /*}*/

  /* 屏幕大于1440px */
  @media screen and (min-width:1441px) {
    .outside {
      width: 135px;
    }
    .ImgSize {
      height: 175px ;
      width: 135px;
    }
  }

</style>
