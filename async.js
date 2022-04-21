console.log('This comes first. 🥚')

setTimeout(function () {
console.log('This is in the middle...')
}, 0)
// anything with a setTimeout will take longer, even when set to 0
// functions will take longer
console.log('This is the end. 🐓')

