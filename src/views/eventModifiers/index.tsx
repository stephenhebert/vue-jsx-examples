import { defineComponent, withModifiers } from 'vue'

export default defineComponent({
  name: 'EventModifiers',
  setup() {
    const handleClick = (event) => {
      console.log('Button clicked!', event);
    };
    return () => (
      <form action="https://www.baidu.com">
        <button onClick={withModifiers(handleClick, ['prevent'])}>Click Me</button>
      </form>
    )
  },
})