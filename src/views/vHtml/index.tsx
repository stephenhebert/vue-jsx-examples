import { defineComponent, ref } from "vue";

const VHtmlComponent = defineComponent({
  name: "VHtmlComponent",
  props: {
    html: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <div>
        <div v-html={props.html}></div>
      </div>
    );
  },
});

export default defineComponent({
  name: "VHtml",
  setup() {
    return () => (
      <VHtmlComponent html="<h1>HTML content</h1><p>This is the HTML content.</p>" />
    );
  },
});
