<template>
    <div class="offline-container">
        <div class="offline-img-wrapper">
            <img 
                src="../assets/images/intro-connection-light.jpg"
                alt="Please make sure you have an internet connection" />
        </div>
        <div class="text-wrapper">
            <h1>Keep your phone connected</h1>
            <p>Whatsapp connects to your phone to sync messages. To reduce data usage, connect your phone to Wi-Fi</p>
        </div>
    </div>
</template>


<script></script>


<style scoped>
    .offline-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
    }

    .offline-container .offline-img-wrapper img {
        height: 40vh;
        width: 40vh;
        border-radius: 50%;
    }

    .offline-container .text-wrapper {
        text-align: center;
        width: 70vh;
    }

    .offline-container .text-wrapper h1 {
        font-size: 1.5rem;
        margin-block: 2vh;
    }
</style>
