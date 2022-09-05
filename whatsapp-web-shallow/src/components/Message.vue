<template>
    <div 
        v-show="firstOfSerie"
        class="message-serie-separator">
    </div>
    <div 
        v-show="!firstOfSerie"
        class="message-separator">
    </div>
    <div 
        class="message-container" 
        v-bind="$attrs"
        v-on:mouseenter="state.isHovered = true"
        v-on:mouseleave="state.isHovered = false">
        <div 
            v-show="state.isHovered && message.sender === null"
            class="react-to-message">
            <font-awesome-icon 
                icon="fa-solid fa-face-grin-wide" 
                size="xl"
                color="white" />
        </div>
        <div class="message-bubble">
            {{ message.content }}
            <div class="message-time">
                <div>
                    {{ message.time.slice(0, 5) }}
                    <span v-show="message.sender === null">
                        <font-awesome-icon
                            v-show="message.status === null"
                            icon="fa-solid fa-check" />
                        <font-awesome-icon
                            v-show="message.status === 'unread'"
                            icon="fa-solid fa-check-double" />
                        <font-awesome-icon
                            v-show="message.status === 'read'"
                            icon="fa-solid fa-check-double" color="blue"/>
                    </span>
                </div>
            </div>
        </div>
        <div 
            v-show="state.isHovered && message.sender !== null"
            class="react-to-message">
            <font-awesome-icon 
                icon="fa-solid fa-face-grin-wide" 
                size="xl"
                color="white" />
        </div>
    </div>
</template>


<script setup>
    import { useAttrs, reactive } from 'vue';

    const attrs = useAttrs();

    const [message, firstOfSerie] = [attrs['message'], attrs['firstOfSerie']];

    const state = reactive({ isHovered: false });

    const emojiReactionPadding = String(0.005 * window.screen.height) + 'px';
    const bubbleMaxWidth = String(0.3 * window.screen.width) + 'px';
    const bubbleMinWidth = String(0.42 * window.screen.height) + 'px';
    const separatorHeight = String(0.0025 * window.screen.height) + 'px';
    const serieSeparatorHeight = String(0.015 * window.screen.height) + 'px';
    const timeHeight = String(0.03 * window.screen.height) + 'px';
    const bubbleBorderRadius = String(0.01 * window.screen.height) + 'px';
    const bubbleColor = message.sender === null
        ? '#d9fdd3'
        : 'white';
    const contentSide = message.sender === null
        ? 'right'
        : 'left';
</script>


<style scoped>
    .message-serie-separator {
        height: v-bind(serieSeparatorHeight);
    }

    .message-separator {
        height: v-bind(separatorHeight);
    }

    .message-container {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: v-bind(contentSide);
        width: 100%;
        height: fit-content;
        font-size: .7rem;
    }

    .message-container .message-bubble {
        width: fit-content;
        max-width: v-bind(bubbleMaxWidth);
        min-width: v-bind(bubbleMinWidth);
        height: fit-content;
        border-radius: v-bind(bubbleBorderRadius);
        padding-inline: v-bind(serieSeparatorHeight);
        padding-block: v-bind(emojiReactionPadding);
        background-color: v-bind(bubbleColor);
    }

    .message-container .message-bubble .message-time {
        float: right;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        color: grey;
        height: v-bind(timeHeight);
        margin-left: v-bind(serieSeparatorHeight);
    }

    .message-container .react-to-message {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: #99999955;
        padding: v-bind(emojiReactionPadding);
        margin-inline: v-bind(emojiReactionPadding);
    }

    .message-container .react-to-message:hover {
        cursor: pointer;
    }
</style>
