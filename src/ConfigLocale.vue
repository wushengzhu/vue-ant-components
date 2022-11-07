<template>
  <a-config-provider :locale="locale">
    <App />
  </a-config-provider>
</template>
<script>
import App from "@/App";
import zhCN from "ant-design-vue/es/locale/zh_CN"; //引入antd中文包
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
dayjs.locale("zh-cn");

export default {
  components: {
    App
  },
  props: {},
  setup() {
    return {
      locale: zhCN
    };
  }
};
</script>
