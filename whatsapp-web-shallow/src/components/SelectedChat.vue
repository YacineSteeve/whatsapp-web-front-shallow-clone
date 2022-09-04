<template>
    <div class="selected-chat-container">
        <InboxHeader />
        <Inbox />
        <NewMessageBar />
    </div>
</template>


<script setup>
    import Inbox from './Inbox.vue';
    import InboxHeader from './InboxHeader.vue';
    import NewMessageBar from './NewMessageBar.vue';

</script>


<style scoped>
    .selected-chat-container {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        flex: 1;
    }
</style>
