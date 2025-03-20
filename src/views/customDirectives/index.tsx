import { defineComponent } from "vue";

const vFocus = (el: HTMLElement) => {
  if (!el) return;
    el.focus();
};

const anotherDirective = (el: HTMLElement, binding: any, vNode: any) => {
  console.log('anotherDirective', el, binding.value, binding.arg, binding.modifiers);
}

export default defineComponent({
  name: "CustomDirectives",
  directives: {
    focus: vFocus,
    another: anotherDirective,
  },
  setup() {
    return () => (
      <div>
        <input 
          v-focus
          v-another:arg="123"
          v-another={[123, 'arg', ['modifiers']]}
          class="border-1 border-gray p-2 rounded peer" 
        />
        <p class="peer-focus:block hidden text-green-800">Input has focus!</p>
        <p class="peer-not-focus:block hidden text-red-800">Input does not have focus!</p>
        </div>
    );
  },
});
