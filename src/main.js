import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { setupCalendar } from 'v-calendar'

const app = createApp(App)

app.use(router)
app.use(autoAnimatePlugin)
app.use(setupCalendar, {})

app.mount('#app')
