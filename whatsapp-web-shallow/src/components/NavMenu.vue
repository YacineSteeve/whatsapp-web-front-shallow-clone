<template>
    <div class="nav-menu-container">
        <slot>Hello World</slot>
    </div>
</template>


<script setup>
    const menuHeight = String(
        0.083 * window.screen.width 
        - 0.055 * window.screen.height
        - 20) + 'px';
</script>


<style scoped>
    .nav-menu-container {
        height: v-bind(menuHeight);
        width: 100%;
        background-color: #f0f1f4;
    }
</style>
