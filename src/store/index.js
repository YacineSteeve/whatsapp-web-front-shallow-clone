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
        },
        addNewMessageToChat(state, message) {
            const chat = this.getters.getActiveChat;

            const today = new Date();

            const newMessage = {
                content: message,
                sender: null,
                time: `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`,
                status: "unread"
            };
            
            if (chat.messages.TODAY) {
                chat.messages["TODAY"].push(newMessage);
            } else {
                chat.messages.TODAY = [newMessage];
            }
        }
    },
    actions: {

    },
    modules: {

    }
})
