<template>
    <div class="selected-chat-container"  v-bind:key="chat">
        <InboxHeader v-bind:chat="chat" />
        <Inbox v-bind:chat="chat" />
        <NewMessageBar v-bind:chat="chat" />
    </div>
</template>


<script setup>
    import Inbox from './Inbox.vue';
    import InboxHeader from './InboxHeader.vue';
    import NewMessageBar from './NewMessageBar.vue';
    import { computed } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore();

    const chat = computed(() => store.getters.getActiveChat);
</script>


<style scoped>
    .selected-chat-container {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        flex: 1;
    }
</style>
