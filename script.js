let names = "bishnu"
let email = "s@1.co"
let message = ""
const data = localStorage.setItem("user", {names, email, message})
data.JSON()

console.log(data)