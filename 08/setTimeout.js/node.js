const https = require('https')
const API = "https://jsonplaceholder.typicode.com/users?_limit=10"
https.get(API, res => {
    console.log(res.statuscode)
})
console.log("conectando API")