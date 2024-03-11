console.log('Hello!');

const { createApp } = Vue

createApp({
    data(){
        return{
            image: 'https://picsum.photos/id/2/200/300',
            fullName: 'Arianna Salvini',
            description: 'Bollean student in full-stack web development',
            classNumb: 'Classe 119',
        }
    }
})