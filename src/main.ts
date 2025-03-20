import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import 'virtual:unocss-devtools'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
