console.log("hello");

let main = document.querySelector('.main')
let box = document.querySelector('.box')
let body = document.querySelector('body')

function randomColor() {
    
    let min = Math.floor(0 + Math.random() *255)
    let med = Math.floor(0 + Math.random() *255)
    let max = Math.floor(0 + Math.random() *255)

    return `rgb(${min},${med},${max})`
}

box.addEventListener('click', (e)=>{
    
    // if ((body.style.backgroundColor = randomColor()) === (box.style.backgroundColor = randomColor()) ){
    //     alert("same color")
    // }
    body.style.backgroundColor = randomColor()
    box.style.backgroundColor = randomColor()
    box.style.color = randomColor()
    
})
