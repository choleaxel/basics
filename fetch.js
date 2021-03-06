import fetch from 'node-fetch' 

// async function getDataAsync() {
// try {
//   const response = await fetch("https://api.sampleapis.com/beers/ale"); // GET -> Promise
//   const data = await response.json() //extracting the body of the response
//   console.log(data)
// } catch (err) {
//   console.error(err);
//   }
// }
// getDataAsync()

//-------------------------Zach version above, todd below

// fetch('https://api.sampleapis.com/beers/ale') //talking to another machine, getting info
// // with promise
//   .then(response => { // once we get the promise/information go on to next
//      return response.json()// do something. ()around response is not needed since it's a single param for the func
//   }) //uses the json method on the response to convert the body, the return keyword is 
//   //not necessary bc it is implied
//   .then(data => { // telling it to print info
//       console.log(data)
//   })
//   .catch((err) => { //if there is an error with library/info/typo falls into catch, consoles 'err'
//     console.error(err);
//   });

//------------------------- Short hand below
// fetch('https://api.sampleapis.com/beers/ale')
//    .then(response => response.json()
//    .then(data => console.log(data))
//    .catch((err) => console.error(err))

// //---------------------------------------------

// fetch('https://api.sampleapis.com/beers/ale')
//    .then(response => response.json()
//    .then(beers => {
//         for(let i=0; i < beers.length; i++) {
//           console.log((beers)[i].name)
//         }
//     }) 
//    .catch((err) => console.error(err)
//    //this prints just a list of the beer names

//GET fetch
fetch('https://api.sampleapis.com/beers/ale')
  .then()
  .then()
  .catch((myErr) => console.error('We got an error:', myErr))

//   //one way to write anonymous function
// function (myErr) {
//     console.log(myErr)
// }

// //arrow function way 
// () => {}

// () => console.log('test') // implicit return, do not need to write return, it's implied

