<template>
    <div class="inbox-container" v-bind:key="chat">
        <div class="veil scrolled">
            <DayMessagesGroup 
                v-for="[day, messages], id of Object.entries(chat.messages)"
                v-bind:day="day"
                v-bind:messages="messages" />
        </div>
    </div>
</template>


<script setup>
    import { computed } from 'vue';
    import { useStore } from 'vuex';
    import DayMessagesGroup from './DayMessagesGroup.vue';

    const store = useStore();
    const chat = computed(() => store.getters.getActiveChat);
    const paddingBlock = String(0.02 * window.screen.height) + 'px';
</script>


<style scoped>
    .inbox-container {
        flex: 1;
        background-color: #dfdad2;
        background-image: url(../assets/images/bg-chat-light.png);
        background-attachment: fixed;
        background-position: top left;
    }

    .inbox-container .veil {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        padding-block: v-bind(paddingBlock);
        padding-inline: 7%;
        overflow-y: scroll;
        background-color: rgba(255, 255, 255, .25);
    }
</style>
