<template>
    <div class="nav-search-container">
        <SearchInput 
            placeholder="Search or start new chat" 
            model="searchValueInbox"/>
        <div class="nav-search-filter">
            <font-awesome-icon icon="fa-solid fa-bars"/>
        </div>
    </div>
</template>


<script setup>
    import SearchInput from './SearchInput.vue'

    const paddingInline = String(0.01 * window.screen.width) + 'px';
    const paddingBlock = String(0.0075 * window.screen.height) + 'px';
</script>


<style scoped>
    .nav-search-container {
        display: flex;
        background-color: #ffffff;
        width: 100%;
        gap: v-bind(paddingInline);
        padding-inline: v-bind(paddingInline);
        padding-block: v-bind(paddingBlock);
        flex: 1;
    }

    .nav-search-container .nav-search-filter {
        display: flex;
        align-items: center;
        width: fit-content;
        height: 100%;
    }
</style>
