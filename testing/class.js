/*const monthsOfTheYear =[
    "january",
    "feburary",
    "march",
    "april",
    "may",
    "jane",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",

];

for (let i = 0; i < monthsOfTheYear.length; i++) {
    console.log(monthsOfTheYear[i]);
}

function sum(a,b){
    console.log(a+b)

}


sum(10, 20)


function sayHi(){
    console.log(Hello)
}

sayHi(Hello)*/

const myBox = document.getElementById("myBox");


function changecolor(event){
    event.target.style.backgroundcolor ="tomato";
    event.target.textcontent ="OUCH!";
}


myBox.addEventListener("click", changecolor)