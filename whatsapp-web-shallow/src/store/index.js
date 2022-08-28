import { createStore } from 'vuex'

export default createStore({
    state: {
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
