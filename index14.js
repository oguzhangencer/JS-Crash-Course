//array methods
//.reduce()

const product = [
  {id: 1, name: 'pencil', price: 5},
  {id: 2, name: 'notebook', price: 10},
  {id: 3, name: 'duster', price: 2},
  {id: 4, name: 'book', price: 7}
]

const totalProductPrice =product.reduce(
  (totalPrice, product) => (totalPrice = totalPrice + product.price), 0
)

console.log({totalProductPrice})

const totalString =product.reduce(
  (totalPrice, product) => (totalPrice = `${totalPrice} + ${product.price}`), 0
)

console.log({totalString})

const totalRow =product.reduce(
  (totalPrice, product) => (totalPrice = [...totalPrice, product.name]),[]
)

const totalRow = product.map((product) => product.name)

console.log({totalRow})