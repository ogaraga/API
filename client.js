//submit form and consume api
document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault();
    let inputs = document.getElementById('inputs');
    const span = document.getElementById('error-message');
    if (inputs.value.trim() !== '' && /^[a-zA-Z]+$/.exec(inputs.value.trim()) ) {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }        
        const url = "http://localhost:5000/api/names";
        const dataResp = await fetch(url, options); console.log(dataResp)
        if (!dataResp.ok) {
            span.innerHTML = 'Names not found!'
            span.style.color = "red";
                       
        }
        else {
            const data = await dataResp.json();
            span.innerHTML = `${JSON.stringify(data)}`;
            span.style.color = "green";
        }
    }
    else {
        span.style.color = "red";
        span.innerText = 'InputField cannot be empty!';
        
    }
    inputs.value = '';
});

