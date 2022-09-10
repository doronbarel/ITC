const xValue = document.getElementById("x-value");
const yValue = document.getElementById("y-value");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener('click', () => {
    fibonacci(xValue.value);
});

function fibonacci(number) {
    
    let n1 = 0,
        n2 = 1,
        tmp = 0;
    
    for (let i = 0; i < number; i++) {
        tmp = n1 + n2;
        n1 = n2;
        n2 = tmp;
    }
    yValue.innerText = n1;
}