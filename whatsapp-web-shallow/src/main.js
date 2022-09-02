import { createApp } from 'vue'
import store from './store'
import App from './App.vue'

import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { 
    faLockOpen, 
    faSearch, 
    faBars, 
    faSpinner, 
    faMessage, 
    faEllipsisVertical, 
    faInbox,
    faThumbTack,
    faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faLockOpen)
library.add(faSearch)
library.add(faBars)
library.add(faSpinner)
library.add(faMessage)
library.add(faEllipsisVertical)
library.add(faInbox)
library.add(faThumbTack)
library.add(faChevronDown)

const root = document.querySelector(':root')

root.style.setProperty('--scrollbar-width', String(0.0035 * window.screen.width) + 'px')

const app = createApp(App)

app.use(store)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
