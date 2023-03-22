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

const randomNumbers = generateNumber()
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
    document.querySelectorAll('span').innerHTML = ''
    printOnScreen(generateNumber())
    let timeToWait = setTimeout(function() {
        firstNumber.style.display = 'none'
        secondNumber.style.display = 'none'
        thirdNumber.style.display = 'none'
        fourthNumber.style.display = 'none'
        fifthNumber.style.display = 'none'
    }, 3000)
    questionComparePrint()
})

function questionComparePrint() {
    let questions = setTimeout(function() {
        const userNumbers = getUserNumbers()
        const numbersFound = compareArray(randomNumbers, userNumbers)
        //select an element where to show the result
        const resultEl = document.createElement('p')
        document.querySelector('.row').insertAdjacentElement('afterend', resultEl)
        //print result
        printResult(numbersFound, resultEl)
    }, 5000)
}

//ask to the user 5 numbers
function getUserNumbers() {
    const numbers = []
    while (numbers.length < 5) {
        let number = Number(prompt('Type a number'))
        if (!numbers.includes(number)) {
            numbers.push(number)
        } else {
           alert('Type another different number')
        }
    }
    return numbers
}

//compare the arrays
/**
 * 
 * @param {array with random numbers} arr1 
 * @param {array of number generated from the user*} arr2 
 * @returns 
 */
function compareArray(arr1, arr2) {
    const numbersFound = []
    // loop on the first array
    for (let i = 0; i < arr1.length; i++) {
        // take the element 
        const number = arr1[i]
        //check if arr2 includes the element of arr1
        if (arr2.includes(number)) {
            //true? push in the numbersFound array
            numbersFound.push(number)
        }
    }

    return numbersFound
}

//result
/**
 * 
 * @param {array with numbers found} numbersFound 
 * @param {element from dom} domEl 
 */
function printResult(numbersFound, domEl) {
    if(numbersFound.length > 0) {

        domEl.innerHTML = `You found ${numbersFound.length} numbers! Numbers found: ${numbersFound}`
    } else {
        domEl.innerHTML = `Sorry, try again!`
    }
}