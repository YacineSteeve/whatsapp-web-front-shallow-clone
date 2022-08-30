<template>
    <div class="chats-container">
        <button v-on:click="switchInbox">Hello0</button>
    </div>
</template>


<script setup>

    // For testing

    import { useStore } from 'vuex';
    
    const store = useStore();

    const switchInbox = () => {
        store.commit('switchInboxStatus')
    };

    const chats = store.state.chats;

    /* ********************************* */
</script>


<style scoped>
    .chats-container {
        display: flex;
        flex-direction: column;
        width: 29.4vw;
        min-width: 48vh;
    }
</style>
