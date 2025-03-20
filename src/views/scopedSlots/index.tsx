import { defineComponent } from "vue";

const ComponentWithScopedSlots = defineComponent({
  name: "ComponentWithScopedSlots",
  setup(_, { slots}) {
    return () => (
      <div>
        {slots.default?.({ text: "Hello World" })}
      </div>
    );
  }
});

export default defineComponent({
  name: "ScopedSlots",
  setup() {
    return () => (
      <div>
        <ComponentWithScopedSlots>
          {{
            default: ({text}) => <p>This is the default slot content with a parameter of {text}.</p>,
          }}
        </ComponentWithScopedSlots>
      </div>
    );
  },
});