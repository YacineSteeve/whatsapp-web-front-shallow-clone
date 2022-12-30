<template>
    <button type="button" class="icon-container button">
        <font-awesome-icon v-bind="$attrs" size="lg" color="#404040"/>
    </button>
</template>


<script setup>
    const iconHeight = String(0.05 * window.screen.height) + 'px';
</script>


<style scoped>
    .icon-container {
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 1 / 1;
        height: v-bind(iconHeight);
    }
</style>
