// rest / spread object / array

function sum(a, b, c){
  return a + b + c
}

const nums = [1,2,3]
const nums1 = [4,5,6]

const newNums = [...nums, ...nums1]

console.log(newNums)

const user = {name:'ali', age:56}
const address = {city:'ankara', street:'kizilay'}

const newObj = {...user, ...address}

console.log(newObj)