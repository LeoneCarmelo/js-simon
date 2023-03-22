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
    //create an array to save the random numbers
    const arrNewNumbers = []
    // create a while loop to put the 5 numbers into the array
    while (arrNewNumbers.length < 5) {
        const number = Math.ceil(Math.random() * 100)
        //check if the number is already included in the array
        if(!arrNewNumbers.includes(number))
        //put the number in the array
        arrNewNumbers.push(number)
    }
    console.log(arrNewNumbers)
    return arrNewNumbers
}

/**
 * print every single number of the array on screen
 * @param {generateNumber()} arr 
 */
function printOnScreen(arr) {
    for (let i = 0; i < arr.length; i++) {
        arrNumbers[i].textContent = arr[i]

    }
}

//set instructions for play button
btnEl.addEventListener('click', function() {
    printOnScreen(generateNumber())
    let seconds = 30
    pEl = document.createElement('p')
    pEl.textContent = seconds
    btnEl.insertAdjacentElement('afterend', pEl)
    let myTime = setTimeout(function() {
        if (Number(pEl.textContent) === 0) {
            clearTimeout(myTime)
            pEl.textContent = ''
            firstNumber.style.display = 'none'
            secondNumber.style.display = 'none'
            thirdNumber.style.display = 'none'
            fourthNumber.style.display = 'none'
            fifthNumber.style.display = 'none'
        } else {
            Number(pEl.textContent--)
        }
    }, 1000)
})
