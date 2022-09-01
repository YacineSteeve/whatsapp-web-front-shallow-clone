<template>
    <div class="icon-container">
        <font-awesome-icon v-bind="$attrs" size="lg"/>
    </div>
</template>


<script setup>
    const iconPadding = String(0.02 * window.screen.height) + 'px';
</script>


<style scoped>
    .icon-container {
        width: fit-content;
        height: fit-content;
        padding-inline: v-bind(iconPadding);
    }
</style>
