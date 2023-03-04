<template>
  <div>
    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible" >

      <el-upload
        action="https://localhost:9202/file/addFile"
        list-type="picture-card"
        :on-remove="handleRemove"
        :on-success="handlePicSuccess"
        ref="pictureUpload"
        limit=1
        :auto-upload="false">
        <i slot="default" class="el-icon-plus " ></i>
        <div slot="file" slot-scope="{file}"  >
          <img
            class="el-upload-list__item-thumbnail"
            :src="file.url" alt=""
          >
          <!--          遮罩层-->
          <span class="el-upload-list__item-actions"  >
<!--            预览-->
        <span
          class="el-upload-list__item-preview"
          @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
            <!--            删除-->
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
      <el-dialog :visible.sync="imgDialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
     </span>
    </el-dialog>

<!--    :http-request="uploadFile"-->
    <div >
      <el-upload

        action="http://localhost:8081/user/changeAvatar"
        :file-list="fileList"
        list-type="picture-card"
        :on-remove="handleRemove"
        ref="pictureUpload"
        :auto-upload="false">
        <i slot="default" class="el-icon-plus " ></i>
        <div slot="file" slot-scope="{file}"  >
          <img
            class="el-upload-list__item-thumbnail"
            :src="file.url" alt=""
          >
<!--          遮罩层-->
          <span class="el-upload-list__item-actions"  >
<!--            预览-->
        <span
          class="el-upload-list__item-preview"
          @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
<!--            删除-->
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
      <el-dialog :visible.sync="imgDialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>

      <el-button type="primary"
                 @click="submitUpload">保存</el-button>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Demo2",
    data() {
      return {
        dialogVisible: false,
        dialogImageUrl: '',
        imgDialogVisible: false,
        disabled: false,

        fileList:[],
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      handleRemove(file) {
        let uploadFiles = this.$refs.pictureUpload.uploadFiles

        alert(uploadFiles[0].url)
        console.log(uploadFiles[0])
        for (var i = 0; i < uploadFiles.length; i++) {
          if (uploadFiles[i]['url'] == file.url) {
            uploadFiles.splice(i, 1)
          }
        }
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.imgDialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      },
      submitUpload() {
        this.$refs.pictureUpload.submit()
      },

      handlePicSuccess(response){
        // if(response.status==200){
        //   console.log(response.filepath )
        const file = blob.blob();
        // }
      },uploadFile (file) {
        this.formData.append("file", file.file);
        // console.log(file.file, "sb2");
      },

      onSubmit () {
        let formData = new FormData();
        formData.append("file", this.fileList[0].raw);//拿到存在fileList的文件存放到formData中
        //下面数据是我自己设置的数据,可自行添加数据到formData(使用键值对方式存储)
        formData.append("title", this.title);
      }
        //
    }
  }
</script>

<style scoped>
  .infinite-list {
    height: 300px;
  }

  /deep/ .el-upload-list--picture-card .el-upload-list__item {
    border-radius: 50%;
  }

  /deep/ .el-upload--picture-card {
    border-radius: 50%;
  }
</style>

