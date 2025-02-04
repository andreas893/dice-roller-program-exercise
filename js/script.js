"use strict";

function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i <  numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="img/${value}.png" alt="Dice ${value}">`);
    }

    diceResult.textContent = `dice:${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}

// Spørgsmål:
// What is a function?:
// - En function er et stykke kode som indeholder en task. Koden er designet til at skulle udføre noget og aktiveres når man caller funktionen. 

// What is the difference between a function with and without parameters?:
// - En function uden parametre udføre altid den samme opgave/stykke kode som den bedes onmessage, hvor en function med parametre (variabel) er mere fleksibel og genbrugelig.

// What does return do in a function?
// - Det er et statement som stopper funktionen og returnerer en værdi?

// What is an array?
// Det er en variabel der kan indeholde flere forskellige værdier. SOm en liste.

// What is the difference between an array and a variable like let or const?
// Forskellen er at et array kan indeholde flere variabler og const og let kan ikke.

// What kind of operations can you do on an array?
// Man kan vælge en specifik variabel/værdi i arrayet ved at bruge 0,1,2,3 osv. Man kan konvertere det til en string. Man kan tilgå hele arrayet.

// What is template literals?
// Det bruges `` til at definere en String. Man kan bruge det til at konverterer alle datatyper til string.

// What is an addEventListener?
// Det er en metode til at tildele et event som cancelIdleCallback, hover til html elementer -> interaktivitet

// How is an addEventListener different from a onclick event inside a hmtl button element?
// Man kan tildele flere event handlers til samme element/funktion, man kan bruge det til andre events udover click. Det seperere html og javascript.

