// styles
import './assets/main.css'
import 'vuetify/styles'

import { createApp } from 'vue'

// vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Pinia
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark'
  }
})

const app = createApp(App)

app.use(vuetify);
app.use(router)
app.use(createPinia())

app.mount('#app')
