import { defineComponent, useTemplateRef } from 'vue'

export default defineComponent({
  name: 'TemplateRefs',
  setup() {
    const templateRef = useTemplateRef('myTemplateRef');
    const handleInterval = () => {
      if (!templateRef.value) return;
      templateRef.value.innerHTML = new Date().toLocaleTimeString();
    };
    setInterval(handleInterval, 1000);
    return () => (
      <div ref="myTemplateRef">Template Ref Example</div>
    );
  },
});