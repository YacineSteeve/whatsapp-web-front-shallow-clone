<template>
    <nav-menu>
            <div class="inbox-header-container" :key="chat">
                <div class="inbox-infos">
                    <ProfilePicture 
                        v-bind:url="chat.profile_picture" 
                        v-bind:size="profilePictureSize" />
                    <div class="inbox-name">
                        {{ chat.name }}
                        <h4>&ensp;<span style="color: red">TODO:</span> &ensp; clickables => button+focus &ensp; && &ensp; transitions &ensp; && &ensp; semi-backend</h4>
                    </div>
                </div>
                <menu-icons>
                    <IconWrapper icon="fa-solid fa-search"/>
                    <IconWrapper icon="fa-solid fa-ellipsis-vertical"/>
                </menu-icons>
            </div>
    </nav-menu>
</template>


<script setup>
    import NavMenu from './NavMenu.vue';
    import ProfilePicture from './ProfilePicture.vue';
    import MenuIcons from './MenuIcons.vue';
    import IconWrapper from './IconWrapper.vue';
    import { computed } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore();
    const chat = computed(() => store.getters.getActiveChat);

    const paddingValue = String(0.019 * window.screen.height) + 'px';
    const profilePictureSize = String(0.028 * window.screen.width) + 'px';
</script>


<style scoped>
    .inbox-header-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        padding-left: v-bind(paddingValue);
    }

    .inbox-header-container .inbox-infos {
        display: flex;
        flex-direction: row;
        align-items: stretch;
    }

    .inbox-header-container .inbox-infos .inbox-name {
        display: flex;
        flex: 1;
        align-items: center;
        font-size: .85rem;
        padding-inline: v-bind(paddingValue);
    }
</style>
