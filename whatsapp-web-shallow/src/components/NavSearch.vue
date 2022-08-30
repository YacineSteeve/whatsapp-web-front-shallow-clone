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
    import { onMounted } from 'vue';

    onMounted(() => {
        const container = document.getElementsByClassName('nav-search-container')[0];
        const filterDiv = document.getElementsByClassName('nav-search-filter')[0];

        container.style.height = String(0.055 * window.screen.height) + 'px'
        container.style.paddingInline = String(0.0075 * window.screen.width) + 'px'
        container.style.paddingBlock = String(0.0075 * window.screen.height) + 'px'

        filterDiv.style.width = String(0.022 * window.screen.width) + 'px'
    });
</script>


<style scoped>
    .nav-search-container {
        display: flex;
        background-color: #ffffff;
        width: 100%;
    }

    .nav-search-container .nav-search-filter {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        border-radius: 8px;
    }
</style>
