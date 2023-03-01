<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px" >
      <el-form-item label="电影名称">
        <el-input v-model="form.name" style="width: 700px"></el-input>
      </el-form-item>


      <el-row>
        <el-col :span="11" >
          <el-form-item label="导演">
            <el-input v-model="form.name" style="width: 500px"></el-input>
          </el-form-item>
          <el-form-item label="制片人">
            <el-input v-model="form.name" style="width: 500px"></el-input>
          </el-form-item>
          <el-form-item label="出品公司">
            <el-input v-model="form.name" style="width: 500px"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="11">
          <el-form-item label="海报">
            <el-upload
              action="#"
              list-type="picture-card"
              :auto-upload="false">
              <i slot="default" class="el-icon-plus"></i>
              <div slot="file" slot-scope="{file}">
                <img
                  class="el-upload-list__item-thumbnail"
                  :src="file.url" alt=""
                >
                <span class="el-upload-list__item-actions">
        <span
          class="el-upload-list__item-preview"
          @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleDownload(file)"
        >
          <i class="el-icon-download"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
              </div>
            </el-upload>
          </el-form-item>
        </el-col>
      </el-row>




      <el-form-item label="主演">
        <el-tag
          :key="tag"
          v-for="tag in dynamicTags"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)">
          {{tag}}
        </el-tag>
        <el-input
          class="input-new-tag"
          v-if="inputVisible"
          v-model="inputValue"
          ref="saveTagInput"
          size="small"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
        >
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 添加主演信息</el-button>
      </el-form-item>

      <el-form-item label="类型">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="动作" value="shanghai"></el-option>
          <el-option label="爱情" value="beijing"></el-option>
          <el-option label="恐怖" value="beijing"></el-option>
          <el-option label="科技" value="beijing"></el-option>
          <el-option label="战争" value="beijing"></el-option>
          <el-option label="其他" value="beijing"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="地区">
        <el-input v-model="form.name" style="width: 500px"></el-input>
      </el-form-item>

      <el-form-item label="上映日期">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="语言">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="汉语" name="type"></el-checkbox>
          <el-checkbox label="粤语" name="type"></el-checkbox>
          <el-checkbox label="英语" name="type"></el-checkbox>
          <el-checkbox label="日语" name="type"></el-checkbox>
          <el-checkbox label="韩语" name="type"></el-checkbox>
          <el-checkbox label="法语" name="type"></el-checkbox>
          <el-checkbox label="俄语" name="type"></el-checkbox>
          <el-checkbox label="西班牙语" name="type"></el-checkbox>
          <el-checkbox label="阿拉伯语" name="type"></el-checkbox>
          <el-checkbox label="其他" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="影评简介:">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即上传</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>


    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "addMovie",
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false,

        dynamicTags: [],
        inputVisible: false,
        inputValue: '',


        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleRemove(file) {
        console.log(file);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      },

      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  }
</script>

<style scoped>
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
