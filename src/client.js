const myNames = require('../igboNames/names')

document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    let inputs = document.getElementById('inputs');
    const span = document.getElementById('error-message');
    if (inputs.value !== '' && inputs.value === myNames.forEach(myName=>myName.name)) {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }        
        const url = "http://localhost:5000/api/names/";
        const dataResp = await fetch(url, options);
        if (!dataResp.ok) {
            span.innerHTML = 'Name not found!'
            span.style.color = "red";
            console.log({
                Message: 'Name not found!',
                NameInfo: {}
            })
            
        }
        else {
            const data = await dataResp.json();
            span.innerHTML = `Message: Name found! \n NameInfo: ${data}`;
            span.style.color = "green";
        }
    }
    else {
        span.style.color = "red";
        span.innerText = 'InputField cannot be empty!';
        
    }
    inputs.value = '';
});

//post resquest

// document.getElementById('btn').addEventListener('click', async () => {
//     const inputs = document.getElementById('name').value.trim();
//     const span = document.getElementById('error-message');
//     if (inputs !== '') {
//         const url = "http://localhost:5000/api/names";
// const options = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Origin": '*',
//         'Accept': 'application/json'
//     },
// }
//         const dataResp = await fetch(url, options);
//         if (dataResp.ok) {
//             span.innerHTML = JSON.stringify({
//                 Message: 'name found!',
//                 NameInfo: dataResp
//             });
//             span.style.color = "green";
//             console.log(JSON.stringify({
//                 Message: 'name found!' ,
//                 NameInfo: dataResp
//             }))
//         }
//         else {
//             span.style.color = "red";
//             span.innerText = "No matching names found!";
//         }
//     }
//     else {
//         span.style.color = "red";
//         span.innerText = 'InputField cannot be empty!';
//     }
// });