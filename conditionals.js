
let firstName = 'Nichole'
//let firstName = null
let lastName = 'Axel'

if(firstName){
    console.log(`Hello world, ${firstName}`)
} else if (lastName){
    console.log('My last name is ' + lastName)
} else { 
    console.log('Hello world, stranger')
}

let fullName = firstName && lastName ? `My full name is ${firstName} ${lastName}`: "You are nameless"
console.log(fullName)

const today = "Tuesday"
let result = today === "Monday" ? "Darie is getting paid": "Darie is broke"
console.log(result)

const fruit = ""

switch(fruit) {
    case "Orange" :
        console.log("This is an Orange")
        break
    case "Apple" :
        console.log("This is an Apple")
        break
    default:
        console.log("We are out of fruits")
        break    
}

function sum(a, b) {
    const result = a + b 
    return result
}
let addition = sum(2, 7)
console.log("The sum is", addition)
