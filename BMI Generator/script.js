
window.onload = () => {
    let button = document.querySelector("#btn");
 
    // Function for calculating BMI
    button.addEventListener("click", calculateBmi);
};


function calculateBmi() {
    let height = parseInt(document.querySelector('#height').value)
    let weight = parseInt(document.querySelector('#weight').value)    
    let result = document.querySelector('.result')
    

    if (height == '' ||isNaN(height)) {
        result.innerHTML = "invalid height"
        console.log('clicked');

    } else if (weight == ""  || isNaN(weight)){

        result.innerHTML = "invalid height"
        console.log('clicked');

    }else{
        let Bmi = (weight / (height * height) /10000).toFixed(2) 
        
        result.innerHTML = `your bmi is : ${Bmi}`
        console.log(Bmi);
    }



}





























































// const form = document.querySelector('form')
// const heading = document.querySelector('h2')

// document.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     const height = parseInt(document.querySelector('#height').value)
//     const weight = parseInt(document.querySelector('#weight').value)
//     // const result = document.querySelector('#result')
//     const showresult = document.querySelector('.showresult')

//     if (height === "" || height < 0 || isNaN(height)) {
//         showresult.innerHTML = "invalid height"
//     }
//     else if (weight === "" || weight < 0 || isNaN(weight)) {
//         showresult.innerHTML = "invalid weight"
//     }
//     else{
//         const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//         showresult.innerHTML = `<span>${bmi}</span>`
//         form.style.display = 'none'
//         heading.innerHTML = 'your BMI is '
//     }
// })


