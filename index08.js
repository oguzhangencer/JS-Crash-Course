// ternary conditional

const weather = 'rainy'

weather === 'sunny'
? console.log('weather is sunny')
: weather === 'rainy'
?console.log('weather is rainy')
:console.log('weather is wind')

const value = {name:'ahmet'}

Object.keys(value).length
? console.log('right')
: console.log('wrong')