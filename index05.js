// parameter defaults

function sum(a=0, b=0){
  return a + b
}

console.log(sum())

const stateStart = {loading: false, writing: [] }

const reducer = (state = stateStart, action) => {
  return state
}