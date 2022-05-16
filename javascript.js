console.log("Whaddup")

console.log("Whaddup again, this is a multiple row message!")

let x = 100 + 50;
console.log(x)

console.log(23 + 97);

console.log(1+2+3+4+5+6);

console.log((4+6+9)/77);

let a = 10;
console.log(a)
console.log(9*a);
let b = 7*a;
console.log(b);

const max = 57;
let actual = max -13;
let percentage = actual/max;

percentage;

const btn = document.querySelector('button');
const txt = document.querySelector('p');
function updateBtn(){
    if (btn.textContent === "Start machine"){
        btn.textContent = "Stop machine";
        txt.textContent = "The machine has started!";
    }
    else {
        btn.textContent = "Start machine";
        txt.textContent = 'The machine is stopped';
    }
}
if (btn){
    btn.addEventListener('click', updateBtn);
}
else{
    console.log("wtf")
}


const string = 'The revolution will not be televised.';
console.log(string);

const badString = string;
console.log(badString);


const one = "Hello, ";
const two = "how are you?";
console.log(`${one}${two}`);

const button = document.querySelector('button');

// function greet(){
//     const name = prompt('What is your name?');
//     alert(`Hello ${name}, nice to see you!`);
// }

// button.addEventListener('click', greet);

let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true){
    childsAllowance = 10;
}else{
    childsAllowance = 5;
}

console.log(childsAllowance);



const select = dcument.querySelector('select');
const para =document.querySelector('p');


select.addEventListener('change', setWeather);

function setWeather() {
    const choice = select.value;

    if (choice === 'sunny'){
        para.textContent = "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
    }
}













