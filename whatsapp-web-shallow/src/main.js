import { createApp } from 'vue'
import store from './store'
import App from './App.vue'

import './assets/main.css'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFaceLaugh } from '@fortawesome/free-regular-svg-icons'
import {
    faLockOpen, faSearch, faBars, faSpinner, faMessage, faEllipsisVertical, 
    faInbox, faThumbTack, faChevronDown, faCheck, faCheckDouble, faPaperclip, 
    faMicrophone 
} from '@fortawesome/free-solid-svg-icons'


library.add({
    faLockOpen, faSearch, faBars, faSpinner, faMessage, faEllipsisVertical, 
    faInbox, faThumbTack, faChevronDown, faCheck, faCheckDouble, faPaperclip, 
    faMicrophone, faFaceLaugh
})

const root = document.querySelector(':root')

root.style.setProperty('--scrollbar-width', String(0.0035 * window.screen.width) + 'px')

const app = createApp(App)

app.use(store)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
