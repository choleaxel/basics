const alumni = ['Ashley', 'Peter', 'Sebas', 'Zhuopu', 'Aurelie', 'Matt']

for(let alum of alumni) {
    console.log(alum)
} /* because its a for...of loop we know the alum will be the values
that fall into the alum bucket */ 

for(let i=0; i < alumni.length; i++) {
    console.log(i, alumni[i])
} // this is a for loop, most commonly used, even if not as easy
