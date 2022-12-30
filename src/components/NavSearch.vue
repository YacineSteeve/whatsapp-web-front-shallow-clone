<template>
    <div class="nav-search-container">
        <SearchInput 
            placeholder="Search or start new chat" 
            model="searchValueChats"/>
        <button class="nav-search-filter button">
            <font-awesome-icon icon="fa-solid fa-bars" color="#404040"/>
        </button>
    </div>
</template>


<script setup>
    import SearchInput from './SearchInput.vue'

    const paddingInline = String(0.0095 * window.screen.width) + 'px';
    const paddingBlock = String(0.0075 * window.screen.height) + 'px';
    const iconHeight = String(0.04 * window.screen.height) + 'px';
</script>


<style scoped>
    .nav-search-container {
        display: flex;
        background-color: #ffffff;
        width: 100%;
        gap: calc(.5 * v-bind(paddingInline));
        padding-left: v-bind(paddingInline);
        padding-right: calc(.5 * v-bind(paddingInline));
        padding-block: v-bind(paddingBlock);
        flex: 1;
    }

    .nav-search-container .nav-search-filter {
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 1 / 1;
        height: v-bind(iconHeight);
        background: transparent;
    }
</style>
