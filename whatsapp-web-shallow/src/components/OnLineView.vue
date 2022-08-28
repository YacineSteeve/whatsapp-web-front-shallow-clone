<template>
    <div class="chats-inbox-container">
        <ChatsSide/>
        <Inbox v-if="inboxIsActive"/>
        <Intro v-else/>
    </div>
</template>


<script setup>
    import ChatsSide from './ChatsSide.vue'
    import Inbox from './Inbox.vue'
    import Intro from './Intro.vue'
    import { computed } from 'vue'
    import { useStore } from 'vuex'

    const inboxIsActive = computed(() => useStore().state.inboxIsActive);
</script>


<style scoped>
    .chats-inbox-container {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        height: 100%;
        width: 100%;
    }
</style>
