<template>
    <div class="inbox-container" v-bind:key="chat">
        <div class="veil scrolled">
            <div>{{ chat.whatsapp_name }}</div>
            <br/>
            <div v-for="message of messages">{{ message }}<br/><br/><br/><br/><br/></div>
        </div>
    </div>
</template>


<script setup>
    import { computed } from 'vue';
    import { useStore } from 'vuex';
    import { getRawMessages } from '../js/helpers.js';

    const store = useStore();
    const chat = computed(() => store.getters.getActiveChat);
    const messages = computed(() => getRawMessages(chat.value));
</script>


<style scoped>
    .inbox-container {
        flex: 1;
        background-color: #efeae2;
        background-image: url(../assets/images/bg-chat-light.png);
        background-attachment: fixed;
        background-position: top;
    }

    .inbox-container .veil {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        overflow-y: scroll;
        background-color: rgba(255, 255, 255, .2);
    }
</style>
