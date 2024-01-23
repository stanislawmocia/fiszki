import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

library.add(faMinus)

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App)
    .use(createPinia())
    .use(router)
    .use(vuetify)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
