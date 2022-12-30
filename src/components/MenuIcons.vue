<template>
    <div class="menu-icons-container">
        <slot></slot>
    </div>
</template>


<script setup>
    const iconPadding = String(0.02 * window.screen.height) + 'px';
    const iconGap = String(0.01 * window.screen.height) + 'px';
</script>


<style scoped>
    .menu-icons-container {
        display: flex;
        flex-direction: row;
        height: fit-content;
        width: fit-content;
        gap: v-bind(iconGap);
        padding-inline: v-bind(iconPadding);
    }
</style>
