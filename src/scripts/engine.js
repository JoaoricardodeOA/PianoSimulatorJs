const pianoKeys = document.querySelectorAll(".piano-keys .key");
let mappedKeys=[]
const volumeSlider = document.querySelector(".volume-slider input")
const keysCheck = document.querySelector(".keys-check input")

const playtune = (key) =>{
    let audio = new Audio("./src/tunes/a.wav")
    audio.src=`./src/tunes/${key}.wav`
    audio.play()
    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add('active')
    setTimeout(()=>{
        clickedKey.classList.remove("active")
    },150)
}


pianoKeys.forEach((key)=>{
    key.addEventListener("click",()=>playtune(key.dataset.key))
    mappedKeys.push(key.dataset.key)
})

document.addEventListener("keydown",(e)=>{
    if(mappedKeys.includes(e.key.toLowerCase())){
        playtune(e.key.toLowerCase())
    }
})

const handleVolume = (e) =>{
    audio.volume = e.target.value
}

const showHideKeys = () =>{
pianoKeys.forEach(key=>key.classList.toggle("hide"))
}
volumeSlider.addEventListener("input",handleVolume)

keysCheck.addEventListener("click",showHideKeys)