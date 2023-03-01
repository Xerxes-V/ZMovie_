<template>
  <div>

    <div :class="[status > 2 ? 'a' : 'b']" id="a"></div>
    <button @click="cli"></button>
  </div>
</template>

<script>
  var a = document.querySelector("#a");
  export default {
    name: "Collection",
    data(){
      return{
      status:11
      }
    },
    methods: {
      cli: function () {
        console.log('click')
        a.classList.remove('a');
      }
    }
  }
</script>

<style scoped>
  .a {
    background-color: #475669;
    height: 100px;
    width: 100px;
  }

  .b {
    background-color: #95f;
    height: 100px;
    width: 100px;
  }

</style>
