<template>
    <div class="chats-container">
        <NavBar/>
        <all-chats>
            <Archived/>
            <Chat 
                v-for="chat of chats" 
                v-bind:chat="chat"
                v-bind:key="chat.id"/>
        </all-chats>
        <!-- Test 
        <br/>
        <button v-on:click="switchInbox">Hello0</button> -->
    </div>
</template>


<script setup>
    import NavBar from './NavBar.vue';
    import AllChats from './AllChats.vue';
    import Archived from './Archived.vue';
    import Chat from './Chat.vue';
    import { useStore } from 'vuex';
    
    const store = useStore();

    const chats = store.state.chats;

    const containerMinWidth = String(0.22 * window.screen.width) + 'px';

    /* *********** Test ************** */

    const switchInbox = () => {
        store.commit('switchInboxStatus')
    };
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
