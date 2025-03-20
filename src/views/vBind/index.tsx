import { defineComponent } from "vue";

const DebugComponent = defineComponent({
  name: "DebugComponent",
  inheritAttrs: false,
  setup(_, { attrs}) {
    return () => <pre class="text-start text-xs">{JSON.stringify(attrs, null, 2)}</pre>;
  }
});

export default defineComponent({
  name: "VBind",
  setup() {
    const attrs = {
      class: "text-2xl text-center",
      style: {
        color: "blue",
      },
    }

    return () => (
      <div>
        <DebugComponent {...attrs} />
      </div>
    );
  },
});