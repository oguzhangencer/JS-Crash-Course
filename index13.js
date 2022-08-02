// array methods
//.filter()

const product = [
  {id: 1, name: 'pencil', price: 5},
  {id: 2, name: 'notebook', price: 10},
  {id: 3, name: 'duster', price: 2},
  {id: 4, name: 'book', price: 7}
]


console.log(
  product
  .filter((product)=> product.price>5)
  .map((product)=>`${product.name} price more than 5`)
)

console.log(
  product.filter((product)=> 
  product.name.toLowerCase().includes('book'.toLowerCase()
)))