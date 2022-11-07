<template>
  <div>
    <a-modal
      v-model:visible="visible"
      :title="title"
      :width="width"
      :confirm-loading="confirmLoading"
      @after-close="closeModal"
      @cancel="closeModal"
      @ok="handleOk"
    >
      <slot name="modalContent"></slot>
      <template #footer>
        <slot name="footer"></slot>
      </template>
    </a-modal>
  </div>
</template>
<script>
import { ref, defineComponent } from "vue";
export default defineComponent({
  props: {
    title: {
      type: String,
      default: ""
    },
    width: {
      type: Number,
      default: 520
    }
  },
  emits: ["closeModal"],
  setup(pros, ctx) {
    const modalText = ref("Content of the modal");
    const visible = ref(true);
    const confirmLoading = ref(false);

    const showModal = () => {
      visible.value = true;
    };

    const handleOk = () => {
      modalText.value = "The modal will be closed after two seconds";
      confirmLoading.value = true;
      setTimeout(() => {
        visible.value = false;
        confirmLoading.value = false;
      }, 2000);
    };

    const closeModal = () => {
      ctx.emit("closeModal", false);
    };

    return {
      modalText,
      visible,
      confirmLoading,
      showModal,
      handleOk,
      closeModal
    };
  }
});
</script>
