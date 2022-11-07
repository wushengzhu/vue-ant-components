import { createFromIconfontCN } from "@ant-design/icons-vue";

// 引入阿里巴巴图标库，需要网络，每添加一个图标重新更新一下图标
const IconFont = createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/c/font_3743750_j43mzi3x7en.js"
});

export default IconFont;