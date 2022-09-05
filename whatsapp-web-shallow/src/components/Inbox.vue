<template>
    <div class="inbox-container">
        <div class="veil scrolled">
            <DayMessagesGroup 
                v-for="[day, messages] of Object.entries(chat.messages).reverse()"
                v-bind:day="day"
                v-bind:messages="messages" />
        </div>
    </div>
</template>


<script setup>
    import DayMessagesGroup from './DayMessagesGroup.vue';
    import { useAttrs } from 'vue';

    const chat = useAttrs()['chat'];

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
        display: flex;
        flex-direction: column-reverse;
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

    .inbox-container .veil .inbox-end {
        height: 0;
        width: 100%;
    }
</style>
