import { defineComponent, ref } from "vue";

const VTextComponent = defineComponent({
  name: "VTextComponent",
  props: {
    html: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <div>
        <div v-text={props.html}></div>
      </div>
    );
  },
});

export default defineComponent({
  name: "VText",
  setup() {
    return () => (
      <VTextComponent html="<h1>HTML content</h1><p>This is the HTML content.</p>" />
    );
  },
});
