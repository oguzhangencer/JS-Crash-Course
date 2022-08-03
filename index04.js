// object / array destructuring

const user ={
  name: 'Oguz',
  age: 26,
  address: 'newCity',
  country: 'United States',
  job: 'software'
}

const {name, age} = user

console.log(name)
console.log(age)


const { name, ...theOthers} = user
 rest/spread

console.log(theOthers)

function userShow ({name, age}){
  return `user name ${name}, ${age} year-old `
}

const numbers = [1,2,3,4,5]
const [one, two, three, four, five] = numbers

console.log(one,  two, three, four, five)

const [firstNumber, ...theOthersNumbers] = numbers

console.log(firstNumber)
console.log(theOthersNumbers)


