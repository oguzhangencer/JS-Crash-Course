//array methods 
//.map()

const product = [
  {id: 1, name: 'pencil', price: 5},
  {id: 2, name: 'notebook', price: 10},
  {id: 3, name: 'duster', price: 2},
  {id: 4, name: 'book', price: 7}
]

const productCreater = (product) => `${product.name} price ${product.price}$`

console.log(product.map(productCreater))