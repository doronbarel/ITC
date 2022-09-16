const xValue = document.getElementById("x-value");
const yValue = document.getElementById("y-value");
const fiboForm = document.getElementById("fiboForm");
const loader = document.getElementById("loadingWheel");
const errorMessage = document.getElementById("formAlert");

fiboForm.addEventListener('submit', (event) => {

    event.preventDefault();
    
    function resetParams() {

    }

    if(xValue.value>50) {

        yValue.style.display = "none";
        errorMessage.style.display = "inline-block";
        xValue.style.borderColor = '#D9534F';
        xValue.style.color = '#D9534F';
        
    } else {

        yValue.style.display = "none";
        loader.style.display = "inline-block";
        errorMessage.style.display = "none";
        xValue.style.borderColor = '#CCCCCC';
        xValue.style.color = '#000000';

        let fetchURL = 'http://localhost:5050/fibonacci/' + xValue.value;
        
        fetch(fetchURL)
            .then(async response => {

                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson ? await response.json() : response;

                if (isJson) {
                    loader.style.display = "none";
                    yValue.style.color = '#000000';
                    yValue.innerText = data.result;
                    yValue.style.display = "inline-block";
                } else {
                    response.text().then(error => {
                        loader.style.display = "none";
                        yValue.innerText = 'Server Error: ' + error;
                        yValue.style.color = '#D9534F';
                        yValue.style.display = "inline-block";
                   });
                }


            }).catch(error => {
                console.log(error)
            });

    }


});