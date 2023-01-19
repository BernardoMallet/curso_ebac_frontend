const form = document.getElementById('form');

const buttonCheck = document.getElementById('btn-submit')
const inputA = document.getElementById('inputA');
const inputB = document.getElementById('inputB');

function verifySelectors() {
    const numberA = Number(inputA.value);
    const numberB = Number(inputB.value);
    const fieldValueError = document.querySelector('.field-value-error');
    const successMessage = document.querySelector('.success-message'); 


    if (numberA > numberB) {
        fieldValueError.style.display = 'block';
    } else {
        fieldValueError.style.display = 'none';
        successMessage.style.display = 'block';
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    verifySelectors();

    inputA.value = '';
    inputB.value = '';
})
