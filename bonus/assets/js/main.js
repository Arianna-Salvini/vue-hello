console.log('Hello!');

const { createApp } = Vue

createApp({
    data(){
        return{
            image: 'https://picsum.photos/id/2/200/300',
            fullName: 'Arianna Salvini',
            description: 'Boolean student in Full-stack Web Development',
            classNumb: 'Classe 119',
        }
    }
}).mount('#app')