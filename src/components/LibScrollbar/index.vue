<template>
  <!-- 自定义的滚动条 -->
  <div class="scroll-container">
    <slot></slot>
  </div>
</template>
<style lang="less" scoped>
.scroll-container {
  width: $sideBarWidth;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1001;
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
}
// 默认滚动条样式修改
.scroll-container::-webkit-scrollbar {
  width: 0;
  position: absolute;
}
.scroll-container::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: #ebebeb;
}
</style>
