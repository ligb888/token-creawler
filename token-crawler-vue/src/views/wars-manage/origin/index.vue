<!-- 
  * @author Gjf
  * @date 2021-08-17
  * @description XX原始文献
-->

<template>
  <aside class="wars-origin">
    <!-- table -->
    <el-table :data="tableData" border class="com-table">
      <el-table-column
        type="index"
        class-name="number"
        align="center"
        width="80"
        label="序号"
      ></el-table-column>
      <el-table-column
          prop="account_id"
          align="center"
          label="账号ID"
      ></el-table-column>
      <el-table-column
        prop="platform"
        align="center"
        label="平台名称"
      ></el-table-column>
      <el-table-column
        prop="account"
        align="center"
        label="平台账号"
      ></el-table-column>
<!--      <el-table-column-->
<!--        prop="nickname"-->
<!--        align="center"-->
<!--        label="账号昵称"-->
<!--      ></el-table-column>-->
      <el-table-column
        prop="state"
        align="center"
        width="120"
        label="账号状态"
      >
        <template slot-scope="scope">
          <el-tag v-if="scope.row.state === 1" type="success">可用</el-tag>
          <el-tag v-else-if="scope.row.state === 0" type="danger">不可用</el-tag>
        </template>
      </el-table-column>
<!--      <el-table-column-->
<!--        prop="loginInfo"-->
<!--        align="center"-->
<!--        width="150"-->
<!--        label="登录信息"-->
<!--      ></el-table-column>-->
<!--      <el-table-column-->
<!--        prop="createTime"-->
<!--        align="center"-->
<!--        label="创建时间"-->
<!--      ></el-table-column>-->
<!--      <el-table-column-->
<!--        prop="lastLoginTime"-->
<!--        align="center"-->
<!--        label="最后登录时间"-->
<!--      ></el-table-column>-->
      <el-table-column
        align="center"
        class-name="btn-box"
        width="200"
        label="操作"
      >
        <template slot-scope="scope">
          <el-button type="primary" @click="openView(scope.row)">查看</el-button>
          <el-button type="primary" @click="openLogin(scope.row)">上报信息</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- view dialog -->
    <el-dialog
        title="查看"
        class="com-dialog"
        :visible.sync="viewVisible"
    >
      <el-form
          ref="dialog-form"
          size="small"
          class="dialog-form"
          label-width="100px"
      >
        <el-form-item label="cookies" prop="materialTypeId">
          <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="getCookies">
          </el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
  </aside>
</template>

<script>
import btn from "@/components/layout/btn";
import dialogBtn from "@/components/layout/dialog-btn";
import {setToken} from "@/utils/auth";

export default {
  name: "wars-origin",

  data() {
    return {
      select: "",
      selectList: [],

      tableData: [],
      total: 0,
      pageNum: 1,

      currentRow: {},
      viewVisible: false,
    };
  },

  computed: {
    getCookies: function(){
      if(this.currentRow.cookies){
        return JSON.stringify(this.currentRow.cookies)
      }
      return ""
    }
  },

  components: { btn, dialogBtn },

  created() {
    this.getTableData();
  },

  methods: {
    openLogin(row){
      ipcRenderer.invoke('openLogin', {loginUrl: row.config.loginUrl, domain: row.config.domain}).then((cookies) => {
        this.setCookies(row, cookies)
      })
    },

    openView(row){
      this.currentRow = row
      this.viewVisible = true
    },

    getTableData(){
      let platformInfo = electronStore.get("platformInfo")

      this.$post({
        url: "/zhuolixin/media/get_account",
        params: {},
        succ: (res) => {
          for(let item of res.data){
            for(let settingsKey in platformInfo){
              let settings = platformInfo[settingsKey]
              if(item.platform === settings.platformName){
                item["config"] = settings
              }
            }
          }
          this.tableData = res.data
        },
      });
    },

    setCookies(row, cookies){
      if(!cookies || cookies.length === 0){
        return
      }
      row.cookies = cookies
      this.$post({
        url: "/zhuolixin/media/save_cookie",
        params: {account_id: row.account_id, cookie: JSON.stringify(row.cookies)},
        succ: (res) => {
          this.$message.success("上报成功")
        },
      });
      this.$post({
        url: "/zhuolixin/media/update_state",
        params: {account_id: row.account_id, state: 1},
        succ: (res) => {
          this.$message.success("更新状态成功")
          this.getTableData()
        },
      });

      // 取出用户登录信息
      // let userData = {}
      // try {
      //   for (let item of cookies) {
      //     if (item.name === 'user_data') {
      //       userData = JSON.parse(decodeURIComponent(item.value))
      //       break
      //     }
      //   }
      // }catch (e) {}
      //
      // // 判断登录状态
      // if(userData == null || !userData.screen_name || !userData.mobile || !userData.user_id){
      //   return
      // }

      // 页面数据更新
      // row.cookies = cookies
      // row.username = userData.mobile
      // row.nickname = userData.screen_name
      // row.status = "已登录"
      // row.loginInfo = "已授权"
      // if(!row.createTime || row.createTime === "-"){
      //   row.createTime = this.$dataFormat(new Date().getTime())
      // }
      // row.lastLoginTime = this.$dataFormat(new Date().getTime())

      // 本地存储更新
      // let key = "platformInfo.platform" + row.platformId
      // // 本地存储更新
      // electronStore.set(key + ".cookies", cookies)
      // electronStore.set(key + ".username", row.username ? row.username : "-")
      // electronStore.set(key + ".nickname", row.nickname ? row.nickname : "-")
      // electronStore.set(key + ".status", row.status ? row.status : "-")
      // electronStore.set(key + ".loginInfo", row.loginInfo ? row.loginInfo : "-")
      // electronStore.set(key + ".createTime", row.createTime ? row.createTime : "-")
      // electronStore.set(key + ".lastLoginTime", row.lastLoginTime ? row.lastLoginTime : "-")
    },
  },
};
</script>

<style lang="scss" scoped>
.wars-origin {
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