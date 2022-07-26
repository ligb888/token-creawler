<template>
  <div class="login-page">
    <div class="header">
      <h1>XXXXXXXXXX</h1>
    </div>
    <div class="content">
      <div class="userinfo">
        <div class="username">
          <!--                    <div class="img3"><img src="../../assets/images/login/user_icon.png"></div>-->
          <input class="ipt" v-model="form.mobile" placeholder="请输入账号">
        </div>
        <div class="userPassword">
          <!--                    <div class="img4"><img src="../../assets/images/login/user_password.png"></div>-->
          <input class="ipt" type="password" v-model="form.password" placeholder="请输入密码">
        </div>
        <div class="submit" @click="login">登录</div>
      </div>
    </div>
  </div>
</template>
<script>
import { setToken } from "@/utils/auth";

export default {
  data() {
    return {
      form: {
        mobile: "",
        password: "",
      },
    };
  },
  computed: {
  },
  methods: {
    login() {
      this.$post({
        url: "/zhuolixin/media/login",
        params: this.form,
        succ: (res) => {
          const { token = "" } = res.data;
          setToken(token);
          this.$router.push("document");
        },
      });
    },
  },
};
</script>
<style lang="scss">
#ipt::-webkit-input-placeholder {
  color: #fff;
}

.login-page {
  /*display: none;*/
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #0b1a45;

  min-height: 936px;

  .header {
    text-align: center;
    height: 530px;

    h1{
      padding-top: 250px;
      background-image: linear-gradient(#7eeafd, #5099fe);
      -webkit-background-clip: text;
      color: transparent;
      font-family: "FZCTHJW";
      font-size: 50px;
    }

    .headertext {
      margin-top: 118px;
      min-width: 753px;
      height: 62px;
      font-family: MicrosoftYaHei-Bold;
      font-size: 63px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 6px;
      color: #ffffff;
    }

    img {
      margin-top: -70px;
    }
  }

  .content {
    width: 700px;
    min-height: 400px;
    margin: 0 auto;
    position: relative;
    bottom: 160px;
    background-image: url("~@/assets/images/login/login_bg.png");
    background-size: 1172px 100%;
    background-repeat: no-repeat;
    background-position: center top;

    .userinfo {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      top: 80px;
      left: 50%;
      transform: translateX(-50%);

      input {
        width: 373px;
        height: 42px;
      }

      .username {
        display: flex;
        width: 373px;
        background-image: url("~@/assets/images/login/username.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: left top;
        overflow: hidden;
        padding: 5px 5px 5px 65px;
        margin-bottom: 40px;
        .img3 {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 57px;
          min-height: 53px;
          background-color: #124671;
        }

        input {
          background: rgba(0, 0, 0, 0);
          border: 0;
          outline: none;
          color: #fff;
          padding-left: 14px;
          font-size: 18px;
        }
      }

      .userPassword {
        display: flex;
        width: 373px;
        background-image: url("~@/assets/images/login/passwod.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: left top;
        overflow: hidden;
        padding: 5px 5px 5px 65px;
        .img4 {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 57px;
          min-height: 53px;
          background-color: #124671;
        }

        input {
          background: rgba(0, 0, 0, 0);
          border: 0;
          outline: none;
          color: #fff;
          padding-left: 14px;
          font-size: 18px;
        }
      }

      .submit {
        width: 217px;
        height: 57px;
        background-image: url("~@/assets/images/login/login_btn_bg.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: left top;
        text-align: center;
        line-height: 57px;
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 1px;
        color: #feffff;
        margin-top: 40px;
      }
    }
  }
}
</style>
