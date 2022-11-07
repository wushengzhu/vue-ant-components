<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <template v-for="item in menuList" :key="item.key">
          <a-menu-item>
            <router-link :to="item.link">
              <icon-font :type="`icon-${item.icon}`" />
              <span>{{ item.title }}</span>
            </router-link>
          </a-menu-item>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <icon-font type="icon-home" />
        <icon-font type="icon-home" />
        <icon-font type="icon-upload" />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px'
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
import menuList from "@/utils/menu.js";

export default defineComponent({
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined
  },

  setup() {
    return {
      selectedKeys: ref(["1"]),
      collapsed: ref(false),
      menuList: ref(menuList)
    };
  }
});
</script>
<style lang="less">
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}

.ant-layout-sider-children {
  //   position: fixed;
  min-height: 100vh;
  //   overflow: auto;
  //   left: 0;
  //   top: 0;
  //   bottom: 0;
}
</style>
