import { createStore } from 'vuex'
import chats from '../js/chats.js';

export default createStore({
    state: {
        chats,
        inboxIsActive: false,
        activeInbox: ''
    },
    mutations: {
        // For testing
        switchInboxStatus(state) {
            state.inboxIsActive = !state.inboxIsActive;
        }
    },
    actions: {
        
    },
    modules: {

    }
})
