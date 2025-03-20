import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "VFor",
  setup() {
    const items = ref(["Item 1", "Item 2", "Item 3"]);
    return () => (
      <div>
        <ul>
          {items.value.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button
          class="px-4 py-2 bg-blue text-white rounded"
          onClick={() => {
            items.value.push(`Item ${items.value.length + 1}`);
          }}
        >
          Add Item
        </button>
        <p class="mt-4">Total items: {items.value.length}</p>
      </div>
    );
  },
});
