import { createStore } from 'vuex'
import chats from '../js/chats.js';

export default createStore({
    state: {
        chats,
        searchValueChats: '',
        searchValueInbox: '',
        inboxIsActive: false,
        activeInbox: 0,
    },
    getters: {
        getActiveChat(state) {
            return state.chats.filter(chat => chat.id === state.activeInbox).pop();
        }
    },
    mutations: {
        setSearchValue(state, params) {
            state[params['model']] = params['newValue'];
        },
        setActiveInbox(state, id) {
            state.inboxIsActive = true;
            state.activeInbox = id;
        }
    },
    actions: {

    },
    modules: {

    }
})
