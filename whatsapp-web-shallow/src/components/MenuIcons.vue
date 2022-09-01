<template>
    <div class="menu-icons-container">
        <slot></slot>
    </div>
</template>


<script setup>
    const iconPadding = String(0.02 * window.screen.height) + 'px';
</script>


<style scoped>
    .menu-icons-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 100%;
        padding-inline: v-bind(iconPadding);
    }
</style>
