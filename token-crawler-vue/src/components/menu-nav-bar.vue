<!-- 
  * @author Gjf
  * @date 2021-08-16
  * @description 菜单栏 - 导航栏
-->

<template>
  <ul class="menu-nav-bar flex" :style="{background: showBg ? bg : 'none'}">
    <!-- menu -->
    <li class="menu flex">
      <router-link :class="['menu-item', {'active-menu': activeMenu === item.path}]" v-for="(item, i) in menuList" :key="i" :to="item.path">
        <img class="menu-img" :src="activeMenu === item.path ? item.activeimg : item.img" />
        <span class="name">{{ item.name }}</span>
      </router-link>
    </li>

    <btn name="导出"  v-if="importFile" style="margin-right: 20px" @click="downloadWord"></btn>

    <!-- back -->
<!--    <btn name="返回" @click="onBack">-->
<!--      <template slot="icon">-->
<!--        <img src="@/assets/images/nav/back.png" style="margin-right:10px">-->
<!--      </template>-->
<!--    </btn>-->
  </ul>
</template>

<script>
import btn from "@/components/layout/btn";
import { mapGetters } from "vuex";

export default {
  name: "menu-nav-bar",

  data() {
    return {
      bg: `url(${require("@/assets/images/nav/nav-bar-bg.png")}) repeat-x`,
    };
  },

  props: {
    /**
     * @param {Array} menuList 菜单列表
     */
    menuList: {
      type: Array,
      default: () => [],
    },

    importFile: {
      type: String,
      default: '',
    },

    /**
     * @param {Boolean} showBg 是否显示背景图
     */
    showBg: {
      type: Boolean,
      default: true,
    },

    /**
     * @param {String} backUrl 返回页面URL
     */
    backUrl: {
      type: String,
      default: "",
    },
  },

  components: { btn },

  computed: {
    /**
     * @function 返回当前路由
     */
    activeMenu: function () {
      return this.$route.fullPath;
    },
    ...mapGetters({ supplyId: "design/getSoId" }),
  },

  methods: {
    /**
     * @function 返回
     */
    onBack() {
      this.$emit("onBack");
      if (this.backUrl === "" || !this.backUrl) {
        return;
      }
      this.$router.push(this.backUrl);
    },

    downloadWord() {
      this.$post({
        url: "/aisim/scene/exportPath",
        params: {
          soid: this.supplyId,
        },
        succ: (res) => {
          let url = encodeURIComponent(res.data.url);
          window.open(
                  `${process.env.VUE_APP_BASE_API}/dm/software/download?url=${url}&fileName=${res.data.fileName}`
          );
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-nav-bar {
  height: 60px;
  width: calc(100% - 20px);
  margin: 5px 10px;
  padding: 0 15px;
  box-sizing: border-box;
  align-items: center;

  /* menu */
  .menu {
    flex: 1;

    .menu-item {
      border: 1px solid #3e6093;
      display: flex;
      align-items: center;
      padding: 5px 10px;

      &:not(:last-child) {
        margin-right: 18px;
      }

      .menu-img {
        width: 20px;
        height: 20px;
      }

      .name {
        font-size: 18px;
        font-weight: bold;
        color: #0c245d;
        margin-left: 5px;
      }
    }

    .active-menu {
      background: #3e6093;

      .name {
        color: #fff;
      }
    }
  }
}
</style>