let apiCall = new Promise((resolve, reject) => {
    setTimeout(() => reject("promise is done"), 2000)
});

apiCall.then(response => {
    console.log('response', response)
}).catch(err => console.log('error ', err))



async function checkApiCall() {
    let apiCall = new Promise((resolve, reject) => {
        setTimeout(() => resolve("promise is done"), 2000)
    });

    let result = await apiCall;
    console.log('result', result);
}

async function getUserData() {
    const userResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    let jsonResponse = await userResponse.json();
    console.log('result', jsonResponse)
}


fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(response => console.log('response', response))


