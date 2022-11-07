<template>
  <div>
    <lib-a-table :tableOption="tableOption" :tableColumns="tableColumns">
      <template #tablePrefixSlot>
        <a-button type="primary" @click="addUser()">
          <icon-font type="icon-adduser" />
          添加用户
        </a-button>
      </template>
    </lib-a-table>
    <component
      v-if="isShowModal"
      :is="'LibAModal'"
      :title="'添加用户'"
      :width="700"
      @close-modal="closeModal"
    >
      <template #modalContent>
        <user-edit ref="userEdit"></user-edit>
      </template>
      <template #footer>
        <a-button @click="closeModal(false)">
          <icon-font type="icon-cancel" />
          取 消
        </a-button>
        <a-button type="primary" @click="saveUser()">
          <icon-font type="icon-save" />
          保 存
        </a-button>
      </template>
    </component>
  </div>
</template>
<script>
import LibAModal from "@/components/LibAModal/index";
import LibATable from "@/components/LibATable/index";
import UserEdit from "@/components/UserEdit/index";

import { reactive, ref } from "@vue/reactivity";
import { onMounted } from "vue";
export default {
  components: {
    LibAModal,
    LibATable,
    UserEdit
  },
  props: {},
  setup() {
    const userEdit = ref(null);
    const isShowModal = ref(false);
    const tableOption = reactive({
      url: "/api/Train/User/GetList",
      scroll: { x: 1024 },
      tableName: "user-list",
      showExportBtn: false
    });
    const tableColumns = reactive([
      {
        title: "用户名",
        dataIndex: "UserName",
        width: "100px",
        fixed: "left",
        scopedSlots: { customRender: "link" } // 注意这个是name1，与templates中的slot对应
      },
      {
        title: "登录账号",
        dataIndex: "Account",
        width: "120px"
      },
      {
        title: "性别",
        dataIndex: "Gender",
        width: "100px"
      },
      {
        title: "是否启用",
        dataIndex: "IsActive",
        width: "100px",
        scopedSlots: { customRender: "tags" }
      },
      {
        title: "创建日期",
        dataIndex: "CreateTime",
        width: "130px",
        scopedSlots: { customRender: "date" }
      },
      {
        title: "操作",
        dataIndex: "operation",
        width: "70px",
        scopedSlots: { customRender: "operation" }
      }
    ]);

    onMounted(() => {});

    const closeModal = (data) => {
      isShowModal.value = data;
    };

    const addUser = () => {
      isShowModal.value = true;
    };

    const saveUser = () => {
      userEdit.value.save();
    };

    return {
      tableOption,
      tableColumns,
      isShowModal,
      userEdit,
      closeModal,
      saveUser,
      addUser
    };
  }
};
</script>
<style lang="less" scoped></style>
