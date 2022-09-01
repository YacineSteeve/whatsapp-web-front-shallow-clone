<template>
    <div class="chat-container">
        <ProfilePicture 
            v-bind:url="chat.profile_picture"
            size="50px"/>
        <div class="chat-details">
            <div class="">{{ chat.name }}</div>
            <div class="">
                <font-awesome-icon 
                    v-if="chat.pinned"
                    icon="fa-solid fa-thumbtack" />
            </div>
        </div>
    </div>
</template>


<script setup>
    import { useAttrs } from 'vue';
    import ProfilePicture from './ProfilePicture.vue';

    const attrs = useAttrs();

    const chat = attrs['chat'];
    
    const chatHeight = String(
        0.083 * window.screen.width 
        - 0.055 * window.screen.height) + 'px';

    const chatPadding = String(0.0085 * window.screen.width) + 'px';
</script>


<style scoped>
    .chat-container {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        height: v-bind(chatHeight);
        min-height: v-bind(chatHeight);
        gap: v-bind(chatPadding);
        padding-left: v-bind(chatPadding);
    }

    .chat-container:hover {
        background-color: #f0f1f4;
    }

    .chat-container .chat-details {
        height: 100%;
        flex: 1;
        padding: v-bind(chatPadding);
    }

    .chat-container .chat-details::before {
        content: "";
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
        border-top: thin solid #d9dadc;
    }
</style>
