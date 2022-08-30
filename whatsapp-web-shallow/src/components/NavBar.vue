<template>
    <div class="navbar-container">
        <NavMenu />
        <NavSearch />
    </div>
</template>


<script setup>
    import NavMenu from './NavMenu.vue'
    import NavSearch from './NavSearch.vue'
    import { onMounted } from 'vue'

    const height = String(0.083 * window.screen.width - 20) + 'px';

    onMounted(() => {
        const navBar = document.getElementsByClassName('navbar-container')[0];
        navBar.style.height = height;
        navBar.style.minHeight = height;
    });
</script>


<style scoped>
    .navbar-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-bottom: thin solid #d9dadc;
    }
</style>
