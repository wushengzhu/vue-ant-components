<template>
  <div class="page-footer">
    <slot class="suffix"> </slot>
  </div>
</template>

<style lang="less" scoped>
.page-footer {
  width: 85%; // 为什么是85,因为依赖的是body
  height: 64px;
  line-height: 64px;
  padding: 0 10px;
  margin-left: -30px; // 去掉app-main的margin
  position: fixed;
  bottom: 0;
  //   flex-box(flex-end, center);
  background-color: #fff;
  opacity: 1;
  border-top: 1px solid #d8dce5;
  z-index: 1000000;

  .suffix {
    text-align: right;
  }
}
</style>
