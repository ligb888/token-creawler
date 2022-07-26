<!--
  * @author Gjf
  * @date 2021-08-16
  * @description 导航栏
-->

<template>
  <aside class="nav-bar nav-bg flex">
    <!-- system -->
    <div class="system flex">
<!--      <img class="logo" :src="logo" />-->

      <span class="system-name m-l-1">{{ title }}</span>
    </div>

    <!-- user-info -->
    <ul class="user-info flex">
      <i class="icon el-icon-switch-button" title="注销" @click="exit"></i>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "nav-bar",

  data() {
    return {
      // logo: require("@/assets/images/logo.png"),
    };
  },

  props: {
    /**
     * @param {String} title 页面title
     */
    title: {
      type: String,
      default: "XXXXXXXXXXXXXXXXXXX",
    },
  },

  computed: {
  },

  methods: {
    /**
     * @function 注销登录
     */
    exit() {
      localStorage.clear();
      Object.assign(this.$store.state, {
        token: "",
        userId: "",
        organize: "",
        realName: "",
      });
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-bar {
  height: 85px;
  padding: 0 50px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;

  /* system */
  .system {
    align-items: center;

    .logo {
      width: 50px;
      height: 50px;
    }

    .system-name {
      background-image: linear-gradient(#7eeafd, #5099fe);
      -webkit-background-clip: text;
      color: transparent;
      font-family: "FZCTHJW";
      font-size: 38px;
    }
  }

  /* user-info */
  .user-info {
    align-items: center;

    .job {
      width: 65px;
      height: 65px;
      border-radius: 10px;
      font-size: 34px;
      color: #fff;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      .title {
        position: absolute;
        font-size: 12px;
        bottom: 2px;
        right: 2px;
      }
    }

    .user {
      .user-input /deep/ {
        display: block;
        width: 200px;
        height: 34px;

        .el-icon-user {
          font-size: 18px;
        }

        input {
          border-color: #203776;
          border-radius: 34px;
          background: #0b1a45;
          color: #fff;
          font-size: 16px;
        }
      }
    }

    .icon {
      font-size: 36px;
      color: #fff;
      cursor: pointer;
      margin-left: 30px;
    }
  }
}
</style>
