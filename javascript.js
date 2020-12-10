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
