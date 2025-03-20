import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "VModel",
  setup() {
    const modelValue = ref("");

    return () => (
      <div>
        <input 
          type="text" 
          v-model={modelValue.value} 
          placeholder="Type something..." 
          class="border border-gray-300 rounded p-2 w-full"
        />
        <pre>modelValue: {modelValue.value}</pre>
      </div>
    );
  },
});