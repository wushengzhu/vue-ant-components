<template>
  <div class="table-prefix">
    <slot name="tablePrefixSlot"></slot>
  </div>
  <a-table
    :columns="tableColumns"
    :data-source="data"
    :scroll="tableOption.scroll"
    :bordered="isBordered"
    :pagination="false"
    @change="tableChange"
  >
    <template #bodyCell="{ column }">
      {{ consoleMethod(column) }}
      <template v-if="column.dataIndex === 'operation'">
        <slot name="operation"></slot>
      </template>
    </template>
  </a-table>
  <div class="pagination mt-ms">
    <a-pagination
      @change="onChange"
      v-model:current="currentPage"
      v-model:pageSize="pageSize"
      :defaultCurrent="1"
      :defaultPageSize="10"
      :total="50"
      show-size-changer
      show-quick-jumper
      :page-size-options="pageSizeOptions"
    >
      <template #buildOptionText="props">
        <span v-if="props.value !== '50'">{{ props.value }}条/页</span>
        <span v-else>全部</span>
      </template>
    </a-pagination>
  </div>
</template>
<script>
import { defineComponent, reactive, ref } from "vue";
import { getPageData } from "@/api/index.js";

const data = reactive([]);
const pageSizeOptions = reactive(["10", "20", "30", "40", "50"]);
const currentPage = ref(1);
const pageSize = ref(10);
const reload = ref(false);

export default defineComponent({
  props: {
    tableOption: {
      type: Object,
      default: {
        url: "",
        scroll: { x: 1024 },
        tableName: "table-list",
        showExportBtn: false
      }
    },
    tableColumns: {
      type: Array,
      default: []
    },
    requestData: {
      type: Object,
      default: {
        filters: "",
        curPage: 1,
        pageSize: 10,
        extraData: {}
      }
    },
    reload: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const tableChange = (
      pagination,
      filters,
      sorter,
      { currentDataSource }
    ) => {};

    const onChange = (page, size) => {
      currentPage.value = page;
      pageSize.value = size;
      requestData.curPage = page;
      requestData.pageSize = size;
      getData();
    };

    const getData = async () => {
      data = await getPageData(tableOption.url, requestData);
    };

    const consoleMethod = (c) => {
      console.log(c);
    };

    return {
      data,
      // tableColumns,
      isBordered: true,
      currentPage,
      pageSize,
      pageSizeOptions,
      onChange,
      tableChange,
      consoleMethod
    };
  }
});
</script>
<style lang="less" scoped>
.table-prefix {
  margin-bottom: 8px;
}

.pagination {
  display: flex;
  justify-content: flex-end;
}
</style>
