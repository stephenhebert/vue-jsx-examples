import { defineComponent } from "vue";

const ComponentWithSlots = defineComponent({
  name: "ComponentWithSlots",
  setup(_, { slots }) {
    return () => (
      <div>
        <p>slot1: {slots.slot1?.()}</p>
        <p>slot2: {slots.slot2?.()}</p>
        <p>slot3: {slots.slot3?.()}</p>
      </div>
    );
  }
});

const IntermediateComponent = defineComponent({
  name: "IntermediateComponent",
  setup(_, { slots }) {
    return () => (
      <ComponentWithSlots>
        {{
          ...slots
        }}
      </ComponentWithSlots>
    );
  },
});

export default defineComponent({
  name: "NestedSlots",
  setup() {
    return () => (
      <div>
        <ComponentWithSlots>
          {{
            slot1: () => <>Slot 1 Content</>,
            slot2: () => <>Slot 2 Content</>,
            slot3: () => <>Slot 3 Content</>,
          }}
        </ComponentWithSlots>
      </div>
    );
  },
});