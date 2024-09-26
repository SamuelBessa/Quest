const form = document.querySelector('.dados-usuario');
const inputs = document.querySelectorAll('.input');
const errorMessages = document.querySelectorAll('.erro');

function validateForm(event) {
    event.preventDefault();
    let isValid = true;

    inputs.forEach((input, index) => {
        if (input.value.trim() === "") {
            errorMessages[index].style.display = 'block';
            input.style.border = '2px solid red';
            isValid = false;
        } else {
            errorMessages[index].style.display = 'none';
            input.style.border = '2px solid green';
        }
    });

    if (isValid) {
        inputs.classList.add('certo');
        form.submit();
    }
}

const button = document.querySelector('.button');
button.addEventListener('click', validateForm);

