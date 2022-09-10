const xValue = document.getElementById("x-value");
const yValue = document.getElementById("y-value");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener('click', () => {
    var result = 0;
    for(let i = 0; i <= xValue.value; i++) {
        result = fibonacci(i);
    }
    yValue.innerText = result;
});

function fibonacci(number) {
    if(number < 2) {
        return number;
    }
    else {
        return fibonacci(number-1) + fibonacci(number - 2);
    }
}