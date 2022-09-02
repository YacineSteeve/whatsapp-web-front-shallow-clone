<template>
    <div 
        class="chat-container"
        v-on:mouseenter="state.isHovered = true"
        v-on:mouseleave="state.isHovered = false">
        <ProfilePicture 
            v-bind:url="chat.profile_picture"
            v-bind:size="profilePictureSize"/>
        <div class="chat-details">
            <div 
                v-bind:title="chat.name"
                class="chat-name-and-time detail">
                <div class="name left">{{ chat.name }}</div>
                <div 
                    v-if="lastDate === 'TODAY'"
                    class="time right">
                    {{ lastMessage.time.slice(0, 5) }}
                </div>
                <div
                    v-else
                    class="time right">
                    {{ lastDate.toLowerCase() }}
                </div>
            </div>
            <div 
                v-bind:title="lastMessage.content"
                class="chat-preview detail">
                <div class="chat-preview-message left">
                    {{ lastMessage.content }}
                </div>
                <div class="chat-icons right" id="chat-icons">
                    <span v-if="chat.pinned">&ensp;</span>
                    <font-awesome-icon 
                        v-if="chat.pinned"
                        icon="fa-solid fa-thumbtack" />
                    <span>&ensp;</span>
                    <font-awesome-icon
                        v-show="state.isHovered"
                        icon="fa-solid fa-chevron-down" />
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
    import { useAttrs, reactive } from 'vue';
    import ProfilePicture from './ProfilePicture.vue';

    const attrs = useAttrs();

    const chat = attrs['chat'];

    const lastDate = Object.keys(chat.messages).pop();

    const lastMessage = [...chat.messages[lastDate]].pop();
    
    const chatHeight = String(
        0.083 * window.screen.width 
        - 0.055 * window.screen.height) + 'px';

    const chatPadding = String(0.0085 * window.screen.width) + 'px';

    const profilePictureSize = String(0.0325 * window.screen.width) + 'px';

    const state = reactive({ isHovered: false });
</script>


<style scoped>
    .chat-container {
        display: flex;
        flex-direction: row;
        height: v-bind(chatHeight);
        min-height: v-bind(chatHeight);
        gap: v-bind(chatPadding);
        padding-left: v-bind(chatPadding);
    }

    .chat-container:hover {
        cursor: pointer;
        background-color: #f0f1f4;
    }

    .chat-container .chat-details {
        display: flex;
        flex-direction: column;
        height: 100%;
        min-width: 0;
        flex: 1;
        padding-block: v-bind(chatPadding);
        padding-right: v-bind(chatPadding);
    }

    .chat-container .chat-details::before {
        content: "";
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
        border-top: thin solid #d9dadc;
    }

    .chat-container .chat-details .detail {
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        width: 100%;
    }

    .chat-container .chat-details .detail .left {
        flex: 1;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    .chat-container .chat-details .detail .right {
        display: flex;
        color: grey;
        width: fit-content;
        align-items: center;
    }

    .chat-container .chat-details .chat-name-and-time .name {
        font-size: .85rem;
    }

    .chat-container .chat-details .chat-name-and-time .time {
        font-size: .6rem;
        color: grey
    }

    .chat-container .chat-details .chat-preview .chat-preview-message {
        font-size: .7rem;
        color: grey;
    }
</style>
