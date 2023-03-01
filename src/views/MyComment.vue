<template>
  <div class="myComment">
    <template>
      <el-table
        :data="tableData"
        style="width: 100%"
        :default-sort="{prop: 'date', order: 'descending'}"
      >

        <el-table-column
          prop="name"
          label="电影"
          size="medium"
          width="380" >
        </el-table-column>
        <el-table-column
          prop="content"
          label="内容"
          width="840">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          sortable
          width="180">
        </el-table-column>
      </el-table>
    </template>

  </div>

</template>

<script>
    export default {
        name: "MyComment",
      nameWidth:340,
      contentWidth:840,

      data() {
        return {
          curOffset: 5,
          tableData: [{
            date: '2016-05-02',
            name: 'THE LAST OF US Ⅱ',
            content: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: 'THE LAST OF US Ⅱ',
            content: '上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: 'THE LAST OF US Ⅱ',
            content: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: 'THE LAST OF US Ⅱ',
            content: '上海市普陀区金沙江路 1516 弄'
          }],
        }
      },
      mounted() {
        this.$nextTick(() => {
          if (window.innerWidth < 900) {
            this.curOffset = 0;

          }
        })
      },

      methods: {
        formatter(row, column) {
          return row.address;
        },
      },


    }
</script>

<style scoped>

</style>
