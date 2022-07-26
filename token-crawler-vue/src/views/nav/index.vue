<!-- 
  * @author Gjf
  * @date 2021-08-16
  * @description 系统导航页
-->

<template>
  <aside class="home_nav">
    <!-- title -->
    <nav-bar></nav-bar>

    <!-- menu -->
    <div class="content flex main-bg">
      <ul :class="['menu-box flex', { 'user-menu': !isAdmin }]">
        <li
          class="menu-item t-c"
          v-for="(item, i) in menuList"
          :key="i"
          @mouseenter="onEnter(i)"
          @mouseleave="onOut(i)"
          @click="onJump(item)"
        >
          <div class="item flex">
            <img
              class="icon"
              :src="active == i ? item.iconSelect : item.icon"
            />
            <p class="text">{{ item.name }}</p>
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import { mapGetters } from "vuex";
import navBar from "@/components/nav-bar";
import btn from "@/components/layout/btn";
import { uploadFile, downFile } from "@/request";
import api from "@/request/modules/wars-manage";
import dialogBtn from "@/components/layout/dialog-btn";

export default {
  name: "navPage",

  components: { navBar, btn, dialogBtn },

  data() {
    return {
      active: -1,
      fileName: "",
      linkUrl: "",
      adminMenuList: [
        {
          name: "XXXX",
          path: "/document",
          icon: require("@/assets/images/nav/1.png"),
          iconSelect: require("@/assets/images/nav/1_select.png"),
          roles: ["teacher"],
        },
        {
          name: "XXXX",
          path: "/wars-design",
          icon: require("@/assets/images/nav/2.png"),
          iconSelect: require("@/assets/images/nav/2_select.png"),
          roles: ["teacher"],
        },
        {
          name: "XXXX",
          path: "/choose-analysis",
          icon: require("@/assets/images/nav/3.png"),
          iconSelect: require("@/assets/images/nav/3_select.png"),
          roles: ["teacher"],
        },
        {
          name: "XXXX",
          path: "/choose-dissect",
          icon: require("@/assets/images/nav/4.png"),
          iconSelect: require("@/assets/images/nav/4_select.png"),
          roles: ["teacher"],
        },
        {
          name: "XXXX",
          path: "/assess-nav",
          icon: require("@/assets/images/nav/5.png"),
          iconSelect: require("@/assets/images/nav/5_select.png"),
          roles: ["teacher", "student"],
        },
        {
          name: "XXXX",
          path: "/train",
          icon: require("@/assets/images/nav/6.png"),
          iconSelect: require("@/assets/images/nav/6_select.png"),
          roles: ["teacher", "student"],
        },
      ],

      userMenuList: [
        {
          name: "XXXX",
          path: "/document",
          icon: require("@/assets/images/nav/1.png"),
          iconSelect: require("@/assets/images/nav/1_select.png"),
          roles: ["teacher"],
        },
        {
          name: "XXXX",
          path: "/choose-analysis",
          icon: require("@/assets/images/nav/3.png"),
          iconSelect: require("@/assets/images/nav/3_select.png"),
          roles: ["teacher"],
        },
        {
          name: "XXXX",
          path: "/choose-dissect",
          icon: require("@/assets/images/nav/4.png"),
          iconSelect: require("@/assets/images/nav/4_select.png"),
          roles: ["teacher"],
        },
        {
          name: "XXXX",
          path: "/assess-task",
          icon: require("@/assets/images/nav/5.png"),
          iconSelect: require("@/assets/images/nav/5_select.png"),
          roles: ["teacher", "student"],
        },
      ],
      dialogForm: {
        url: "",
        fileName: "",
        dataName: "",
      },
      dialogRules: {
        fileName: [
          { required: true, message: "请上传原始文献文件", trigger: "change" },
        ],
        dataName: [
          { required: true, message: "请输入原始文献名称", trigger: "change" },
        ],
      },
      dialogVisible: false,
      selectList: [],
    };
  },

  computed: {
    ...mapGetters({ isAdmin: "getIsAdmin" }),

    /**
     * @function 返回菜单
     */
    menuList: function () {
      return this.isAdmin ? this.adminMenuList : this.userMenuList;
    },
  },

  methods: {
    /**
     * @function 鼠标移入
     * @param {Number} i 当前菜单角标
     */
    onEnter(i) {
      this.active = i;
    },

    /**
     * @function 鼠标移出
     */
    onOut() {
      this.active = -1;
    },

    /**
     * @function 进入菜单
     * @param {Object} item 当前菜单
     */
    onJump(item) {
      this.$router.push(item.path);
    },
    /**
     * @function 上传文件
     */
    async onUploadFile() {
      await uploadFile()
        .then((res) => {
          console.log(res);
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
      const fileNameList = data.fileName.split(".");
      fileNameList.pop();
      const dataName = fileNameList.join("");

      this.dialogForm.url = data.url;
      this.dialogForm.fileName = data.fileName;
      this.dialogForm.dataName = this.dialogForm.dataName || dataName;
    },
    submitFile() {
      this.dialogVisible = true;
      this.$nextTick(() => {
        this.$refs.dialogFormRef.clearValidate();
      });
    },
    /**
     * @function 保存添加文件
     */
    onSave() {
      this.$refs.dialogFormRef.validate((valid) => {
        if (!valid) {
          return false;
        }
        api.saveTaskData(this.dialogForm).then((res) => {
          if (res.code == 1) {
            this.$message.warning(res.msg);
          } else {
            this.$message.success("添加原始文献成功");
          }
          this.dialogVisible = false;
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.home_nav {
  width: 100%;

  .content {
    width: 100%;
    height: calc(100vh - 85px);
    align-items: center;

    .menu-box {
      width: 70%;
      flex-wrap: wrap;
      justify-content: space-around;
      margin: 0 auto;

      .menu-item {
        width: 25%;
        margin-top: 5%;
        margin-bottom: 5%;
        position: relative;

        &::before {
          content: "";
          display: inline-block;
          padding-bottom: 75%;
        }

        &:nth-of-type(3n-1) {
          margin-left: 8%;
          margin-right: 8%;
        }

        .item {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          background: #fff;
          box-shadow: 0px 0px 4px 2px #b7b7b7;
          cursor: pointer;

          &::before {
            content: "";
            display: block;
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            background: linear-gradient(to left, #336699, #336699) left top
                no-repeat,
              linear-gradient(to bottom, #336699, #336699) left top no-repeat,
              linear-gradient(to left, #336699, #336699) right top no-repeat,
              linear-gradient(to bottom, #336699, #336699) right top no-repeat,
              linear-gradient(to left, #336699, #336699) left bottom no-repeat,
              linear-gradient(to bottom, #336699, #336699) left bottom no-repeat,
              linear-gradient(to left, #336699, #336699) right bottom no-repeat,
              linear-gradient(to left, #336699, #336699) right bottom no-repeat;
            background-size: 4px 40px, 40px 4px, 4px 40px, 40px 4px;
            transition: width, height, top, left, 0.3s;
          }

          &:hover {
            &::before {
              top: -10px;
              left: -10px;
              width: calc(100% + 20px);
              height: calc(100% + 20px);
            }

            .text {
              color: #336699;
              font-size: 28px;
            }
          }

          .icon {
            width: 66px;
            height: 66px;
          }

          .text {
            height: 50px;
            font-size: 24px;
            color: #8a8a8a;
            transition: font-size 0.2s;
          }
        }
      }
    }
    .user-menu {
      width: 60%;

      .menu-item {
        width: 25%;
        margin-left: 8%;
        margin-right: 8%;
      }
    }
  }
}
.download {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  width: 45%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  /deep/.el-input {
    width: 50%;
  }
  .save-btn {
    width: 100px;
    height: 38px;
    margin-top: -2px;
  }
}
/* dialog */

.com-dialog {
  .dialog-form {
    margin-top: 40px;

    .upload-btn {
      padding: 0 10px;
    }
  }
  .footer-btn {
    margin-top: -50px;
  }
}
</style>