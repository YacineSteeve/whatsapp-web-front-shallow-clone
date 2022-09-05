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
        v-bind:class="{
            'first-serie-left': firstOfSerie && message.sender !== null,
            'first-serie-right': firstOfSerie && message.sender === null,
            }"
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
            {{ message.content ? message.content : ''}}
            <div 
                class="message-image"
                v-show="!message.content" >
                <img 
                    v-show="!message.content" 
                    v-bind:src="message.image" 
                    alt="Image" />
            </div>
            <div v-bind:class="['message-time', !message.content ? 'image-time' : 'text-time']">
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
        /* min-width: v-bind(bubbleMinWidth); */
        height: fit-content;
        border-radius: v-bind(bubbleBorderRadius);
        padding-inline: v-bind(serieSeparatorHeight);
        padding-block: v-bind(emojiReactionPadding);
        background-color: v-bind(bubbleColor);
    }

    .first-serie-left::before {
        position: absolute;
        top: 0;
        left: -7px;
        content: '';
        width: 0;
        height: 0;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-top: 10px solid white;
    }

    .first-serie-right::after {
        position: absolute;
        top: 0;
        right: -7px;
        content: '';
        width: 0;
        height: 0;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-top: 10px solid #d9fdd3;
    }

    .message-container .message-bubble .message-image {
        width: fit-content;
        margin-top: v-bind(separatorHeight);
    }

    .message-container .message-bubble .message-image img {
        width: v-bind(bubbleMinWidth);
        border-radius: v-bind(bubbleBorderRadius);
        transform: scale(1);
    }

    .message-container .message-bubble .message-image::after {
        content: '';
        position: absolute;
        bottom: 5px;
        left: 0;
        width: 100%;
        height: 25px;
        background-color: rgba(0, 0, 0 , .3);
        filter: blur(5px);
        border-bottom-left-radius: v-bind(bubbleBorderRadius);
        border-bottom-right-radius: v-bind(bubbleBorderRadius);
        overflow: hidden;
    }

    .message-container .message-bubble .text-time {
        float: right;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        color: grey;
        height: v-bind(timeHeight);
        margin-left: v-bind(serieSeparatorHeight);
    }

    .message-container .message-bubble .image-time {
        position: absolute;
        right: calc(2 * v-bind(serieSeparatorHeight));
        bottom: calc(3 * v-bind(emojiReactionPadding));
        color: white;
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
