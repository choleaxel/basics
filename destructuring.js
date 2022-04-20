const student = {
    firstName: 'Wade',
    shirt: 'Magenta',
    hair: 'red',
    glasses: true,
    height: 74,
}
 
const{ firstName, hair } = student

console.log(firstName, hair)

const alumni = ['Ashley', 'Peter', 'Aurelei', 'Sebas']

const [ash0, pet1, aur2] = alumni  //creating var for their index postion
console.log(aur2, ash0) // printing just the values in the 2nd and 0 posit


