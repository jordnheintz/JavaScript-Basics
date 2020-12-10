// Challenge 1

const name = prompt("What is your name?");
const occupation = prompt(`Hi, ${name}! What do you do?`.toUpperCase());
const love = prompt(`Cool! Do you love being a ${occupation}?`);

if(love === "yes" || "Yes"){
    console.log(`${name} is a ${occupation} and loves it!`);
}else{
    console.log(`${name} is a ${occupation} and does not love it.`);
}

//Challenge 2

const colors = ["red", "green", "blue"];
const nameTwo = prompt("Hi! What is your name?");
const colorChoice = prompt(`${nameTwo}, choose a color: ${colors}`);
const colorRespone = alert(`You chose ${colorChoice}`);
const colorBroadcast = `<p>${nameTwo} chose ${colorChoice}!!!</p>`;
document.querySelector(`main`).innerHTML = colorBroadcast;

//Challenge 3
const catWeight = prompt("Hi! How many pounds does your cat weigh?")

if (catWeight < 5){
    alert("Tiny!");
} else if (catWeight < 10){
    alert("Small");
} else if (catWeight < 15){
    alert("Medium");
} else if (catWeight < 20){
    alert("Large");
} else if (catWeight = 20){
    alert("Huge!");
}

//Challenge 4

const nameThree = prompt("What is your name?");
const rateOfPay = prompt(`Hi, ${nameThree}! What is your rate of pay?`);
const hoursWorked = prompt("How many hours do you work?");
console.log(`${nameThree} worked a total of ${hoursWorked} hours recieving a pay of $${hoursWorked * rateOfPay}`);