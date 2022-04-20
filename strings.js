let fruits = ['apple', 'banana', 'orange']

console.log(fruits.length)

console.log(fruits[1].length)

console.log(fruits[1][0])

console.log(fruits)
console.log(fruits.toString()) //not a pretty list
console.log(fruits.join(', ')) //very pretty, added comma and space
console.log(fruits.join('@#$')) //another example

const delivery = 'kiwi|grapes|watermelon|cantaloupe'

const produce = delivery.split('|')
console.log(produce)
console.log(delivery.includes('watermelon'))