<template>
    <div class="profile-picture-container">
        <div class="profile-picture"></div>
    </div>
</template>


<script setup>
    import { useAttrs } from 'vue';

    const attrs = useAttrs();

    const [pictureUrl, size] = [`url(${attrs['url']})`, attrs['size']];
</script>


<style scoped>
    .profile-picture-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
        height: 100%;
    }

    .profile-picture {
        width: v-bind(size);
        height: v-bind(size);
        transform: scale(1, 1);
        border-radius: 50%;
        background-image: v-bind(pictureUrl);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
</style>
