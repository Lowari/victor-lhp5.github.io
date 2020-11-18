//pour récupérer les boutton et les associés a un index
const allButton = document.querySelectorAll('button');
let allButtonArray = [...allButton];
//associe les classes aux buttons
allButtonArray.forEach(element => {
    element.classList.add('buttonHeight', 'fontSize', 'm-1');
});
//asscocier les numériques
const numérique = document.querySelectorAll(".num");
let numériqueArray = [...numérique];



//tout les id a récup
let plusElement = document.getElementById("plus");
let minusElement = document.getElementById("minus");
let multipleElement = document.getElementById("multiple");
let divideElement = document.getElementById("divide");
let egalElement = document.getElementById("egal");
let cElement = document.getElementById("C");
let firstNumberElement = document.getElementById("firstNumber");
let secondNumberElement = document.getElementById("secondNumber");
let resultNumberElement = document.getElementById("resultNumber");
let bojeuu = false;
let symbolElement = document.getElementById("symbol");
const spanResult = document.getElementById('spanResult');

//ajouter du texte a nos spans
numériqueArray.forEach(element => {
    element.classList.add('buttonHeight', 'fontSize','m-1');
    element.addEventListener('click', () => {
        if (bojeuu == false) {
            firstNumberElement.textContent += element.textContent;
        } else {
            secondNumberElement.textContent += element.textContent;
        }
    })
});
//function erase
cElement.addEventListener('click', () => {
    firstNumberElement.textContent = "";
    secondNumberElement.textContent = "";
    symbolElement.textContent = "";
    resultNumberElement.textContent = "";
    spanResult.textContent = "";
    bojeuu = false;
});
//on créée les opérateurs
const calculator = document.querySelectorAll('.calculator');
let calculatorArray = [...calculator];

calculatorArray.forEach(element => {
    element.addEventListener('click', () => {
        bojeuu = true;
        symbolElement.textContent = element.textContent;
    })
});
//function calcul
egalElement.onclick = function () {
    if (symbolElement.textContent == "+") {
        spanResult.textContent = parseFloat(firstNumberElement.textContent) + parseFloat(secondNumberElement.textContent);
    }
    if (symbolElement.textContent == "-") {
        spanResult.textContent = parseFloat(firstNumberElement.textContent) - parseFloat(secondNumberElement.textContent);
    }
    if (symbolElement.textContent == "*") {
        spanResult.textContent = parseFloat(firstNumberElement.textContent) * parseFloat(secondNumberElement.textContent);
    }
    if (symbolElement.textContent == "/") {
        spanResult.textContent = parseFloat(firstNumberElement.textContent) / parseFloat(secondNumberElement.textContent);
    }
    firstNumberElement.textContent = "";
    secondNumberElement.textContent = "";
    symbolElement.textContent = "";
    resultNumberElement.textContent = "";
    bojeuu = false;

}
spanResult.classList.add('fontSizes','text-right');