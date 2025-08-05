import LogsPanel from "./LogsPanel-BwckobjG.js";
import { d as defineComponent, a5 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-B6RmAinP.js";
import "./AnimatedSpinner-BwK5orkW.js";
import "./ConsumedTokensDetails.vue_vue_type_script_setup_true_lang-WtpqNg3U.js";
import "./VueMarkdown-Bv5BXHXK.js";
import "./canvas-CxY5NUUj.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoFooter",
  setup(__props) {
    const workflowsStore = useWorkflowsStore();
    const hasExecutionData = computed(() => workflowsStore.workflowExecutionData);
    return (_ctx, _cache) => {
      return hasExecutionData.value ? (openBlock(), createBlock(LogsPanel, {
        key: 0,
        "is-read-only": true
      })) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as default
};
