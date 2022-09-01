<template>
    <div class="search-input-container">
        <button>
            <font-awesome-icon icon="fa-solid fa-search"/>
        </button>
        <input
            type="search"
            v-bind="$attrs"
            v-model="searchValue" />
    </div>
</template>


<script setup>
    import { useAttrs, computed } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore();
    const attrs = useAttrs();

    const searchValue = computed({
        get() {
            return store.state[attrs['model']]
        },
        set(value) {
            store.commit('setSearchValue', {
                model: attrs['model'], 
                newValue: value
            })
        }
    });
</script>


<style scoped>
    .search-input-container {
        display: flex;
        align-items: stretch;
        border-radius: 7px;
        background-color: #f0f1f4;
        width: 100%;
        height: 100%;
    }

    .search-input-container button {
        width: 50px;
        opacity: .5;
        border: none;
        background: transparent;
    }

    .search-input-container button:hover {
        cursor: pointer;
    }

    .search-input-container input {
        font-size: 14px;
        padding-left: 20px;
        flex: 1;
        border: none;
        background: transparent;
    }

    .search-input-container input:focus {
        outline: none;
    }
</style>
