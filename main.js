import updateImage from './updateVariableFunction.js'

let inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('change', updateImage);
    input.addEventListener('mousemove', updateImage);
})