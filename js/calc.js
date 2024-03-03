//Declar elementele
const btn = document.querySelector('.calc');
const select = document.getElementById('list');
const sign = document.getElementById('sign');
const firstInput = document.getElementById('first');
const secondInput =document.getElementById('second');
const rezultat =document.getElementById('result');

// Salvez operatia curenta intr-o variabila
let operation = document.getElementById('list').value;

select.addEventListener('change', () => {

    //Schimb operatia
    operation = document.getElementById('list').value;

    // Schimb interfata
    changeUI();

    //Reseteaza interfata
    resetUI();
})

btn.addEventListener('click', () => {
    //Citesc valorile input-urilor
    let firstValue = Number(firstInput.value);
    let secondValue = Number(secondInput.value);
    // console.log(firstValue, secondValue);

    //Calculez si afisez rezultatul
    showResult(firstValue, secondValue);

})

function resetUI() {
    firstInput.value = "";
    secondInput.value = "";
    rezultat.textContent = "?";
} 

function calculate(number1, number2) {
    let result;
    if(operation === 'add') {
        result = number1 + number2;
    } else if(operation === 'subtr') {
        result = number1 - number2;
    } else if(operation === 'multi') {
        result = number1 * number2;
    } else if(operation === 'div') {
        result = number1 / number2;
    } else if(operation === 'pow') {
        result = 1;
        for(var i = 1; i <= number2; i++) {
            result *= number1;
        }
    }
    return result;
}

function showResult(num1, num2) {
    rezultat.textContent = calculate(num1, num2).toFixed(2);
}

function changeUI() {
    switch(operation) {
        case 'add':
            sign.textContent = '+'; 
            removePower();
            break;
        case 'subtr':
            sign.textContent = '-'; 
            removePower();
            break;
        case 'multi':
            sign.textContent = 'x'; 
            removePower();
            break;
        case 'div':
            sign.textContent = '/'; 
            removePower();
            break;
        case 'pow':
            sign.textContent = '^';
            addPower();
            break;
    }
}

function addPower() {
    firstInput.setAttribute('placeholder', '');
    secondInput.setAttribute('placeholder', '');
    firstInput.classList.add('power');
    secondInput.classList.add('power');
}

function removePower() {
    firstInput.setAttribute('placeholder', 'Add any number');
    secondInput.setAttribute('placeholder', 'Add any number');
    firstInput.classList.remove('power');
    secondInput.classList.remove('power');
}