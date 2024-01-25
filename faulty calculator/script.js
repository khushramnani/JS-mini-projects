 
 let num1 = parseInt(prompt("Enter your first number: "))
 let opp = prompt("Enter your oparator: ")
 let num2 = parseInt(prompt("Enter your second number: "))

let rand = Math.random()

let operations = {
   "+": num1 + num2,
   "-": num1 - num2,
   "*": num1 * num2,
   "/": num1 / num2,
};
let wrong_operations = {
   "+": num1 - num2,
   "-": num1 + num2,
   "*": num1 / num2,
   "/": num1 * num2,
};




if (rand > 0.1 && opp in operations){

   alert(rand);
   let right_result = operations[opp]
   alert(`result: ${right_result}`);
   
} else{
   let wrong_result = wrong_operations[opp]
   alert(`result: ${wrong_result}`);
}



