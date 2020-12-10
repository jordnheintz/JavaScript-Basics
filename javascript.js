const name = prompt("What is your name?");
const occupation = prompt(`Hi, ${name}! What do you do?`.toUpperCase());
const love = prompt(`Cool! Do you love being a ${occupation}?`);

if(love === "yes" || "Yes"){
    alert(`${name} is a ${occupation} and loves it!`);
}else{
    alert(`${name} is a ${occupation} and does not love it.`);
}