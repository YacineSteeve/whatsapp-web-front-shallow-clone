<template>
    <div class="profile-picture-container">
        <div class="profile-picture"></div>
    </div>
</template>


<script setup>
    import { useAttrs } from 'vue';

    const attrs = useAttrs();

    const [pictureUrl, size] = [`url(${attrs['url']})`, attrs['size']];

    const pad = 0.0095 * window.screen.height;
    
    const paddingInline = String(2 * pad) + 'px';
    const paddingBlock = String(pad) + 'px';
</script>


<style scoped>
    .profile-picture-container {
        width: fit-content;
        height: 100%;
        padding-inline: v-bind(paddingInline);
        padding-block: v-bind(paddingBlock);
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
