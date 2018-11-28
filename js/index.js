document.querySelectorAll('.digBot')
    .forEach( el => el.addEventListener('click', digClick));
    
const display = document.querySelector('.display');

function digClick(ev) {
    if (display.value == "0") {
    display.value = "";
    display.value += ev.target.innerText;
    }else {
      display.value += ev.target.innerText;  
    }
}

const calcDisplay = document.querySelector('.operation_display');
const operDisplay = document.createElement('p');

document.querySelectorAll('.oper')
    .forEach( el => el.addEventListener('click', operClick));
    
function operClick(ev) {
    operDisplay.textContent = display.value + ev.target.innerText;
    calcDisplay.appendChild(operDisplay);
    display.value = "";
}

document.querySelectorAll('.equal')
    .forEach( el => el.addEventListener('click', eqClick));
    
function eqClick(ev) {
    operDisplay.textContent = operDisplay.textContent + display.value;
    display.value = eval(operDisplay.textContent);
}

document.querySelectorAll('.clear')
    .forEach( el => el.addEventListener('click', clearEver));
    
function clearEver(ev) {
    display.value = "0";
    operDisplay.textContent = "";
}
