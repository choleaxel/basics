let cars = ['Ferrari', 'Lamborghini', 'Audi', 'Aston Martin', 'Ford']

console.log(cars[1]) //Lamborghini
console.log(cars[1], cars[3]) //Gives us 2 cars from same array

console.log(cars.length) //How many cars is in the array?

let ourCars = [{
    brand: 'Audi',
    year: 2018,
    model: 'A3',
    miles: 25580,
    color: 'Grey'
}, {
    brand: 'Jeep',
    year: 2015,
    model: 'Grand Cherokee',
    color: 'Black',
    miles: 55000,
}]

console.log(ourCars[1].miles)

const {miles, year} = ourCars[0] //destructuring 

const age = 2022 - year  //finding the age of the car
const mileage = miles / age 

console.log(mileage + ' miles per year')

if (mileage < 10000) {
    console.log('This is a LOW mileage car')
} else {
    console.log('This is NOT a low mileage car.')
}

(mileage < 10000)
  ? console.log('This is a LOW mileage car.')
  : console.log('This is NOT a low mileage car.')
//alternately
const isIt = (mileage < 10000) ? 'is a' : 'is NOT a'

console.log(`This ${isIt} LOW mileage car.`)
