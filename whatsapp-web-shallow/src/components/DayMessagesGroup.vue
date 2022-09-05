<template>
    <div class="day-message-group-container">
        <div class="day-container" id="day-container">
            {{ day }}
        </div>
        <Message 
            v-for="message, index of messages"
            v-bind:message="message"
            v-bind:firstOfSerie="index === 0 || messages[index - 1].sender !== message.sender" />
    </div>
</template>


<script setup>
    import Message from './Message.vue';
    import { useAttrs, onMounted } from 'vue';

    const attrs = useAttrs();

    const [day, messages] = [attrs['day'], attrs['messages']];
    
    const dayPaddingTop = String(0.02 * window.screen.height) + 'px';
    const dayPaddingBottom = String(0.01 * window.screen.height) + 'px';
    const dayHeight = String(0.03 * window.screen.height) + 'px';

    onMounted(() => {
        const inbox = document.getElementsByClassName('veil')[0];

        inbox.addEventListener('scroll', () => {
            const dayContainers = document.getElementsByClassName('day-container');
            
            for (const container of dayContainers) {
                container.classList.add('sticky-day');
            }
        })

        setInterval(() => {
            const dayContainers = document.getElementsByClassName('day-container');

            for (const container of dayContainers) {
                container.classList.remove('sticky-day');
            }
        }, 3000);
    });
</script>


<style scoped>
    .day-message-group-container {
        font-size: .6rem;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    }

    .day-message-group-container .sticky-day {
        position: sticky;
        top: 0;
    }

    .day-message-group-container .day-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
        height: v-bind(dayHeight);
        padding-inline: v-bind(dayPaddingBottom);
        margin-bottom: v-bind(dayPaddingBottom);
        margin-top: v-bind(dayPaddingTop);
        border-radius: .25rem;
        background-color: white;
        z-index: 10;
    }
</style>
