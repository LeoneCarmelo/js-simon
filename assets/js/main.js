/* 
Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

//Import DOM's elements
const firstNumber = document.querySelector('.row > .col:first-child > span')
const secondNumber = document.querySelector('.row > .col:nth-child(2) > span')
const thirdNumber = document.querySelector('.row > .col:nth-child(3) > span')
const fourthNumber = document.querySelector('.row > .col:nth-child(4) > span')
const fifthNumber = document.querySelector('.row > .col:nth-child(5) > span')
const btnEl = document.querySelector('button')


//Put them in an array
const arrNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber]

// set a function that generates a number
function generateNumber() {
    let number = Math.floor(Math.random() * 10)
    return number
}

//set a function that put the number inside the element
function insertNumber() {
    for(let i = 0; i < arrNumbers.length; i++) {
    arrNumbers[i].textContent = generateNumber()
    }
}

//set instructions for play button
btnEl.addEventListener('click', function() {
    insertNumber()
})