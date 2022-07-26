<!-- 
  * @author Gjf
  * @date 2021-08-17
  * @description XXXX背景资料
-->

<template>
  <aside class="wars-background">
    <!-- 操作栏 -->
<!--    <ul class="operate flex">-->
<!--      &lt;!&ndash; select &ndash;&gt;-->
<!--      <li class="select-box">-->
<!--        <span class="label">类型：</span>-->
<!--        <el-select-->
<!--          v-model="select"-->
<!--          size="small"-->
<!--          placeholder="请选择背景资料类型"-->
<!--          @change="changeSelect"-->
<!--          clearable-->
<!--        >-->
<!--          <el-option-->
<!--            v-for="(item, i) in selectList"-->
<!--            :key="i"-->
<!--            :label="item.name"-->
<!--            :value="item.id"-->
<!--          ></el-option>-->
<!--        </el-select>-->
<!--      </li>-->

<!--      &lt;!&ndash; btn &ndash;&gt;-->
<!--      <btn name="添加背景资料" @click="openDialog" v-if="isAdmin">-->
<!--        <template slot="icon">-->
<!--          <img :src="addIcon" />-->
<!--        </template>-->
<!--      </btn>-->
<!--    </ul>-->

    <!-- table -->
    <el-table :data="tableData" border class="com-table">
      <el-table-column
        type="index"
        class-name="number"
        align="center"
        width="100"
        label="序号"
      ></el-table-column>
      <el-table-column
        prop="dataName"
        align="center"
        label="名称"
      ></el-table-column>
      <el-table-column
        prop="materialTypeName"
        align="center"
        label="登录网址"
      ></el-table-column>
      <el-table-column
        prop="fileName"
        align="center"
        label="用户信息网址"
      ></el-table-column>
      <el-table-column
        prop="dataType"
        align="center"
        label="抓取规则"
      ></el-table-column>
      <el-table-column
        align="center"
        class-name="btn-box"
        width="250"
        label="操作"
      >
        <template slot-scope="scope">
          <img
            class="btn-item"
            :src="editIcon"
            title="编辑"
            @click="onEdit(scope.row)"
            v-if="isAdmin"
          />
          <img
            class="btn-item"
            :src="deleteIcon"
            title="删除"
            @click="onDelete(scope.row)"
            v-if="isAdmin"
          />
        </template>
      </el-table-column>
    </el-table>
  </aside>
</template>

<script>
import btn from "@/components/layout/btn";
import dialogBtn from "@/components/layout/dialog-btn";
import api from "@/request/modules/wars-manage";
import { uploadFile, downFile } from "@/request";
import { mapGetters } from "vuex";

export default {
  name: "wars-background",

  data() {
    return {

      addIcon: require("@/assets/images/layout/add.png"),
      editIcon: require("@/assets/images/wars-manage/edit.png"),
      downloadIcon: require("@/assets/images/wars-manage/download.png"),
      deleteIcon: require("@/assets/images/wars-manage/delete.png"),

      tableData: [],
      total: 0,
      pageNum: 1,

      currentRow: {},
    };
  },

  computed: {
  },

  components: { btn, dialogBtn },

  created() {
  },

  methods: {
    /**
     * @function 获取下拉框列表
     */
    getSelectList() {
      api.getSelectList({ menuId: 2 }).then((res) => {
        this.selectList = res.data;
      });
    },

    /**
     * @function 获取表格数据
     */
    getTableData() {
      this.tableData = [{
      }]
    },

    /**
     * @function 变更下拉框选择
     */
    changeSelect() {
      this.pageNum = 1;
      this.getTableData();
    },

    /**
     * @function 打开弹窗
     */
    openDialog() {
      this.dialogVisible = true;
      for (const key in this.dialogForm) {
        this.dialogForm[key] = "";
      }
      this.$nextTick(() => {
        this.$refs["dialog-form"].clearValidate();
      });
    },

    /**
     * @function 编辑文件
     * @param {Object} row 操作列
     */
    onEdit(row) {
      this.currentRow = row;
      this.dialogVisible = true;

      for (const key in this.dialogForm) {
        this.dialogForm[key] = row[key] || "";
      }
      this.$nextTick(() => {
        this.$refs["dialog-form"].clearValidate();
      });
    },

    /**
     * @function 删除文件
     * @param {Object} row 操作列
     */
    onDelete(row) {
      this.$confirm("此操作将永久删除该文件，是否继续？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          api.deleteData({ id: row.id }).then((res) => {
            this.$message.success("文件删除成功");
            if (this.total > 1 && this.tableData.length === 1) {
              this.pageNum--;
            }
            this.getTableData();
          });
        })
        .catch(() => {});
    },

    /**
     * @function 下载文件
     * @param {Object} row 操作列
     */
    onDownload(row) {
      let flie = { ...row };
      if (flie.dataType) {
        flie.fileName = row.fileName + "." + row.dataType;
      }
      downFile(flie);
    },

    /**
     * @function 上传文件
     */
    async onUploadFile() {
      await uploadFile()
        .then((res) => {
          this.setFileInfo(res || {});
        })
        .catch((err) => {
          this.$message.error(err.msg);
        });
    },

    /**
     * @function 设置文件信息
     * @param {Onject} val 文件信息
     */
    setFileInfo(val) {
      const { data = {} } = val;

      this.dialogForm.url = data.url;
      this.dialogForm.fileName = data.fileName;
      this.dialogForm.dataName = this.dialogForm.dataName || data.fileName;
    },

    /**
     * @function 保存添加文件
     */
    onSave() {
      this.$refs["dialog-form"].validate((valid) => {
        if (!valid) {
          return false;
        }

        api.saveData(this.dialogForm).then((res) => {
          if (res.code == 1) {
            this.$message.warning(res.msg);
          } else {
            this.$message.success("添加背景资料成功");
            this.getTableData();
          }
          this.dialogVisible = false;
        });
      });
    },

    /**
     * @function 翻页
     * @param {Number} v 页码
     */
    changePageNum(v) {
      this.pageNum = v;
      this.getTableData();
    },
  },
};
</script>

<style lang="scss" scoped>
.wars-background {
  min-width: 1080px;
  margin: 0 auto;

  /* operate */
  .operate {
    justify-content: space-between;
    margin: 20px 0;
  }

  /* table */
  .com-table /deep/ {
    .btn-box {
      .btn-item {
        cursor: pointer;

        &:not(:last-child) {
          margin-right: 20px;
        }
      }
    }
  }

  /* com-pagination */
  .com-pagination {
    margin-top: 20px;
  }

  /* dialog */
  .com-dialog {
    .dialog-form {
      margin-top: 40px;

      .upload-btn {
        margin-left: 20px;
        padding: 0 10px;
      }
    }
  }
}
</style>