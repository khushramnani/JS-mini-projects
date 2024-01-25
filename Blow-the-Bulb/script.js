var bulb = document.querySelector('.bulb')
var button = document.querySelector('#btn')

let flag = 0

button.addEventListener('click',()=>{
    if (flag == 0) {
        bulb.style.backgroundColor = 'Transparent'
        flag = 1
    } else{
        bulb.style.backgroundColor = 'yellow'
        flag = 0

    }
})

