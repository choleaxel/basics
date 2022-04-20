let car = {
    make: 'Mazda',
    model: 'CX-5',
    color: 'blue',
    year: 2016
}    
function carFunc(car1) {
    console.log(car.make, car.model)
}
carFunc(car)


const testArray = [ true, false, false, true, false, false, false, true, true, true, false ]

let trueCount = 0

for (let i = 0; i < testArray.length; i++) {
    if (testArray[i] === 'true') {
        trueCount++
    }
}

console.log("There are " + trueCount + " true values.");