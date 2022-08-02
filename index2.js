//shorthand property

const name = "Oguz"

const age = 27

const user = {name, age}

console.log(user)

function Counter({startValue, step}){
  const [counter, setCounter] = useCounter({startValue, step})

  return <button onClick={setCounter}>{counter} ></button>
}


