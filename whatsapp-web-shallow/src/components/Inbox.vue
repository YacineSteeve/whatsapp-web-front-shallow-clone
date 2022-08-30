<template>
    <div class="inbox-container">
        <NavMenu>
            <h1>Hello</h1>
        </NavMenu>
        <div class="inbox-component">
            <h1>It's me</h1>
        </div>
    </div>
</template>


<script>
    import NavMenu from './NavMenu.vue';


</script>


<style scoped>
    .inbox-container {
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    .inbox-component {
        height: 35vh;
    }
</style>
