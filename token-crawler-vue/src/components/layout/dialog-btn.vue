<!--
  * @author Gjf
  * @date 2021-08-17
  * @description dialog 按钮封装
-->

<template>
  <a class="com-dialog-btn flex" @click="clickBtn">
    <slot name="icon"></slot>
    <span class="name">{{ name }}</span>
  </a>
</template>

<script>
export default {
  name: "com-dialog-btn",

  props: {
    /**
     * @param {String} name 按钮名称
     */
    name: {
      type: String,
      default: ''
    }
  },

  methods: {
    /**
     * @function 点击按钮事件
     */
    clickBtn() {
      this.$emit('click');
    }
  }
}
</script>

<style lang="scss" scoped>
  .com-dialog-btn {
    clip-path: polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0% 100%, 0% 6px);
    background-image: linear-gradient(to right,#273d66, #365488, #273d66);
    box-shadow: 0px 2px 9px 2px #a9a9a9;
    border-top: 1px solid #fff;
    padding: 5px 20px;
    align-items: center;
    cursor: pointer;

    .name {
      font-size: 20px;
      color: #fff;
    }
  }
</style>
