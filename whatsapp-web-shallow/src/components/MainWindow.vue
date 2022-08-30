<template>
    <div class="main-back-container main-container">
        <div class="main-back-header"></div>
        <div class="main-back-footer"></div>
    </div>
    <div class="main-window-container main-container">
        <OnLineView v-if="isOnline"/>
        <OffLineView v-else/>
    </div>
</template>


<script setup>
    import { onMounted, computed } from 'vue'
    import OffLineView from './OffLineView.vue'
    import OnLineView from './OnLineView.vue'

    onMounted(() => {
        const setMargin = () => {
            const mainWindow = document.getElementsByClassName('main-window-container')[0];

            if (window.innerWidth < window.screen.width) {
                mainWindow.style.margin = '0';
                mainWindow.style.width = '100%';
                mainWindow.style.height = '100%';
            } else {
                mainWindow.style.margin = '20px';
                mainWindow.style.width = String(window.innerWidth - 40) + 'px';
                mainWindow.style.height = String(window.innerHeight - 40) + 'px';
            }
        }

        window.addEventListener('resize', setMargin);
        window.addEventListener('load', setMargin);
    });

    const isOnline = computed(() => window.navigator.onLine);
</script>


<style scoped>
    .main-back-container {
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }

    .main-back-header {
        height: 8.3vw;
        min-height: 8.3vw;
        background-color: #128c7e;
    }

    .main-back-footer {
        flex: 1;
        background-color: #e9eaec;
    }

    .main-window-container {
        position: absolute;
        top: 0;
        left: 0;
        margin: 20px;
        background-color: #f0f2f5;
    }
</style>
