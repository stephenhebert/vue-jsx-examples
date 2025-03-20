import { defineComponent, ref, computed } from "vue";

const Component1 = defineComponent({
  name: "Component1",
  props: ["msg"],
  setup(props) {
    return () => (
      <p>{props.msg} from Component 1</p>
    );
  },
});

const Component2 = defineComponent({
  name: "Component2",
  props: ["msg"],
  setup(props) {
    return () => (
      <p>{props.msg} from Component 2</p>
    );
  },
});

export default defineComponent({
  name: "DynamicComponents",
  setup() {
    enum Components {
      Component1 = 'Component1',
      Component2 = 'Component2',
    }
    const selectedComponent = ref(Components.Component1);
    const cycleComponents = () => {
      selectedComponent.value = selectedComponent.value === Components.Component1 ? Components.Component2 : Components.Component1;
    }

    const Component = computed(() => selectedComponent.value === Components.Component1 ? Component1 : Component2);
    return () => (
      <div>
        <Component.value msg="Hello World" /> 
        <button class="px-4 py-2 bg-blue text-white rounded" onClick={() => cycleComponents()}>Toggle</button>
        <pre>selectedComponent: {selectedComponent.value}</pre>
      </div>
    );
  },
});
