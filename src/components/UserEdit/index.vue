<template>
  <a-form
    :model="userForm"
    name="basic"
    :label-col="{ span: 4 }"
    :wrapper-col="{ span: 18 }"
    autocomplete="off"
    ref="userForm"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item label="用户名" name="username" v-bind="validateInfos.UserName">
      <a-input v-model:value="userForm.UserName" placeholder="用户名" />
    </a-form-item>

    <a-form-item label="登录账号" name="account" v-bind="validateInfos.Account">
      <a-input v-model:value="userForm.Account" placeholder="登录账号" />
    </a-form-item>

    <a-form-item
      label="登录密码"
      name="password"
      v-bind="validateInfos.Password"
    >
      <a-input-password
        v-model:value="userForm.Password"
        placeholder="登录密码"
      />
    </a-form-item>

    <a-row>
      <a-col :sm="{ span: 12 }">
        <a-form-item
          label="是否启用"
          name="isActive"
          :label-col="{ push: 4 }"
          :wrapper-col="{ push: 4, span: 8 }"
          v-bind="validateInfos.IsActive"
        >
          <a-switch v-model:checked="userForm.IsActive" />
        </a-form-item>
      </a-col>
      <a-col :sm="{ span: 12 }">
        <a-form-item
          label="性别"
          name="gender"
          :label-col="{ push: 4 }"
          :wrapper-col="{ push: 4, span: 8 }"
          v-bind="validateInfos.Gender"
        >
          <a-radio-group v-model:value="userForm.Gender">
            <a-radio :value="0">男</a-radio>
            <a-radio :value="1">女</a-radio>
          </a-radio-group>
        </a-form-item>
      </a-col>
    </a-row>
    <a-form-item label="备注" name="remark" v-bind="validateInfos.Remark">
      <a-textarea
        v-model:value="userForm.Remark"
        placeholder="备注"
        :rows="4"
      />
    </a-form-item>
  </a-form>
</template>
<script>
import { defineComponent, reactive, toRaw } from "vue";
import { Form } from "ant-design-vue";

const useForm = Form.useForm;
export default defineComponent({
  setup() {
    const userForm = reactive({
      UserName: "",
      Account: "",
      Password: "",
      IsActive: true,
      Gender: 0,
      Remark: ""
    });

    const rulesRef = reactive({
      UserName: [
        {
          required: true,
          message: "请输入用户名！",
          trigger: ["change", "blur"]
        }
      ],
      Account: [
        {
          required: true,
          message: "请输入登录账号！",
          trigger: ["change", "blur"]
        }
      ],
      Password: [
        {
          required: true,
          message: "请输入用户密码！",
          trigger: ["change", "blur"]
        }
      ],
      IsActive: [{}],
      Gender: [{}],
      Remark: [
        {
          max: 100,
          message: "备注不能超过100个字符！",
          trigger: ["change", "blur"]
        }
      ]
    });

    const { resetFields, validate, validateInfos } = useForm(
      userForm,
      rulesRef,
      {
        onValidate: (...args) => console.log("khjjhjk", userForm, ...args)
      }
    );

    const save = () => {
      validate()
        .then(() => {
          console.log("toRaw", toRaw(validateInfos));
        })
        .catch((err) => {
          console.log("error", err);
        });
    };

    return {
      userForm,
      validateInfos,
      resetFields,
      save
    };
  }
});
</script>
