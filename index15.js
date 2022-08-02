// promises and async/await

const getData = new Promise((resolve, reject) => {
  const gotData = true
  if(gotData){
    resolve('Data have gotten')
  } else{
    reject('Data have not gotten')
  }
})

getData
.then((answer)=> console.log('Answer is', answer))
.catch((error)=> console.log('Error is', error))

const axios = require('axios')

async function getCountry(){
  const countryList = await axios.get("https://restcountries.eu/rest/v2/all")
  console.log(countryList.data[3])
}

getCountry()