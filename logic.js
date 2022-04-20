const myName = 'Todd'

console.log("Hello", myName || 'guest') //string has value, is truthy

const myName2 = ''

console.log("Hello", myName2 || 'guest') //empty string is falsey

