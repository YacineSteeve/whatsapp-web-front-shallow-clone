<template>
    <div class="chats-container">
        <NavBar/>
        <all-chats>
            <Archived/>
            <Chat 
                v-for="chat of filteredChats" 
                v-bind:chat="chat"
                v-bind:key="chat.id"/>
        </all-chats>
    </div>
</template>


<script setup>
    import NavBar from './NavBar.vue';
    import AllChats from './AllChats.vue';
    import Archived from './Archived.vue';
    import Chat from './Chat.vue';
    import { computed } from 'vue';
    import { useStore } from 'vuex';
    import { chatMatchSearch } from '../js/helpers.js'
    
    const store = useStore();

    const filteredChats = computed(() => {
        let searchText = store.state.searchValueChats;

        if (searchText) {
            searchText = searchText.split(' ').map((word) => word.toLowerCase());
            return store.state.chats.filter((chat) => {
                return chatMatchSearch(chat, searchText)
            })
        } else {
            return store.state.chats
        }
    });

    const containerMinWidth = String(0.22 * window.screen.width) + 'px';
</script>


<style scoped>
    .chats-container {
        display: flex;
        flex-direction: column;
        width: 30%;
        min-width: v-bind(containerMinWidth);
        height: 100%;
        border-right: thin solid #d9dadc;
        background-color: #f9fafc;
    }
</style>
