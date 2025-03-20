import { defineComponent } from "vue";

const ComponentWithSlots = defineComponent({
  name: "ComponentWithSlots",
  setup(_, { slots}) {
    return () => (
      <div>
        <h1>{slots.title?.()}</h1>
        {slots.default?.()}
      </div>
    );
  }
});

export default defineComponent({
  name: "Slots",
  setup() {
    return () => (
      <div>
        <ComponentWithSlots>
          {{
            title: () => <h1>Slot Title</h1>,
            default: () => <p>This is the default slot content.</p>,
          }}
        </ComponentWithSlots>
      </div>
    );
  },
});