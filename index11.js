//array methods
//.includes() .toLowerCase()

const name = 'MEHMET'

const control = 'Mehmet'

console.log(name.toLowerCase().includes('met'))

console.log(name.toLowerCase().includes(control.toLowerCase()))

const newName = name.toLowerCase()

console.log(newName)

const product = [
  {id: 1, name: 'pencil', price: 5},
  {id: 2, name: 'notebook', price: 10},
  {id: 3, name: 'duster', price: 2},
  {id: 4, name: 'book', price: 7}
]

const search = "PENCIL"

console.log(
  product.filter((product)=>
  product.name.toLowerCase().includes(search.toLowerCase()))
)