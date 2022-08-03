// rest / spread

let user = {name: 'Oguz', age:27, city:'newCity'}

user = {...user, city:'Times'}
console.log(user) 

INITIAL_STATE = {
  loading: false,
  errorMessage: "",
  cars: ["Mercedes", "BMV", "Tesla"]
}

const reducer = (state = INITIAL_STATE, action)=> {
  switch(action.type) {
    case "addCars":
      return {...state, cars: [...state.cars, action.payload]}
    default:return state
  }
}


