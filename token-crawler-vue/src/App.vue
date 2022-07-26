<template>
  <div id="parentApp">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  created() {
  },
  mounted() {
  }
}
</script>

<style lang="scss">
  @import "assets/sass/main.scss";
  .operate-content {
    .el-switch__label span {
      color: #000 !important;
      font-size: 17px;
    }
  }
  #parentApp {
    height: 100vh;
    overflow: hidden;
  }
  /*修改滚动条默认样式*/
  ::-webkit-scrollbar{
    width: 4px;
    height:4px;
  }
  ::-webkit-scrollbar-thumb{
    -webkit-box-shadow: inset 0 0 5px rgba(60, 60, 60, 0.5);
    -moz-box-shadow: inset 0 0 5px rgba(60, 60, 60, 0.5);
    box-shadow: inset 0 0 5px rgba(60, 60, 60, 0.5);
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    background:rgba(255, 255, 255, 0.2);
  }
  /*修改滚动条默认样式*/
</style>
