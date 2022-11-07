<template>
  <div class="img-container">
    <a-alert message="Success Tips" type="success" show-icon class="mb-ms" />
    <img src="@/assets/home.jpeg" />
  </div>
</template>
<script>
export default {
  components: {},
  props: {},
  setup() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.img-container {
  text-align: center;
  // height: 500px;
  img {
    width: 100%;
    height: 500px;
  }
}
</style>
