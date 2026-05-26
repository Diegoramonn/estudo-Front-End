const slider = 
document.getElementById("slider")

const next =
document.getElementById("next")

const prev = 
document.getElementById("prev")

const imagens = [
    "https://picsum.photos/600/300?1",

     "https://picsum.photos/600/300?2",

     "https://picsum.photos/600/300?3"
]

let index = 0
function mostrarSlider(){
    slider.src = imagens[index]
}

next.addEventListener("click", function(){
    index++
    if(index >= imagens.length){
        index = 0
    }

    mostrarSlider()
})

prev.addEventListener("click", function(){
    index--
    if(index < 0){
        index = imagens.length - 1
    }

    mostrarSlider()
})
     

