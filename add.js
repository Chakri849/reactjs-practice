let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let userInputElement = document.getElementById("userInput");
let gameResultElement = document.getElementById("gameResult");


let successMessage = "Congratulations! You got it right";
let tryAgainMessage = "Please Try Again!";

function restart() {
    let firstRandomNumber = Math.ceil(Math.random() * 100);
    let secondRandomNumber = Math.ceil(Math.random() * 100);
    firstNumberElement.textContent = firstRandomNumber;
    secondNumberElement.textContent = secondRandomNumber;
    userInputElement.value = "";
    gameResultElement.textContent = "";
}
restart();

function check() {
    let firstRandomInteger = parseInt(firstNumberElement.textContent);
    let secondRandomInteger = parseInt(secondNumberElement.textContent);
    let userEnteredSum = parseInt(userInputElement.value);
    let sumOfTwoRandomIntegers = firstRandomInteger + secondRandomInteger;
    if (userEnteredSum===sumOfTwoRandomIntegers) {
        gameResultElement.textContent = successMessage;
        gameResultElement.classList.add("congratulations");
    }
    else {
        gameResultElement.textContent = tryAgainMessage;
        gameResultElement.classList.add("tryAgain");
    }
}