<template>
    <div class="chats-container">
        <NavBar/>
        <!-- test -->
        <br/>
        <button v-on:click="switchInbox">Hello0</button>
    </div>
</template>


<script setup>
    import NavBar from './NavBar.vue';
    import { onMounted } from 'vue';

    // For testing

    import { useStore } from 'vuex';
    
    const store = useStore();

    const switchInbox = () => {
        store.commit('switchInboxStatus')
    };

    const chats = store.state.chats;

    /* ********************************* */

    onMounted(() => {
        const chatsContainer = document.getElementsByClassName('chats-container')[0];
        chatsContainer.style.minWidth = String(0.22 * window.screen.width) + 'px';
    });
</script>


<style scoped>
    .chats-container {
        display: flex;
        flex-direction: column;
        width: 30%;
        height: 100%;
        border-right: thin solid #d9dadc;
        background-color: #f9fafc;
    }
</style>
