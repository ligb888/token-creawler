<!-- 
  * @author Gjf
  * @date 2021-08-25
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
    border: 1px solid #333333;
    padding: 6px 15px;
    align-items: center;
    cursor: pointer;
    
    .name {
      font-size: 20px;
      color: #333333;
    }
  }
</style>