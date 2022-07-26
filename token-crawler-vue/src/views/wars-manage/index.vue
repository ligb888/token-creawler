<!--
  * @author Gjf
  * @date 2021-08-16
  * @description XX管理 - 承载页
-->

<template>
  <div class="wars-manage">
    <!-- nav-bar -->
    <nav-bar></nav-bar>

    <!-- menu-bar -->
    <menu-bar :menuList="menuList" backUrl="/navPage"></menu-bar>

    <aside class="wars-content p-1 main-bg">
      <router-view></router-view>
    </aside>
  </div>
</template>

<script>
  import navBar from "@/components/nav-bar";
  import menuBar from "@/components/menu-nav-bar";

  export default {
    name: "wars-manage",

    components: {
      navBar,
      menuBar,
    },

    data() {
      return {
        menuList: [{
          name: '平台列表',
          path: '/document_origin',
          img: require('@/assets/images/wars-manage/origin.png'),
          activeimg: require('@/assets/images/wars-manage/active-origin.png')
        },
        // {
        //   name: '平台配置',
        //   path: '/document_bg',
        //   img: require('@/assets/images/wars-manage/bg.png'),
        //   activeimg: require('@/assets/images/wars-manage/active-bg.png')
        // }
        ]
      }
    },

    methods: {}
  }
</script>

<style lang="scss" scoped>
  .wars-content {
    height: calc(100vh - 145px);
    overflow: hidden;
    box-sizing: border-box;
  }
</style>
