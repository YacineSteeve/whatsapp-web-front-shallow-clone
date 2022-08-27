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
                mainWindow.style.marginTop = '0';
                mainWindow.style.marginLeft = '0';
                mainWindow.style.marginRight = '0';
                mainWindow.style.width = '100%';
            } else {
                mainWindow.style.marginTop = '20px';
                mainWindow.style.marginLeft = '20px';
                mainWindow.style.marginRight = '20px';
                mainWindow.style.width = String(window.innerWidth - 40) + 'px';
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
    }

    .main-back-header {
        margin: 0;
        height: 20%;
        background-color: #128c7e;
    }

    .main-back-footer {
        height: 90%;
    }

    .main-window-container {
        position: absolute;
        top: 0;
        left: 0;
        margin-top: 20px;
        margin-left: 20px;
        margin-right: 20px;
        background-color: #f0f2f5;
    }
</style>
