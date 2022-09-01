<template>
    <div class="all-chats-container scrolled">
        <slot>All Chats</slot>
    </div>
</template>


<script setup>
</script>


<style scoped>
    .all-chats-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        height: 100%;
        overflow-y: scroll;
    }
</style>
