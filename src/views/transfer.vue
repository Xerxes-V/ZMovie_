<template>
<div>
<!--  <button @click="transfer"> 传输 </button>-->
  <router-link to="/hotpc"> </router-link>

  <router-view></router-view>

  <button @click="transfer"></button>
  <div>dsada</div>
</div>
</template>

<script>
    export default {
        name: "test",
        methods:{
          transfer:function(){
            this.axios.get("http://localhost:8081/movie/test").then(
              function(response){
                console.log(response);
              }
            )

          }
        }
    }
</script>

<style scoped>

</style>
