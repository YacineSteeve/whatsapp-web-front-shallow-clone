<template>
    <button class="archived-container">
        <div class="archived-icon-wrapper">
            <font-awesome-icon icon="fa-solid fa-inbox" color="#128c7e"/>
        </div>
        <div class="archived-text-wrapper">
            Archived
        </div>
        <div class="archived-count-wrapper">
            0
        </div>
    </button>
</template>


<script setup>
    const archivedHeight = String(0.055 * window.screen.height) + 'px';
    const elementsPadding = String(0.017 * window.screen.height) + 'px';
</script>


<style scoped>
    .archived-container {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        width: 100%;
        height: v-bind(archivedHeight);
        min-height: v-bind(archivedHeight);
        background: transparent;
        border: none;
        padding-inline: v-bind(elementsPadding);
    }

    .archived-container:hover {
        cursor: pointer;
    }

    .archived-container:focus {
        border: 2px solid black;
    }

    .archived-container > * {
        display: flex;
        font-size: .85rem;
        height: 100%;
        align-items: center;
        padding-inline: v-bind(elementsPadding);
    }

    .archived-container .archived-text-wrapper {
        flex: 1;
    }

    .archived-container .archived-count-wrapper {
        font-weight: bold;
        color: #25d366;
    }
</style>
