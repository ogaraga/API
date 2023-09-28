
//getting http from the server
const url = "http://localhost:5000/api/names";
const options = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": '*',
        'Accept': 'application/json'
    },
}
 
document.getElementById('btn').addEventListener('click', async () => {
    const inputs = document.getElementById('name').value.trim();
    const span = document.getElementById('error-message');
    if (inputs !== '') {
        const dataResp = await fetch(url, options);
        if (dataResp.ok) {
            span.innerHTML = JSON.stringify({
                Message: 'name found!',
                NameInfo: dataResp
            });
            span.style.color = "green";
            console.log(JSON.stringify({
                Message: 'name found!' ,
                NameInfo: dataResp
            }))
        }
        else {
            span.style.color = "red";
            span.innerText = "No matching names found!";
        }
    }
    else {
        span.style.color = "red";
        span.innerText = 'InputField cannot be empty!';
    }
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