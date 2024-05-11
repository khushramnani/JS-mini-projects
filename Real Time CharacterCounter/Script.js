var textArea = document.querySelector("#textArea")

var totalCharacter = document.querySelector('#total-char')


var remainingCharacter = document.querySelector('#remaining-char')
textArea.addEventListener('keyup', ()=>{
    console.log("character count");

    counter()
})

function counter() {

let getTotal = totalCharacter.innerText = textArea.value.length

let remainingvalue = remainingCharacter.innerText = textArea.getAttribute("maxlength") - getTotal

if (getTotal < 80 ) {
    textArea.style.color = 'green';
} else if (getTotal >=80 && getTotal <=120   ) {
    textArea.style.color = 'orange';
}   else {
    textArea.style.color = 'red';
}



}