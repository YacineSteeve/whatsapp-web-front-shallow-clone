<template>
    <div class="selected-chat-container">
        <nav-menu>
            
        </nav-menu>
        <Inbox />
        <nav-menu>
            <h1>Ok</h1>
        </nav-menu>
    </div>
</template>


<script setup>
    import NavMenu from './NavMenu.vue';
    import Inbox from './Inbox.vue';


</script>


<style scoped>
    .selected-chat-container {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        flex: 1;
    }
</style>
