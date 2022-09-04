<template>
    <nav-menu>
        <div class="message-bar-container">
            <div class="message-bar-icon">
                <font-awesome-icon 
                    icon="fa-regular fa-face-laugh"
                    color="dimgrey"
                    size="xl" />
            </div>
            <div class="message-bar-icon">
                <font-awesome-icon  
                    icon="fa-solid fa-paperclip"
                    color="dimgrey"
                    size="xl" />
            </div>
            <input 
                type="text"
                placeholder="Type a message"
                spellcheck="on"
                autofocus />
            <div class="message-bar-icon">
                <font-awesome-icon 
                    icon="fa-solid fa-microphone"
                    color="dimgrey" 
                    size="xl" />
            </div>
        </div>
    </nav-menu>
</template>


<script setup>
    import NavMenu from './NavMenu.vue';

    const gapValue = String(0.0125 * window.screen.height) + 'px';
    const paddingInline = String(0.02 * window.screen.height) + 'px';
    const paddingBlock = String(0.01 * window.screen.height) + 'px';
</script>


<style scoped>
    .message-bar-container {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        padding-inline: v-bind(paddingInline);
        padding-block: v-bind(paddingBlock);
        height: 100%;
        width: 100%;
    }

    .message-bar-container .message-bar-icon {
        display: flex;
        align-items: center;
        padding-inline: v-bind(gapValue);
    }

    .message-bar-container input {
        flex: 1;
        border: none;
        border-radius: .5rem;
        padding-inline: v-bind(paddingInline);
        margin-inline: v-bind(gapValue);
    }

    .message-bar-container input:focus {
        outline: none;
    }
</style>
