<template>
    <div class="inbox-container">
        <div class="intro-items-container">
            <img 
                src="../assets/images/intro-background.jpg"
                alt="Whatsapp Web Shallow"
                class="intro-img" />
            <div class="intro-text-wrapper">
                <div class="intro-title">
                    <br/>
                    <h1>Whatsapp Web Shallow</h1>
                </div>
                <span></span>
                <div class="intro-text">
                    Send and receive messages without keeping your phone online.
                    <br/>
                    Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
                </div>
            </div>
        </div>
        <div class="encrytion-text">
            <font-awesome-icon icon="fas fa-lock-open" />
            <span>&ensp;Not encrypted at all</span>
        </div>
    </div>
</template>


<script>


</script>


<style scoped>
    .inbox-container {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        flex: 1;
        background-color: #f9fafc;
    }

    .intro-items-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 80%;
        width: 100%;
    }

    .intro-items-container .intro-img {
        width: 39%;
    }

    .intro-items-container .intro-text-wrapper span {
        margin-block: 1vh;
    } 

    .intro-items-container .intro-text-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        text-align: center;
        width: fit-content;
    }

    .intro-items-container .intro-text-wrapper .intro-text {
        color: grey;
    }

    .encrytion-text {
        color: grey;
        width: fit-content;
        left: 50%;
        transform: translateX(-50%);
    }

    .fa-lock-open {
        height: .6rem;
    }
</style>
