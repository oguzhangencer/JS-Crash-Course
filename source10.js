const name = 'John'
const user = {name,age:25}
function hello(name){
  return `Hello ${name}`
}

const user = {name:'John', age:25}
const name = 'John'

export{name, user,hello}

export (hello as default, user,name)