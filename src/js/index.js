const { loadModule } = window['vue3-sfc-loader'];
import { options } from './options.js'

const app = Vue.createApp({
    components: {
        'App': Vue.defineAsyncComponent(() => loadModule('./App.vue', options))
    },
    template: '<App></App>'
});

app.mount('#app');
