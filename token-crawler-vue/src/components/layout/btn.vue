<!-- 
  * @author Gjf
  * @date 2021-08-17
  * @description 按钮封装
-->

<template>
  <a class="com-btn flex" @click="clickBtn">
    <slot name="icon"></slot>
    <span class="name">{{ name }}</span>
  </a>
</template>

<script>
  export default {
    name: "com-btn",
      
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
  .com-btn {
    background-image: linear-gradient(#7397cb, #5376ac, #5874a3);
    box-shadow: 0px 2px 9px 2px #a9a9a9;
    border-top: 1px solid #fff;
    padding: 5px 10px;
    align-items: center;
    cursor: pointer;

    .name {
      // margin-left: 10px;
      font-size: 20px;
      color: #fff;
    }
  }
</style>