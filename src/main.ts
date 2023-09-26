// styles
import './assets/main.css'

import { createApp } from 'vue'

// vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

// Pinia
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark'
  },
  icons: {
    defaultSet: 'mdi',
  },
})

const app = createApp(App)

app.use(vuetify);
app.use(router)
app.use(createPinia())

app.mount('#app')
