import { createStore } from 'vuex'
import chats from '../js/chats.js';

export default createStore({
    state: {
        chats,
        searchValueChats: '',
        searchValueInbox: '',
        inboxIsActive: true,
        activeInbox: ''
    },
    mutations: {
        // For testing
        switchInboxStatus(state) {
            state.inboxIsActive = !state.inboxIsActive;
        },
        /* ******************************** */
        setSearchValue(state, params) {
            state[params['model']] = params['newValue'];
        }
    },
    actions: {

    },
    modules: {

    }
})
