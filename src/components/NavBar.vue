<template>
    <div class="navbar-container">
        <nav-menu>
            <div class="menu-container">
                <ProfilePicture 
                    v-bind:url="profilePictureURL" 
                    v-bind:size="profilePictureSize"/>
                <menu-icons>
                    <IconWrapper icon="fa-solid fa-spinner"/>
                    <IconWrapper icon="fa-solid fa-message"/>
                    <IconWrapper icon="fa-solid fa-ellipsis-vertical"/>
                </menu-icons>
            </div>
        </nav-menu>
        <NavSearch />
    </div>
</template>


<script setup>
    import NavMenu from './NavMenu.vue'
    import NavSearch from './NavSearch.vue'
    import ProfilePicture from './ProfilePicture.vue';
    import MenuIcons from './MenuIcons.vue';
    import IconWrapper from './IconWrapper.vue';
    import profilePictureURL from '@/assets/images/profile-picture-boy-1.jpeg';

    const navbarHeight = String(0.083 * window.screen.width - 20) + 'px';
    const paddingLeft = String(0.019 * window.screen.height) + 'px';
    const profilePictureSize = String(0.028 * window.screen.width) + 'px';
</script>


<style scoped>
    .navbar-container {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        border-bottom: thin solid #d9dadc;
        height: v-bind(navbarHeight);
        min-height: v-bind(navbarHeight);
    }

    .navbar-container .menu-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        padding-left: v-bind(paddingLeft);
    }
</style>
