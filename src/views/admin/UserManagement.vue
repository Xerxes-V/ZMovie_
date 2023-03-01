<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      stripe
      tooltip-effect="dark"
      style="width: 100%;font-size: 18px"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        label="用户ID"
        width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="近期不良记录"
        width="120">
      </el-table-column>
      <el-table-column
        prop="director"
        label="总不良记录"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="actor"
        label="封禁次数"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="date"
        label="注册时间"
        show-overflow-tooltip>
      </el-table-column>
      </el-table-column>
      <el-table-column
        align="right">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"/>
        </template>
      </el-table-column>

      <el-table-column label="">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div style="margin-top: 20px">
      <el-button @click="setCurrent()">取消选择</el-button>
      <el-button @click="setCurrent(tableData[1])">删除</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "userManagement",
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          director:'顽皮狗',
          actor:'路人甲',
          area:'美国',
          date:'2020'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          director:'顽皮狗',
          actor:'路人甲',
          area:'美国',
          date:'2020'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          director:'顽皮狗',
          actor:'路人甲',
          area:'美国',
          date:'2020'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          director:'顽皮狗',
          actor:'路人甲',
          area:'美国',
          date:'2020'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          director:'顽皮狗',
          actor:'路人甲',
          area:'美国',
          date:'2020'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          director:'顽皮狗',
          actor:'路人甲',
          area:'美国',
          date:'2020'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          director:'顽皮狗',
          actor:'路人甲',
          area:'美国',
          date:'2020'
        }],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>

<style scoped>

</style>
