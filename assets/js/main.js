console.log('Hello Vue');

const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            image: './assets/img/01.jpg',
            imageHttp: 'https://picsum.photos/seed/picsum/500/600'
        }
    }
}).mount('#app')