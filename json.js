let car = {
    brand: 'Audi',
    year: 2018,
    model: 'A3',
    miles: 25580,
    color: 'Grey'
}

console.log(car) //print JS version

const carJson = JSON.stringify(car) //JS to JSON version 

console.log(carJson) //print JSON version

const carParsed = JSON.parse(carJson) //JSON back to JS version

console.log(carParsed) //Print JS version again
/* stringify is taking the object and putting it into proper JSON format, 
turns into a single string so it's easier to send */
