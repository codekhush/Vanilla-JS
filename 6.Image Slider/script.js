const images = [
    "https://images.app.goo.gl/L3vMQjwnH4YvARM1",
    "https://images.app.goo.gl/bNmNrJQ5VtAWETW2",
    "https://images.app.goo.gl/Pj7N4y7RmcVNWvH3"
];

const img = document.querySelector('.img')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')

let index = 0

window.addEventListener('DOMContentLoaded', ()=>{
    img.src = images[index]
    img.alt = images[index]
})
prevBtn.addEventListener('click', ()=>{
    if(index>0){
        index=index-1
        img.src = images[index]
        img.alt = images[index]
    }else{
        index=images.length
    }
})
nextBtn.addEventListener('click', ()=>{
    if(index<2){
        index++
        img.src = images[index]
        img.alt = images[index]
    }else{
        index = 0
    }
})