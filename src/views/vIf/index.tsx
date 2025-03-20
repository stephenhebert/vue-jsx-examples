import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "VIf",
  setup() {
    const show = ref(true);
    return () => (
      <div>
        {show.value ? <div>v-if</div> : <div>v-else</div>}
        <button class="px-4 py-2 bg-blue text-white rounded" onClick={() => { show.value = !show.value; }}>Toggle</button>
        <pre>show: {show.value ? 'True' : 'False'}</pre>
      </div>
    );
  },
});
