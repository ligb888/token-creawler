<!--
  * @author Gjf
  * @date 2021-11-02
  * @description 地图叠加按钮封装
-->

<template>
  <div class="map-overlay-btn">
    <el-button v-for="(item, i) in btnList" :key="i" :size="size" @click="$emit('click', item)">{{item.name}}</el-button>
  </div>
</template>

<script>
export default {
  name: "map-overlay-btn",

  props: {
    /**
     * @param {Array} btnList 按钮列表名称
     */
    btnList: {
      type: Array,
      default: () => [
        { name: "叠加我情", id: 1 },
        { name: "叠加敌情", id: 2 },
        { name: "叠加注记", id: 3 },
      ],
    },

    /**
     * @param {String} btnList 按钮尺寸
     */
    size: {
      type: String,
      default: "small",
    },
  },
};
</script>

<style lang="scss" scoped>
.map-overlay-btn {
	z-index: 100;
  .el-button {
    background: rgba(0, 60, 136, 0.7);
    border-color: rgba(0, 60, 136, 0.7);
    color: #fff;
  }
}
</style>
