import { createApp } from 'vue'
import store from './store'
import App from './App.vue'

import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faLockOpen, faSearch, faBars, faSpinner, faMessage, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)

app.use(store)

library.add(faLockOpen)
library.add(faSearch)
library.add(faBars)
library.add(faSpinner)
library.add(faMessage)
library.add(faEllipsisVertical)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
