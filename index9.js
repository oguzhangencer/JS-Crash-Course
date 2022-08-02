// array methods

const product = [
  {id: 1, name: 'pencil', price: 5}
  {id: 2, name: 'notebook', price: 10}
  {id: 3, name: 'duster', price: 2}
  {id: 4, name: 'book', price: 7}
]

console.log(
  'Find: ',
  product.find((product)=> product.price > 5)
)

console.log(
  'Some: ',
  product.some((product)=> product.price <= 2)
)

console.log(
  'Every: ',
  product.every((product)=> product.price > >2)
)