const xValue = document.getElementById("x-value");
const yValue = document.getElementById("y-value");
const fiboForm = document.getElementById("fiboForm");

fiboForm.addEventListener('submit', (event) => {

    event.preventDefault();

    let fetchURL = 'http://localhost:5050/fibonacci/' + xValue.value;

    fetch(fetchURL).then(response => {
        response.json().then(data => {
            yValue.innerText = data.result;
        });
    });

});