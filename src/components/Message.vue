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
        v-on:mouseenter="state.messageIsHovered = true"
        v-on:mouseleave="state.messageIsHovered = false">
        <Transition name="reaction">
            <div 
                v-show="state.messageIsHovered && message.sender === null"
                class="react-to-message">
                <font-awesome-icon 
                    icon="fa-solid fa-face-grin-wide" 
                    size="xl"
                    color="white" />
            </div>
        </Transition>
        
        <div 
            class="message-bubble"
            v-on:mouseenter="state.bubbleIsHovered = true"
            v-on:mouseleave="state.bubbleIsHovered = false"
            >
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
            <div 
                class="message-options" 
                v-show="state.bubbleIsHovered">
                <Transition name="chevron">
                    <font-awesome-icon
                        v-show="state.bubbleIsHovered"
                        icon="fa-solid fa-chevron-down"
                        color="grey"
                        size="lg" />
                </Transition>
            </div>
        </div>
        <Transition name="reaction">
            <div 
                v-show="state.messageIsHovered && message.sender !== null"
                class="react-to-message">
                <font-awesome-icon 
                    icon="fa-solid fa-face-grin-wide" 
                    size="xl"
                    color="white" />
            </div>
        </Transition>
    </div>
</template>


<script setup>
    import { useAttrs, reactive } from 'vue';

    const attrs = useAttrs();

    const [message, firstOfSerie] = [attrs['message'], attrs['firstOfSerie']];

    const state = reactive({ 
        messageIsHovered: false, 
        bubbleIsHovered: false 
    });

    const emojiReactionPadding = String(0.005 * window.screen.height) + 'px';
    const bubbleMaxWidth = String(0.3 * window.screen.width) + 'px';
    const bubbleMinWidth = String(0.42 * window.screen.height) + 'px';
    const separatorHeight = String(0.0025 * window.screen.height) + 'px';
    const serieSeparatorHeight = String(0.015 * window.screen.height) + 'px';
    const timeHeight = String(0.03 * window.screen.height) + 'px';
    const optionsHeight = String(0.083 * window.screen.width - 0.055 * window.screen.height - 20) + 'px';
    const bubbleBorderRadius = String(0.01 * window.screen.height) + 'px';
    const bubbleColor = message.sender === null
        ? '#d9fdd3'
        : 'white';
    const optionsColor = message.image
        ? 'transparent'
        : message.sender === null
            ? 'rgba(217, 253, 211, 1)'
            : 'rgba(255, 255, 255, 1)';
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
        overflow: hidden;
        width: fit-content;
        max-width: v-bind(bubbleMaxWidth);
        word-break: break-all;
        height: fit-content;
        border-radius: v-bind(bubbleBorderRadius);
        padding-inline: v-bind(serieSeparatorHeight);
        padding-block: v-bind(emojiReactionPadding);
        background-color: v-bind(bubbleColor);
    }

    .message-container .message-bubble .message-options {
        display: flex;
        justify-content: flex-end;
        position: absolute;
        top: v-bind(emojiReactionPadding);
        right: v-bind(serieSeparatorHeight);
        width: 20%;
        height: calc(100% - v-bind(timeHeight));
        min-height: v-bind(timeHeight);
        max-height: v-bind(optionsHeight);
        padding-right: v-bind(serieSeparatorHeight);
        padding-top: v-bind(separatorHeight);
        background: v-bind(optionsColor);
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

    .chevron-enter-active {
        transition: all .1s ease-in-out;
    }

    .chevron-enter-from {
        transform: translateX(v-bind(serieSeparatorHeight));
    }

    .reaction-enter-active {
        transition: all .8s ease;
    }

    .reaction-enter-from {
        opacity: 0;
    }
</style>
