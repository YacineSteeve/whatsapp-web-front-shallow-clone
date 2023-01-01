<template>
    <nav-menu>
        <div class="message-bar-container">
            <button class="message-bar-icon button">
                <font-awesome-icon 
                    icon="fa-regular fa-face-laugh"
                    color="dimgrey"
                    size="xl" />
            </button>
            <button class="message-bar-icon button">
                <font-awesome-icon  
                    icon="fa-solid fa-paperclip"
                    color="dimgrey"
                    size="xl" />
            </button>
            <input 
                id="input-bar"
                type="text"
                placeholder="Type a message"
                spellcheck="on"
                autofocus />
            <button 
                class="message-bar-icon button"
                v-on:click="playNotif">
                <font-awesome-icon 
                    icon="fa-solid fa-microphone"
                    color="dimgrey" 
                    size="xl" />
            </button>
        </div>
    </nav-menu>
</template>


<script setup>
    import NavMenu from './NavMenu.vue';
    import { onMounted, reactive } from 'vue';
    import { useStore } from 'vuex';
    import audioURL from '@/assets/audio/notif_sound.ogg';

    const gapValue = String(0.0125 * window.screen.height) + 'px';
    const paddingInline = String(0.01 * window.screen.height) + 'px';
    const paddingBlock = String(0.01 * window.screen.height) + 'px';

    const state = reactive({playing: false});

    const playNotif = () => {
        if (state.playing) {
            state.audio.pause();
            state.audio.currentTime = 0;
            let delay = setTimeout(() => {
                state.audio.play();
                clearTimeout(delay)
            }, 500);
        } else {
            if (!state.audio) {
                const audio = new Audio(audioURL);
                state['audio'] = audio;
            }
            state.audio.play();
            state.playing = true;
        }
    };

    onMounted(() => {
        const store = useStore();
        const inputBar = document.getElementById('input-bar');

        inputBar.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                store.commit('addNewMessageToChat', event.target.value);
                event.target.value = '';
            }
        })
    });
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
